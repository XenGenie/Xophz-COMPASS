import navDrawer from '../routes-navigation-drawer/routes-navigation-drawer.vue'
import { mapStores } from 'pinia'
import { useCompassStore } from '@/routes/compass/store'

export default {
  name: 'Billboard',
  props: {
  },
  data,
  watch: getWatched(),
  created: onCreated,
  methods: getMethods(),
  computed: {
    ...getComputed(),
    ...mapStores(useCompassStore)
  },
  // mixins : [navDrawer],
  components: { navDrawer }
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
        return this.compassStore.userMask
      }
    },
    plugin: {
      get () {
        return this.compassStore.activePlugin
      }
    },
    billboard: {
      get () {
        return this.compassStore.billboard
      }
    },
    billboardChips: {
      get () {
        // Safe access in case billboard is not fully initialized
        return this.compassStore.billboard ? this.compassStore.billboard.chips : []
      }
    },
    currentUser: {
      get () {
        return this.compassStore.currentUser
      }
    },
    iconImg () {
      const vm = this
      return vm.plugin && vm.plugin.icon ? vm.plugin.icon : false
    },
    isBillboardMini: {
      get () {
        return this.compassStore.isBillboardNavDrawerMini
      },
      set (isMini) {
        this.compassStore.setIsBillboardNavDrawerMini(isMini)
      }
    },
    bottomSheet: {
      get () {
        return this.compassStore.bottomSheet
      },
      set (isActive) {
        this.compassStore.setBottomSheet(isActive)
      }
    },
    billboardSubroutes () {
      const vm = this
      const matched = vm.$route.matched
      if (!matched.length) return []

      const routes = vm.$router.options.routes
      const currentParent = routes.find(r => r.path === matched[0].path)
      
      if (!currentParent || !currentParent.children) return []

      const isAdmin = vm.currentUser && vm.currentUser.caps && vm.currentUser.caps.administrator
      const isMaskOn = isAdmin && vm.userMask

      return currentParent.children.filter(child => {
        const roles = child.meta ? child.meta.roles : null
        if (isAdmin && !roles && isMaskOn) return false
        if (!isAdmin && !roles && !isMaskOn) return false
        if (roles) {
          if (typeof roles === 'string') {
            return vm.currentUser.roles.indexOf(roles) >= 0
          }
          if (Array.isArray(roles)) {
            return roles.some(role => vm.currentUser.roles.indexOf(role) >= 0)
          }
        }
        return true
      }).map(child => ({
        name: child.name,
        path: child.path,
        icon: child.meta ? child.meta.icon : 'circle'
      }))
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
