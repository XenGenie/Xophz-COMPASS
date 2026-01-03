import { mapStores } from "pinia";
import { useXpStore } from "../../../store";

export default {
  name: "xp-categories-index",
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
  transitions: {},
  partials: {},
};

function data() {
  return {
    headers: [
      {
        title: "Name",
        key: "name",
      },
      {
        title: "Description",
        key: "description",
      },
      {
        title: "Slug",
        key: "slug",
      },
      {
        title: "Count",
        key: "count",
      },
    ] as any[],
  };
}

function getComputed() {
  return {
    ...mapStores(useXpStore),
    categories: {
      get(): any[] {
        return (this as any).xpStore.categories;
      },
    },
  };
}

function getMethods() {
  return {};
}

function getWatched() {
  return {};
}

function onBeforeCreate() {}

function onCreated(this: any) {
  const vm = this;
  vm.xpStore.listCategories();
}

function onBeforeMount() {}

function onMounted() {}

function onBeforeUpdate() {}

function onUpdated() {}

function onActivated() {}

function onDeactivated() {}

function onBeforeDestory() {}

function onDestroyed() {}
