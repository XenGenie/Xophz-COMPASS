import Vue from 'vue'

import VueLodash from 'vue-lodash'

// import NProgress from 'vue-nprogress'
import 'core-js'
import { TrinityRingsSpinner } from 'epic-spinners'
import Billboard from './components/billboard/billboard.vue'
import NavDrawer from './components/routes-navigation-drawer/routes-navigation-drawer.vue'
import AnimatedNumber from './components/animated-number/animated-number.vue'
import vuetify from './plugins/vuetify' // path to vuetify export

import menuFix from './utils/admin_menu_fix'
import '@fortawesome/fontawesome-pro/css/all.min.css'
import '@fortawesome/fontawesome-pro/css/duotone.min.css'

import App from './index.vue'
import router from './app.router'
import store from './app.store'

Vue.use(VueLodash)
window.Vue = require('vue')

Vue.config.productionTip = false

// Declare Components
Vue.component('animated-number', AnimatedNumber)
Vue.component('Billboard', Billboard)
Vue.component('NavDrawer', NavDrawer)
Vue.component('trinity-rings-spinner', TrinityRingsSpinner)

Vue.filter('currency', (value, decimals, symbol) => {
  if (!value) return false
  let isK = ''
  let currency = value
  if (typeof currency !== 'number') {
    if (currency.charAt(currency.length - 1) === 'k') {
      isK = 'k'
      currency = currency.replace('k', '')
    }
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  })
  const num = formatter.format(currency)
  if (typeof (symbol) !== 'undefined') return (num + isK).replace('$', symbol)

  return num + isK
})

Vue.filter('kFormatter', num => (Math.abs(num) > 999 ? `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}k` : Math.sign(num) * Math.abs(num)))

Vue.prototype.capitalize = capitalize

function capitalize () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

// USE Plugins

Vue.use(require('vue-moment'))

Vue.use(vuetify)

// Vue.use(NProgress)
// const nprogress = new NProgress({ parent: '.nprogress-container' })

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

menuFix('xophz-compass')
