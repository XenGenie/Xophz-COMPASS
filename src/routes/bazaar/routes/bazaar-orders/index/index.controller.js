export default {
  name: 'orders-index',
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
  components: {},
  transitions: {},
  partials: {}
}

function data () {
  return {
    headers: [
      {
        text: 'Order',
        value: 'order'
      },
      {
        text: 'Date',
        value: 'date'
      },
      {
        text: 'Status',
        value: 'status'
      },
      {
        text: 'Billing',
        value: 'billing'
      },
      {
        text: 'Total',
        value: 'total'
      }
    ]
  }
}

function getComputed () {
  return {
    orders: {
      get () {
        return this.$store.state.bazaar.orders
      }
    },

    pagination: {
      get () {
        // const vm = this
        // vm.pagination.totalItems = vm.total;
        // vm.pagination.rowsPerPage = vm.$store.state.bazaar.paging.limit;
        // return vm.pagination;
      }
    },

    page: {
      get () {
        return this.$store.state.bazaar.paging.page
      },

      set (page) {
        this.$store.dispatch('bazaar/GOTO_PAGE', page)
      }
    },

    limit: {
      get () {
        return this.$store.state.bazaar.paging.limit
      }
    }
  }
}

function getMethods () {
  return {

  }
}

function getWatched () {
  return {

  }
}

function onBeforeCreate () {

}

function onCreated () {

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
