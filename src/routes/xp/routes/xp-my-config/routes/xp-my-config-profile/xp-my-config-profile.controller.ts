export default {
  name: 'xp-my-config-profile',
  // DATA
  data,
  props: [],
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
    birthdateDialog: false,
    birthdate: []
  }
}

function getComputed () {
  return {
    log: {
      get () {
        return this.$store.state.xp.log
      }
    },
    player: {
      get () {
        return this.$store.state.xp.user
      }
    },
    birthdate: {
      get () {
        return this.player.birthdate
      },
      set (birthdate) {
      }
    },
    currentUser: {
      get () {
        return this.$store.state.compass.currentUser
      }
    }
  }
}

function getMethods () {
  return {
    loadPlayer,
    saveBirthdate
  }
  function loadPlayer () {
    this.$store.dispatch('xp/GET_USER')
  }
  function saveBirthdate () {
    this.birthdateDialog = false
    this.$store.dispatch('xp/START_PLAYER', this.birthdate).then(
      this.loadPlayer
    )
  }
}

function getWatched () {
  return {

  }
}

function onBeforeCreate () {

}

function onCreated () {
  this.$store.dispatch('xp/LOAD_LOG')
  this.birthdate = this.player.birthdate
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
