import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'
import userAvatarBtn from '@/components/user-avatar-btn/user-avatar-btn.vue'

export default {
  name: 'COMPASS',
  watch: getWatched(),
  data,
  created: onCreated,
  mounted,
  updated: onUpdated,
  computed: getComputed(),
  methods: getMethods(),
  mixins: [navDrawer],
  beforeRouteEnter () {
  },
  components: { navDrawer, userAvatarBtn }
}

function data () {
  return {
    spinner: false,
    wpMenuId: 'wpwrap',
    wpOpenClass: 'wp-responsive-open',
    wpSwitchLabels: ['Off', 'On']
  }
}

function getComputed () {
  return {
    blogInfo: {
      get () {
        return this.$store.state.compass.blogInfo
      }
    },
    isBillboardOff: {
      get () {
        return this.$store.state.compass.isBillboardOff
      }
    },
    currentUser: {
      get () {
        const vm = this
        return vm.$store.state.compass.currentUser
      }
    },
    plugins: {
      get () {
        const vm = this
        return vm.$store.state.compass.pluginList
      },
      set (value) {
        const vm = this
        vm.$store.commit('compass/ACTIVATE_PLUGIN', value)
      }
    },
    routes: {
      get () {
        return this.$router.options.routes
      }
    },
    activePlugin: {
      get () {
        return this.$store.state.compass.activePlugin
      },
      set (activePlugin) {
        this.$store.dispatch('compass/SET_ACTIVE_PLUGIN', activePlugin)
      }
    },
    bottomSheet: {
      get () {
        return this.$store.state.compass.bottomSheet
      },
      set (isActive) {
        this.$store.dispatch('compass/SET_BOTTOM_SHEET', isActive)
      }
    },
    wpwrap: {
      get () {
        return document.getElementById(this.wpMenuId)
      }
    },
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
    }

  }
}

function getWatched () {
  return {
    $route: {
      handler () {
        // this.spinner = true
        // const vm = this;
        // vm.updateActivePlugin(to);
      },
      deep: true,
      immediate: true
    },
    isWpMenuOpen () {
      this.wpwrap.classList.toggle(this.wpOpenClass)
    }
  }
}

function onCreated () {
  const vm = this
  vm.loadWpMenu()
  vm.loadCompass()
}

function mounted () {
  this.$nprogress.start()
}

function getMethods () {
  return {
    goHome () {
      window.location.href = '/'
    },
    showBottomSheet () { this.bottomSheet = !this.bottomSheet },
    wpmenu () { this.isWpMenuOpen = !this.isWpMenuOpen },
    getTextDomainPath (textDomain) {
      const path = `/${textDomain.replace('xophz-compass-', '')}`
      const routes = this.routes.filter(filterTextDomain)
      return (routes.length > 0) ? routes[0].path : '/'
      function filterTextDomain (route) {
        return route.path === path
      }
    },
    loadWpMenu () {
      const vm = this
      if (vm.isWpMenuOpen) this.wpwrap.classList.add(this.wpOpenClass)
    },
    loadCompass () {
      const vm = this
      vm.$store.dispatch('compass/GET_CURRENT_USER')
      vm.$store.dispatch('compass/LOAD_PLUGINS').then(vm.updateActivePlugin)
    }
  }
}

function onUpdated () {
  this.spinner = false
}
