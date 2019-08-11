const EventHorizon = () => import(
  /* webpackChunkName: "event-horizon" */
  './event-horizon.vue'
)

export default {
  path: '/event-horizon',
  name: 'Event Horizon',
  component: EventHorizon
}
