export default {
  name: 'user-avatar-btn',
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
  mixins: {},
  transitions: {},
  partials: {}
}

function data () {
  return {

  }
}

function getComputed () {
  return {
    currentUser: {
      get () {
        return this.$store.state.compass.currentUser
      }
    },
    user: {
      get () {
        return this.$store.state.compass.currentUser
      }
    },
    userMask: {
      get () {
        return this.$store.state.compass.userMask
      },
      set (userMask) {
        this.$store.dispatch('compass/SET_USER_MASK', userMask)
      }
    }
  }
}

function getMethods () {
  return {
    toggleMask () {
      this.userMask = !this.userMask
    }
  }
}

function getWatched () {
  return {

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
