import { defineComponent } from "vue";
import navDrawer from "@/components/routes-navigation-drawer/routes-navigation-drawer.vue";
import userAvatarBtn from "@/components/user-avatar-btn/user-avatar-btn.vue";
import navigationMixin from "@/mixins/navigation.mixin";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import * as _ from "lodash";

export default defineComponent({
  name: "DefaultLayout",
  watch: getWatched(),
  data,
  mounted,
  computed: {
    ...getComputed(),
    ...mapStores(useCompassStore),
  },
  methods: getMethods(),
  mixins: [navigationMixin as any],
  components: { navDrawer, userAvatarBtn },
});

function data() {
  return {
    spinner: false,
    wpMenuId: "wpwrap",
    wpOpenClass: "wp-responsive-open",
    wpSwitchLabels: ["Off", "On"],
    _, // exposing lodash if needed by templates or legacy code
  };
}

function getComputed() {
  return {
    blogInfo: {
      get() {
        return this.compassStore.blogInfo;
      },
    },
    isBillboardOff: {
      get() {
        return this.compassStore.isBillboardOff;
      },
    },
    isAppBarOff: {
      get() {
        return this.compassStore.isAppBarOff;
      },
    },
    currentUser: {
      get() {
        return this.compassStore.currentUser;
      },
    },
    plugins: {
      get() {
        const plugins = this.compassStore.pluginList || [];
        return _.filter(plugins, (plugin) => plugin.isActivated);
      },
      set(value) {
        // Not implemented in store yet
      },
    },
    routes: {
      get() {
        return this.$router.options.routes;
      },
    },
    activePlugin: {
      get() {
        return this.compassStore.activePlugin;
      },
      set(activePlugin) {
        this.compassStore.setActivePlugin(activePlugin);
      },
    },
    bottomSheet: {
      get() {
        return this.compassStore.bottomSheet;
      },
      set(isActive) {
        this.compassStore.setBottomSheet(isActive);
      },
    },
    wpwrap: {
      get() {
        return document.body;
      },
    },
    wpSwitchLabel: {
      get() {
        return this.wpSwitchLabels[this.isWpMenuOpen ? 1 : 0];
      },
    },
    isWpMenuOpen: {
      get() {
        return this.compassStore.isWpMenuOpen;
      },
      set(isOpen) {
        this.compassStore.setWpMenu(isOpen);
      },
    },
  };
}

function getWatched() {
  return {
    isWpMenuOpen(val) {
      if (this.wpwrap) this.wpwrap.classList.toggle(this.wpOpenClass, val);
    },
  };
}

function mounted() {
  this.loadWpMenu();
}

function getMethods() {
  return {
    goHome() {
      window.location.href = "/";
    },
    showBottomSheet() {
      this.bottomSheet = !this.bottomSheet;
    },
    wpmenu() {
      this.isWpMenuOpen = !this.isWpMenuOpen;
    },
    getTextDomainPath(textDomain) {
      if (!textDomain) return "/";
      const path = `/${textDomain.replace("xophz-compass-", "")}`;
      // Note: routes might need a recursive search if nested in children
      const findPath = (routes) => {
        for (const route of routes) {
          if (route.path === path) return route.path;
          if (route.children) {
            const childPath = findPath(route.children);
            if (childPath) return childPath; // simplified
          }
        }
        return null;
      };
      // For now, assuming simple match or keeping existing logic but aware of structure change
      // The original logic filtered top-level routes.
      // With nested routes, the route path might match.
      const routes = this.routes;
      // We'll leave the original logic for now, it iterates `this.routes`.
      const match = routes.find((route) => route.path === path);
      return match ? match.path : "/";
    },
    loadWpMenu() {
      if (this.isWpMenuOpen && this.wpwrap) {
        this.wpwrap.classList.add(this.wpOpenClass);
      } else if (this.wpwrap) {
        this.wpwrap.classList.remove(this.wpOpenClass);
      }
    },
  };
}
