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
    logoutDialog: false
  }
}

function getComputed () {
  return {
    wpSwitchLabel: {
      get () {
        return this.wpSwitchLabels[this.isWpMenuOpen ? 1 : 0]
      }
    },
    isWpMenuOpen: {
      get () {
        return this.$store.state.compass.isWpMenuOpen
      },
      set (isOpen) {
        this.$store.dispatch('compass/SET_WP_MENU', isOpen)
      }
    },
    currentUser: {
      get () {
        return this.$store.state.compass.currentUser
      }
    },
    blogInfo: {
      get () {
        return this.$store.state.compass.blogInfo
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
    wpmenu () { this.isWpMenuOpen = !this.isWpMenuOpen },
    toggleMask () {
      this.userMask = !this.userMask
    },
    confirmLogout () {
      this.logoutDialog = true
    },
    logout () {
      window.location.href = this.blogInfo.logouturl
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
