import { mapStores } from "pinia";
import { useCompassStore } from "../../store";
import compassMixin from "../../mixins/compass-mixin/compass-mixin.controller";

export default {
  name: "compass-explore",
  // DATA
  data,
  props: [],
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
  mixins: [compassMixin],
  transitions: {},
  partials: {},
};

function data() {
  return {
    dialog: true,
    welcomeDialog: true,
    snackbar: false,
    snack: {
      gray: false,
      img: "",
      text: "",
    },
  };
}

function getComputed(this: any) {
  return {
    bottomSheet: {
      get() {
        return this.compassStore.bottomSheet;
      },
      set(isActive: boolean) {
        this.compassStore.setBottomSheet(isActive);
      },
    },
    plugins: {
      get() {
        return this.compassStore.pluginList;
      },
    },
  };
}

function getMethods(this: any) {
  return {
    goToPlugin(plugin: any) {
      if (!plugin || !plugin.TextDomain) return;
      console.log(`[CompassExplore] Navigating to plugin: ${plugin.Name}`, plugin);
      this.compassStore.setActivePlugin(plugin);
      this.$router.push({
        path: `/${plugin.TextDomain.replace("xophz-compass-", "")}`,
      });
    },
    getPluginRoute(plugin: any) {
      if (!plugin || !plugin.TextDomain) return {};
      return {
        path: `/${plugin.TextDomain.replace("xophz-compass-", "")}`,
      };
    },
    togglePlugin(plugin: any) {
      const vm = this;
      const action = plugin.isActivated ? "deactivate" : "activate";
      const toggle = `${action}Plugin`;

      vm.snack.text = `${plugin.Name} has been ${action}d.`;
      vm.snack.gray = plugin.isActivated;
      vm.snack.img = plugin.icon;

      (vm as any)[toggle](plugin).then(() => {
        (vm as any).loadPlugins();
        (vm as any).showSnackbar();
      });
    },
    loadPlugins() {
      return this.compassStore.loadPlugins();
    },
    activatePlugin(plugin) {
      return this.compassStore.activatePlugin(plugin);
    },
    deactivatePlugin(plugin) {
      return this.compassStore.deactivatePlugin(plugin);
    },
    showSnackbar() {
      this.snackbar = true;
    },
  };
}

function getWatched() {
  return {};
}

function onBeforeCreate() {}

function onCreated() {}

function onBeforeMount() {}

function onMounted() {
  this.loading = false;
}

function onBeforeUpdate() {}

function onUpdated() {}

function onActivated() {}

function onDeactivated() {}

function onBeforeDestory() {}

function onDestroyed() {}
