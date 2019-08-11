export default {
  name: 'search',
  // DATA
  data,
  props: ['dispatch', 'xp', 'ap', 'gp'],
  computed: getComputed(),
  methods: getMethods(),
  watch: getWatched(),
  // LIFECYCLE
  beforeCreate: onBeforeCreate,
  created: onCreated,
  beforeMount: onBeforeMount,
  mounted: onMounted,
  beforeUpdate: onBeforeUpdate,
  updated: onUpdated,
  activated: onActivated,
  deactivated: onDeactivated,
  beforeDestroy: onBeforeDestory,
  destroyed: onDestroyed,
  // ASSETS
  components: {},
  transitions: {},
  partials: {}
}

function data () {
  return {
    search: {
      text: '',
      xp: '',
      ap: '',
      gp: ''
    }
  }
}

function getComputed () {
  return {
    searchText () {
      return this.search.text
    },
    minXp () {
      return this.search.xp
    },
    minAp () {
      return this.search.ap
    },
    minGp () {
      return this.search.gp
    }
  }
}

function getMethods () {
  return {
    searchAchievements
  }

  function searchAchievements (filters) {
    this.$store.dispatch(this.dispatch, filters)
  }
}

function getWatched () {
  return {
    searchText: search,
    minXp: search,
    minAp: search,
    minGp: search
  }

  function search () {
    this.searchAchievements(this.search)
  }
}

function onBeforeCreate () {

}

function onCreated () {

}

function onBeforeMount () {

}

function onMounted () {

}

function onBeforeUpdate () {

}

function onUpdated () {

}

function onActivated () {

}

function onDeactivated () {

}

function onBeforeDestory () {

}

function onDestroyed () {

}
