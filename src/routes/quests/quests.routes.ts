const Quests = () => import(
    /* webpackChunkName: "treasure-map" */
    './quests.vue'
  )

export default {
  path: '/quests',
  name: 'Quests CRM',
  component: Quests
}
