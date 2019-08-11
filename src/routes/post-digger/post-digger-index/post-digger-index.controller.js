const toLower = text => text.toString().toLowerCase()

const searchByName = (posts, term) => {
  if (term) {
    return posts.filter(post => toLower(post.post_title).includes(toLower(term)))
  }

  return posts
}

export default {
  data,
  props: {
    plugin: Object
  },
  mounted,
  created,
  computed: getComputed(),
  methods: getMethods()
}

function data () {
  return {
    showDialog: false,
    selected: [],
    search: null
  }
}

function mounted () {
}

function created () {
  const vm = this
  vm.loadPosts()
}

function getComputed () {
  return {
    loadingPosts () {
      return this.$store.state.posts.loading
    },
    searched: {
      get () {
        const vm = this
        return searchByName(vm.$store.state.posts.posts, this.search)
      },
      set (value) {
        const vm = this
        vm.$store.commit('compass/ACTIVATE_PLUGIN', value)
      }
    }
  }
}

function getMethods () {
  return {
    loadPosts () {
      this.$store.dispatch('posts/LOAD_POSTS')
    },
    onSelect (items) {
      this.selected = items
    },
    openEditor () {
      const vm = this
      vm.showDialog = true
    },
    getAlternateLabel (count) {
      let plural = ''

      if (count > 1) {
        plural = 's'
      }

      return `${count} post${plural} selected`
    }
  }
}
