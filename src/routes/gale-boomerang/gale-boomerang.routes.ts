const galeBoomerang = () =>
  import(
    /* webpackChunkName: "galeBoomerang" */
    "./gale-boomerang.vue"
  );

// import index from '../../js/inbox.js';

export default {
  path: "/gale-boomerang",
  name: "Gale Boomerang",
  component: galeBoomerang,
  children: [],
};
