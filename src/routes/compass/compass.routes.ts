import compass from './compass.vue'
import compassWelcome from './routes/compass-welcome/compass-welcome.vue'
import compassExplore from './routes/compass-explore/compass-explore.vue'
import compassDashboard from './routes/compass-dashboard/compass-dashboard.vue'

export default {
  path: '/',
  meta: {
    icon: 'fa fa-compass'
  },
  component: compass,
  children: [
    {
      path: '/',
      name: 'Welcome to Compass',
      meta: {
        icon: 'fa fa-compass'
      },
      component: compassWelcome
    },
    {
      path: '/compass/explore',
      name: 'Explore Compass',
      meta: {
        icon: 'fa fa-compass'
      },
      component: compassExplore
    },
    {
      path: '/compass/dashboard',
      name: 'Compass Dashboard',
      meta: {
        icon: 'fa fa-compass'
      },
      component: compassDashboard
    }
  ]
}
