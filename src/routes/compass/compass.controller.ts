import { defineComponent } from "vue";
import compassMixin from "./mixins/compass-mixin/compass-mixin.controller";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import XCompassAppBar from "@/components/molecules/bars/x-compass-app-bar/x-compass-app-bar.vue";

export default defineComponent({
  name: "xophz-compass",
  data,
  props: {
    plugin: Object,
  },
  components: {
    XCompassAppBar,
  },
  created: onCreated,
  mounted,
  unmounted: onUnmounted,
  mixins: [compassMixin],
  computed: {
    ...getComputed(),
    ...mapStores(useCompassStore),
  },
  watch: getWatched(),
  methods: getMethods(),
});

function data() {
  return {
    active: "first",
    first: false,
    second: false,
    third: false,
    showSnackbar: false,
    snackbarPlugin: {},
    secondStepError: null,
    transitionName: "slide-left",
  };
}

function getComputed(this: any) {
  return {
    currentUser() {
      return this.compassStore.currentUser;
    },
    plugins() {
      return this.compassStore.pluginList;
    },
    billboard: {
      get() {
        return this.compassStore.billboard;
      },
      set(billboard: any) {
        this.compassStore.setBillboard(billboard);
      },
    },
    isBillboardOff() {
      return this.compassStore.isBillboardOff;
    },
    isAppBarOff() {
      return this.compassStore.isAppBarOff;
    },
  };
}

function getWatched(this: any) {
  return {
    stepper(val: any, oldVal: any) {
      const vm = this;
      const hash = vm.$options.name;
      const path = {
        1: "/",
        2: "/compass/explore",
        3: "/compass/dashboard",
      }[val];

      const isBillboardOff = {
        1: true,
        2: true,
        3: true,
      }[val];

      vm.transitionName = val > oldVal ? "slide-left" : "slide-right";

      vm.compassStore.turnOffBillboard(isBillboardOff);

      if (vm.$route.path !== path) {
        vm.loading = true;
        vm.$router.push({ path }).then(() => {
          vm.loading = false;
        });
      }
    },
    $route(to) {
      const compassPaths = ["/", "/compass", "/compass/explore", "/compass/dashboard"];
      const isCompassRoute = compassPaths.some(
        (p) => to.path === p || to.path.startsWith("/compass/")
      );

      if (!isCompassRoute && to.path !== "/") {
        // Not a compass route, don't let the stepper interfere
        return;
      }

      let step = 1;
      if (to.path === "/" || to.path === "/compass") step = 1;
      else if (to.path.includes("/explore")) step = 2;
      else if (to.path.includes("/dashboard")) step = 3;

      if (this.stepper !== step) {
        this.stepper = step;
      }
    },
  };
}

function mounted() {
  this.showCompass();
  this.compassStore.turnOffBillboard(true);
  this.compassStore.turnOffAppBar(true);
}

function onCreated() {}

function onUnmounted(this: any) {
  this.compassStore.turnOffBillboard(false);
  this.compassStore.turnOffAppBar(false);
}

function getMethods(this: any) {
  return {
    mouseOver(plugin: any) {
      const vm = this;
      vm.showSnackbar = true;
      vm.snackbarPlugin = plugin;
    },
    refreshLayout() {
      // $('#second').reloadItems();
      // this.$refs.layout();
    },
    togglePlugin(e, plugin) {
      const vm = this;
      if (e.target.checked) {
        vm.activatePlugin(plugin);
      } else {
        vm.deactivatePlugin(plugin);
      }
    },
    activatePlugin(plugin) {
      // $.ajax({
      //   url: '',
      //   data : { 'action' : 'activate_plugin', 'plugin' : plugin.TextDomain },
      //   method: 'GET',
      //   success: function () {
      //   },
      //   error: function () {
      //   }
      // });
    },
    deactivatePlugin(plugin) {
      // $.ajax({
      //   // url: ajaxurl,
      //   data : { 'action' : 'deactivate_plugin', 'plugin' : plugin.TextDomain },
      //   method: 'GET',
      //   success: function () {
      //   },
      //   error: function () {
      //   }
      // });
    },
    setDone(id, index) {
      this[id] = true;
      this.secondStepError = null;
      if (index) {
        this.active = index;
      }
    },
    setError() {
      this.secondStepError = "This is an error!";
    },
    showCompass() {
      // this.$refs.compassCircle.style.opacity = 1;
    },
  };
}
