import type { RouteRecordRaw } from "vue-router";

const Bugnet = () =>
  import(
    /* webpackChunkName: "xophz-bugnet" */
    "./bugnet.vue"
  );

const jig = {};

export default {
  path: "/bugnet",
  // name: 'Bugnet',
  component: Bugnet,
  children: [
    {
      name: "Bugnet",
      path: "/bugnet/",
      meta: { icon: "bug", color: "#1E9581" },
      component: jig,
    },
    {
      name: "Bugnet Grid",
      path: "/bugnet/new",
      component: jig,
    },
    {
      name: "Bugnet Stats",
      path: "/bugnet/update",
      component: jig,
    },
  ],
} as RouteRecordRaw;
