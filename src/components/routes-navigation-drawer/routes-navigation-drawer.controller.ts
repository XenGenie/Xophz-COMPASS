// import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'
import navigationMixin from "@/mixins/navigation.mixin";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
export default {
  name: "routes-navigation-drawer",
  // DATA
  data,
  props: {
    modelValue: {
      type: [Boolean, null],
      default: true,
    },
    location: {
      type: String,
      default: "left",
    },
    sub: {
      type: Boolean,
      default: false,
    },
    child: {
      type: Boolean,
      default: false,
    },
    parent: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: undefined,
    },
    temporary: {
      type: Boolean,
      default: false,
    },
    isBillboardNav: {
      type: Boolean,
      default: false,
    },
    density: {
      type: String,
      default: undefined,
    },
    appBarOrder: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...getComputed(),
    ...mapStores(useCompassStore),
  },
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
  mixins: [navigationMixin],
  transitions: {},
  partials: {},
};

function data() {
  return {};
}

function getComputed() {
  return {
    drawerModel: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
    plugin: {
      get() {
        return this.compassStore.activePlugin;
      },
      set(plugin) {
        this.compassStore.setActivePlugin(plugin);
      },
    },
    currentUser: {
      get() {
        return this.compassStore.currentUser;
      },
    },

    isAppNavDrawerOpen: {
      get() {
        return this.isOpen;
      },
    },

    billboard: {
      get() {
        return this.compassStore.billboard;
      },
      set(billboard) {
        this.compassStore.setBillboard(billboard);
      },
    },

    isRoutesNavActive: {
      get() {
        return localStorage.isRoutesNavActive === "1";
      },
      set(active) {
        localStorage.isRoutesNavActive = active ? "1" : "0";
        this.compassStore.toggleNav(active);
      },
    },

    isOpen: {
      get() {
        return this.compassStore.isAppNavDrawerOpen;
      },
      set(isOpen) {
        this.compassStore.setIsAppNavDrawerOpen(isOpen);
      },
    },

    mini: {
      get() {
        if (this.isBillboardNav) return this.compassStore.isBillboardNavDrawerMini;
        return this.compassStore.isAppNavDrawerMini;
      },
      set(isMini) {
        if (this.isBillboardNav) this.compassStore.setIsBillboardNavDrawerMini(isMini);
        else this.compassStore.setIsAppNavDrawerMini(isMini);
      },
    },

    userMask: {
      get() {
        return this.compassStore.userMask;
      },
    },
    plugins: {
      get(): any {
        return (this as any).compassStore.pluginList;
      },
    },
  };
}

function getMethods() {
  return {
    canUserWalkRoute,
    currentUserHasRole,
    getCurrentRoute,
    routeIsBreadcrumbPath,
    walkChildren,
    miniMode,
    parseBool,
    logout,
    toggleAppNavDrawer,
    setPlugin,
  };

  function setPlugin() {
    const vm = this;
    const to = vm.$route;
    let where = to.path.split("/")[1];

    where = where && where !== "compass" ? `-${where}` : "";
    where = `xophz-compass${where}`;

    if (vm.plugins) {
      Object.keys(vm.plugins).forEach((key) => {
        if (vm.plugins[key].TextDomain === where) {
          vm.plugin = vm.plugins[key];
        }
      });
    }
  }

  function toggleAppNavDrawer() {
    this.isOpen = !this.isOpen;
  }

  function logout() {
    window.location = "/wp-login.php?action=logout";
  }

  function parseBool(bool) {
    switch (bool) {
      case "true":
        return JSON.parse(bool);
      default:
        return bool === true;
    }
  }

  function miniMode() {
    this.mini = !this.mini;
  }

  function walkChildren(route) {
    if (route && route.children) {
      if (!this.child && !this.parent)
        route.children.forEach((child) => this.canUserWalkRoute(child));
      else if (this.parent) this.$router.options.routes.forEach((r) => this.canUserWalkRoute(r));
      else if (this.child) {
        route.children.forEach((child) => {
          if (child.children) child.children.forEach((c) => this.canUserWalkRoute(c));
        });
      }
    }
  }

  function canUserWalkRoute(route) {
    const vm = this;
    if (!vm.currentUser || !vm.currentUser.caps) return false;

    const goToRoute = { ...route, ...route.meta };
    const isAdmin = vm.currentUser.caps.administrator;
    const isMaskOn = vm.currentUser.caps.administrator && vm.userMask;
    const userHasRole = vm.currentUserHasRole(goToRoute.roles);

    if (isAdmin && !goToRoute.roles && isMaskOn) return false;
    if (!isAdmin && !goToRoute.roles && !isMaskOn) return false;
    if (goToRoute.roles && !userHasRole && !isMaskOn) return false;

    vm.children.push(goToRoute);
    return true;
  }

  function getCurrentRoute() {
    const vm = this;
    vm.resetChildrenBreadcrumbs();
    return vm.$router.options.routes.filter(vm.routeIsBreadcrumbPath)[0];
  }
  function routeIsBreadcrumbPath(route) {
    if (this.breadcrumbs[0]) return this.breadcrumbs[0].path === route.path;
    return false;
  }
  function currentUserHasRole(roles) {
    if (typeof roles === "string") {
      return this.currentUser.roles.indexOf(roles) >= 0;
    }
    if (typeof roles === "object") {
      let i;
      let userHasRole = false;
      for (i = 0; i < roles.length; i += 1) {
        userHasRole = this.currentUser.roles.indexOf(roles[i]) >= 0;
      }
      return userHasRole;
    }
    return false;
  }
}

function getWatched() {
  return {
    $route: {
      handler(to) {
        const vm = this;
        vm.setPlugin();
        vm.walkChildren(vm.getCurrentRoute());
      },
      deep: true,
      immediate: true,
    },
    userMask() {
      (this as any).walkChildren((this as any).getCurrentRoute());
    },
    children() {
      const vm = this as any;
      if (!vm.children.length) vm.isOpen = false;
    },
    plugin(plugin) {
      (this as any).walkChildren((this as any).getCurrentRoute());
    },
    plugins: {
      handler() {
        (this as any).setPlugin();
      },
      deep: true,
    },
  };
}

function onBeforeCreate() {
  // this.compassStore.turnOffBillboard(false) // accessing compassStore in beforeCreate might be too early if using mapStores?
  // mapStores adds it to 'this'.
}

function onCreated() {}

function onBeforeMount() {}

function onMounted() {
  // Safe to call here
  this.compassStore.turnOffBillboard(false);
}

function onBeforeUpdate() {}

function onUpdated() {}

function onActivated() {}

function onDeactivated() {}

function onBeforeDestory() {}

function onDestroyed() {}
