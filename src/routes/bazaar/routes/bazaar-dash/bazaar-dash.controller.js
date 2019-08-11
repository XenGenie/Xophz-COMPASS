import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

import xSparkplug from '@/components/sparkplug/sparkplug.vue'

export default {
  name: 'bazaar-dash',
  // DATA
  data,
  props: [],
  computed: getComputed(),
  methods: getMethods(),
  watch: getWatched(),
  // LIFECYCLE
  beforeCreate: onBeforeCreate,
  created: onCreated,
  beforeMount: onBeforeMount,
  mounted: onMounted,
  beforeUpdate: onBeforeUpdate,
  updated: onUpdated,
  activated: onActivated,
  deactivated: onDeactivated,
  beforeDestroy: onBeforeDestory,
  destroyed: onDestroyed,
  // ASSETS
  components: { navDrawer, xSparkplug },
  mixins: [navDrawer],
  transitions: {},
  partials: {}
}

function data () {
  return {
  }
}

function getComputed () {
  return {
    totalPosts: {
      get () {
        return this.$store.state.bazaar.totalPosts
      }
    },
    totalSales: {
      get () {
        return this.$store.state.bazaar.totalSales
      }
    },
    totalShipping: {
      get () {
        return this.$store.state.bazaar.totalShipping
      }
    },
    totalOrders: {
      get () {
        return this.$store.state.bazaar.totalOrders
      }
    },
    totalOrdersSparkline: {
      get () {
        return this.$store.state.bazaar.totalOrdersSparkline
      }
    },
    totalUsers: {
      get () {
        return this.$store.state.bazaar.totalUsers
      }
    },
    totalUsersSparkline: {
      get () {
        return this.$store.state.bazaar.totalUsersSparkline
      }
    },
    totalViews: {
      get () {
        return this.$store.state.bazaar.totalViews
      }
    },
    totalViewsSparkline: {
      get () {
        return this.$store.state.bazaar.totalViewsSparkline
      }
    },
    totalSalesSparkline: {
      get () {
        return this.$store.state.bazaar.totalSalesSparkline
      }
    },
    salesSparkline: {
      get () {
        return this.$store.state.bazaar.salesSparkline
      }
    },
    reports: {
      get () {
        return this.$store.state.bazaar.reports
      }
    },
    plugin: {
      get () {
        return this.$store.state.compass.activePlugin
      }
    }
  }
}

function getMethods () {
  return {
    loadTotalSales
  }
  function loadTotalSales () {

  }
}

function getWatched () {
  return {

  }
}

function onBeforeCreate () {

}

function onCreated () {
  const vm = this
  vm.$store.dispatch('bazaar/GET_REPORTS')
  vm.$store.dispatch('bazaar/GET_TOTAL_SALES')
  vm.$store.dispatch('bazaar/GET_TOTAL_VIEWS')
  vm.$store.dispatch('bazaar/GET_TOTAL_ORDERS')
  vm.$store.dispatch('bazaar/GET_TOTAL_USERS')
}

function onBeforeMount () {

}

function onMounted () {

}

function onBeforeUpdate () {

}

function onUpdated () {

}

function onActivated () {

}

function onDeactivated () {

}

function onBeforeDestory () {

}

function onDestroyed () {

}
