const MagicWand = () => import(
  /* webpackChunkName: "magic-wand" */
  './magic-wand.vue'
)

export default {
  path: '/magic-wand',
  name: 'Magic Wand',
  component: MagicWand
}
