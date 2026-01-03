import { defineComponent } from "vue";
import navDrawer from "@/components/routes-navigation-drawer/routes-navigation-drawer.vue";
import userAvatarBtn from "@/components/user-avatar-btn/user-avatar-btn.vue";
import navigationMixin from "@/mixins/navigation.mixin";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import * as _ from "lodash";

export default defineComponent({
  name: "COMPASS",
  watch: getWatched(),
  data,
  created: onCreated,
  mounted,
  updated: onUpdated,
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
        // Not implemented in store yet? Or loop through and activate?
        // Assuming read-only for now or updated via separate actions
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

function onCreated() {
  this.loadCompass();
}

function mounted() {
  this.loadWpMenu();
  // this.$nprogress.start()
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
      const routes = this.routes.filter((route) => route.path === path);
      return routes.length > 0 ? routes[0].path : "/";
    },
    loadWpMenu() {
      if (this.isWpMenuOpen && this.wpwrap) {
        this.wpwrap.classList.add(this.wpOpenClass);
      } else if (this.wpwrap) {
        this.wpwrap.classList.remove(this.wpOpenClass);
      }
    },
    loadCompass() {
      this.compassStore.getCurrentUser();
      this.compassStore.loadPlugins().then(() => {
        // logic to set active plugin if matched
      });
    },
  };
}

function onUpdated() {
  this.spinner = false;
}
