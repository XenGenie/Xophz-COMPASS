export default {
  computed: getComputed(),
  created: onCreated
}

function getComputed () {
  return {
    filters: {
      get () {
        return this.$store.state.bazaar.productsFilters
      }
    },
    stats: {
      get () {
        return this.$store.state.bazaar.productsStats
      }
    }
  }
}

function onCreated () {
  const vm = this
  vm.$store.dispatch('bazaar/LOAD_PRODUCTS_STATS')
}
