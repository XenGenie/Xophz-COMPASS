const MagicCloak = () => import(
  /* webpackChunkName: "magic-cloak" */
  './magic-cloak.vue'
)

export default {
  path: '/magic-cloak',
  name: 'Magic Cloak',
  component: MagicCloak
}
