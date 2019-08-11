const PixieDust = () => import(
  /* webpackChunkName: "pixie-dust" */
  './pixie-dust.vue'
)

export default {
  path: '/pixie-dust',
  name: 'Pixie Dust',
  component: PixieDust
}
