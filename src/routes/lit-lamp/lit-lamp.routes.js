const LitLamp = () => import(
  /* webpackChunkName: "lit-lamp" */
  './lit-lamp.vue'
)

export default {
  path: '/lit-lamp',
  name: 'Oil LAMP',
  component: LitLamp
}
