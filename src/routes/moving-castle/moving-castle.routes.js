const MovingCastle = () => import(
  /* webpackChunkName: "moving-castle" */
  './moving-castle.vue'
)

export default {
  path: '/moving-castle',
  name: 'Moving Castle',
  component: MovingCastle
}
