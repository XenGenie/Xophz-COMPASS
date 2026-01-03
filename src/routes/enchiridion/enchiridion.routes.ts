const Enchiridion = () => import(
  /* webpackChunkName: "enchiridion" */
  './enchiridion.vue'
)

export default {
  path: '/enchiridion',
  name: 'Enchiridion',
  component: Enchiridion
}
