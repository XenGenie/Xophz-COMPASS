const BombBag = () => import(
  /* webpackChunkName: "bomb-bag" */
  './bomb-bag.vue'
)

export default {
  path: '/bomb-bag',
  name: 'Bomb Bag',
  component: BombBag
}
