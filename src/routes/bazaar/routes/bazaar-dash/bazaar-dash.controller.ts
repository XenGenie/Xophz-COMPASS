import { mapStores } from 'pinia'
import { useBazaarStore } from '../../store'
import { useCompassStore } from '../../../compass/store'
import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'
import xSparkplug from '@/components/sparkplug/sparkplug.vue'

export default {
  name: 'bazaar-dash',
  data,
  computed: getComputed(),
  methods: getMethods(),
  created: onCreated,
  components: { navDrawer, xSparkplug }
}

function data () {
  return {
  }
}

function getComputed () {
  return {
    ...mapStores(useBazaarStore, useCompassStore),
    totalPosts () { return this.bazaarStore.totalPosts },
    totalSales () { return this.bazaarStore.totalSales },
    totalShipping () { return this.bazaarStore.totalShipping },
    totalOrders () { return this.bazaarStore.totalOrders },
    totalOrdersSparkline () { return this.bazaarStore.totalOrdersSparkline },
    totalUsers () { return this.bazaarStore.totalUsers },
    totalUsersSparkline () { return this.bazaarStore.totalUsersSparkline },
    totalViews () { return this.bazaarStore.totalViews },
    totalViewsSparkline () { return this.bazaarStore.totalViewsSparkline },
    totalSalesSparkline () { return this.bazaarStore.totalSalesSparkline },
    salesSparkline () { return this.bazaarStore.salesSparkline },
    reports () { return this.bazaarStore.reports },
    plugin () { return this.compassStore.activePlugin }
  }
}

function getMethods () {
  return {
    formatCurrency (value) {
      if (value === undefined || value === null) return ''
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
    },
    loadTotalSales () { }
  }
}

function onCreated () {
  this.bazaarStore.getReports()
  this.bazaarStore.getTotalSales()
  this.bazaarStore.getTotalViews()
  this.bazaarStore.getTotalOrders()
  this.bazaarStore.getTotalUsers()
}
