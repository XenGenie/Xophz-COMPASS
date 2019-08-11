const EnchantedMirror = () => import(
  /* webpackChunkName: "enchanted-mirror" */
  './enchanted-mirror.vue'
)

export default {
  path: '/enchanted-mirror',
  name: 'Enchanted Mirror',
  component: EnchantedMirror
}
