import Vue from 'vue'

import 'core-js'
import { TrinityRingsSpinner } from 'epic-spinners'
import Billboard from './components/billboard/billboard.vue'
import NavDrawer from './components/routes-navigation-drawer/routes-navigation-drawer.vue'
import AnimatedNumber from './components/animated-number/animated-number.vue'
// import Widget from './components/Widget/Widget.vue';
import vuetify from './plugins/vuetify' // path to vuetify export

// import API from './plugins/api.plugin.js'
import menuFix from './utils/admin_menu_fix'
import '@fortawesome/fontawesome-pro/css/all.min.css'
import '@fortawesome/fontawesome-pro/css/duotone.min.css'

import App from './index.vue'
import router from './app.router'
import store from './app.store'

window.Vue = require('vue')

Vue.config.productionTip = false
Vue.prototype.sounds = []

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
// Vue.use(API);
Vue.use(require('vue-moment'))

Vue.use(vuetify)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

menuFix('xophz-compass')
