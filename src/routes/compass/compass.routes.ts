import type { RouteRecordRaw } from "vue-router";

const compass = () => import(/* webpackChunkName: "compass" */ "./compass.vue");

const compassWelcome = () =>
  import(
    /* webpackChunkName: "compass-welcome" */
    "./routes/compass-welcome/compass-welcome.vue"
  );

const compassExplore = () =>
  import(
    /* webpackChunkName: "compass-explore" */
    "./routes/compass-explore/compass-explore.vue"
  );

const compassDashboard = () =>
  import(
    /* webpackChunkName: "compass-dashboard" */
    "./routes/compass-dashboard/compass-dashboard.vue"
  );

export default {
  path: "/",
  meta: {
    icon: "fa fa-compass",
  },
  component: compass,
  children: [
    {
      path: "/",
      name: "Welcome to Compass",
      meta: {
        icon: "fa fa-compass",
      },
      component: compassWelcome,
    },
    {
      path: "/compass/explore",
      name: "Explore Compass",
      meta: {
        icon: "fa fa-compass",
      },
      component: compassExplore,
    },
    {
      path: "/compass/dashboard",
      name: "Compass Dashboard",
      meta: {
        icon: "fa fa-compass",
      },
      component: compassDashboard,
    },
  ],
} as RouteRecordRaw;
