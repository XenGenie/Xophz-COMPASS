import NprogressContainer from 'vue-nprogress/src/NprogressContainer.vue'
import navDrawer from '../routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'Billboard',
  props: {
  },
  data,
  watch: getWatched(),
  created: onCreated,
  methods: getMethods(),
  computed: getComputed(),
  // mixins : [navDrawer],
  components: { navDrawer, NprogressContainer }
}

function data () {
  return {
    mini: true
  }
}

function getMethods () {
  return {
    setMini () {
      this.mini = !this.mini
    },
    showBottomSheet () {
      this.bottomSheet = true
    }
  }
}

function getComputed () {
  return {
    userMask: {
      get () {
        return this.$store.state.compass.userMask
      }
    },
    plugin: {
      get () {
        return this.$store.state.compass.activePlugin
      }
    },
    billboard: {
      get () {
        return this.$store.state.compass.billboard
      }
    },
    billboardChips: {
      get () {
        return this.$store.state.compass.billboard.chips
      }
    },
    currentUser: {
      get () {
        return this.$store.state.compass.currentUser
      }
    },
    iconImg () {
      const vm = this
      return vm.plugin.icon ? vm.plugin.icon : false
    },
    bottomSheet: {
      get () {
        return this.$store.state.compass.bottomSheet
      },
      set (isActive) {
        this.$store.dispatch('compass/SET_BOTTOM_SHEET', isActive)
      }
    }
  }
}

function onCreated () {
  this.breadcrumbs = this.$route.matched
}

function getWatched () {
  return {
  }
}
