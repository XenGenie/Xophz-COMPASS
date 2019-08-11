const TreasureTrove = () => import(
  /* webpackChunkName: "treasure-trove" */
  './treasure-trove.vue'
)

export default {
  path: '/treasure-trove',
  name: 'Treasure Trove',
  component: TreasureTrove
}
