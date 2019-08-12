export default {
  name: 'routes-navigation-drawer',
  // DATA
  data,
  props: {
    value: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: false
    },
    sub: {
      type: Boolean,
      default: false
    },
    child: {
      type: Boolean,
      default: false
    },
    parent: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    temporary: {
      type: Boolean,
      default: false
    },
    isBillboardNav: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    }
    // mini: {
    //   type : Boolean,
    //   default : false
    // },
  },
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
    children: [],
    breadcrumbs: []
  }
}

function getComputed () {
  return {
    breadtrail: {
      get () {
        const vm = this
        const breadtrail = vm.breadcrumbs.map(walkTrail)
        return breadtrail
        function walkTrail (breadcrumb, index) {
          const text = index === 0
            ? vm.plugin.Name
            : breadcrumb.name
          const disabled = index === vm.breadcrumbs.length - 1
          const href = `#${breadcrumb.path}`
          return {
            text,
            disabled,
            href
          }
        }
      }
    },
    plugin: {
      get () {
        return this.$store.state.compass.activePlugin
      },
      set (plugin) {
        this.$store.dispatch('compass/SET_ACTIVE_PLUGIN', plugin)
      }
    },
    currentUser: {
      get () {
        return this.$store.state.compass.currentUser
      }
    },

    isAppNavDrawerOpen: {
      get () {
        return this.isOpen
      }
    },

    billboard: {
      get () {
        return this.$store.state.compass.billboard
      },
      set (billboard) {
        this.$store.dispatch('compass/SET_BILLBOARD', billboard)
      }
    },

    isRoutesNavActive: {
      get () {
        return localStorage.isRoutesNavActive === true
      },
      set (active) {
        localStorage.isRoutesNavActive = active ? 1 : 0
        this.$store.dispatch('compass/TOGGLE_NAV', active)
      }
    },

    isOpen: {
      get () {
        return this.$store.state.compass.isAppNavDrawerOpen
      },
      set (isOpen) {
        this.$store.dispatch('compass/SET_IS_APP_NAV_DRAWER_OPEN', isOpen)
      }
    },

    mini: {
      get () {
        if (this.isBillboardNav) return this.$store.state.compass.isBillboardNavDrawerMini
        return this.$store.state.compass.isAppNavDrawerMini
      },
      set (isMini) {
        if (this.isBillboardNav) this.$store.dispatch('compass/SET_IS_BILLBOARD_NAV_DRAWER_MINI', isMini)
        else this.$store.dispatch('compass/SET_IS_APP_NAV_DRAWER_MINI', isMini)
      }
    },

    userMask: {
      get () {
        return this.$store.state.compass.userMask
      }
    }
  }
}

function getMethods () {
  return {
    canUserWalkRoute,
    currentUserHasRole,
    getCurrentRoute,
    resetChildrenBreadcrumbs,
    routeIsBreadcrumbPath,
    walkChildren,
    miniMode,
    parseBool,
    logout,
    toggleAppNavDrawer,
    setPlugin
  }

  function setPlugin () {
    const vm = this
    const to = vm.$route
    let where = to.path.split('/')[1]
    where = where ? `-${where}` : ''
    where = `xophz-compass${where}`

    if (vm.plugins) {
      Object.keys(vm.plugins).forEach((key) => {
        if (vm.plugins[key].TextDomain === where) {
          vm.plugin = vm.plugins[key]
        }
      })
    }
  }

  function toggleAppNavDrawer () {
    this.isOpen = !this.isOpen
    // document.getElementById('navMenuBtn').blur()
  }

  function logout () {
    window.location = '/wp-login.php?action=logout'
  }

  function parseBool (bool) {
    switch (bool) {
      case 'true':
        return JSON.parse(bool)
      default:
        return bool === true
    }
  }

  function miniMode () {
    this.mini = !this.mini
  }

  function walkChildren (route) {
    if (route && route.children) {
      if (!this.child && !this.parent) route.children.forEach(this.canUserWalkRoute)
      else if (this.parent) this.$router.options.routes.forEach(this.canUserWalkRoute)
      else if (this.child) {
        route.children.forEach((child) => {
          if (child.children) child.children.forEach(this.canUserWalkRoute)
        })
      }
    }
  }

  function canUserWalkRoute (route) {
    const vm = this
    const goToRoute = { ...route, ...route.meta }
    const isAdmin = (vm.currentUser.caps.administrator)
    const isMaskOn = (vm.currentUser.caps.administrator && vm.userMask)
    const userHasRole = (vm.currentUserHasRole(goToRoute.roles))

    if (isAdmin && !goToRoute.roles && isMaskOn) return false
    if (goToRoute.roles && !userHasRole && !isMaskOn) return false

    vm.children.push(goToRoute)
    return true
  }

  function resetChildrenBreadcrumbs () {
    const vm = this
    vm.children = []
    vm.breadcrumbs = vm.$route.matched
  }
  function getCurrentRoute () {
    const vm = this
    vm.resetChildrenBreadcrumbs()
    return vm.$router.options.routes.filter(vm.routeIsBreadcrumbPath)[0]
  }
  function routeIsBreadcrumbPath (route) {
    if (this.breadcrumbs[0]) return this.breadcrumbs[0].path === route.path
    return false
  }
  function currentUserHasRole (roles) {
    if (typeof (roles) === 'string') {
      return this.currentUser.roles.indexOf(roles) >= 0
    } if (typeof (roles) === 'object') {
      let i
      let userHasRole = false
      for (i = 0; i < roles.length; i += 1) {
        userHasRole = this.currentUser.roles.indexOf(roles[i]) >= 0
      }
      return userHasRole
    }
    return false
  }
}

function getWatched () {
  return {
    $route: {
      handler (to) {
        const vm = this
        vm.setPlugin()
        vm.walkChildren(vm.getCurrentRoute())
      },
      deep: true,
      immediate: true
    },
    userMask () {
      this.walkChildren(this.getCurrentRoute())
    },
    plugin (plugin) {
      this.billboard = {
        h1: plugin.Name,
        block: plugin.Description,
        ...this.billboard
      }
      this.walkChildren(this.getCurrentRoute())
    }
  }
}

function onBeforeCreate () {
  this.$store.dispatch('compass/TURN_OFF_BILLBOARD', false)
}

function onCreated () {
  // this.mini = this.parseBool(localStorage.mini);
}

function onBeforeMount () {
  this.walkChildren(this.getCurrentRoute())
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
