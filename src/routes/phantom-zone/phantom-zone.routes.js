const PhantomZone = () => import(
  /* webpackChunkName: "phantom-zone" */
  './phantom-zone.vue'
)

export default {
  path: '/phantom-zone',
  name: 'Phantom Zone',
  component: PhantomZone
}
