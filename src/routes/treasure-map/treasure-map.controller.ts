import navDrawer from "@/components/routes-navigation-drawer/routes-navigation-drawer.vue";

import Billboard from "@/components/billboard/billboard.vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";

export default {
  data,
  props: {
    plugin: Object,
  },
  components: { navDrawer, Billboard },
  computed: {
    ...getComputed(),
    ...mapStores(useCompassStore),
  },
  methods: getMethods(),
};

function data() {
  return {};
}

function getComputed() {
  return {
    isBillboardOff: {
      get() {
        return (this as any).compassStore.isBillboardOff;
      },
    },
  };
}

function getMethods() {
  return {};
}
