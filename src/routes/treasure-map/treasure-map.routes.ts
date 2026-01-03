import type { RouteRecordRaw } from "vue-router";

const TreasureMap = () =>
  import(
    /* webpackChunkName: "treasure-map" */
    "./treasure-map.vue"
  );

export default {
  path: "/treasure-map",
  name: "Treasure Map",
  component: TreasureMap,
} as RouteRecordRaw;
