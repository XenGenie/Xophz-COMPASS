const LeadMagnet = () => import(
  /* webpackChunkName: "lead-magnet" */
  './lead-magnet.vue'
)

export default {
  path: '/lead-magnet',
  name: 'Lead Magnet',
  component: LeadMagnet
}
