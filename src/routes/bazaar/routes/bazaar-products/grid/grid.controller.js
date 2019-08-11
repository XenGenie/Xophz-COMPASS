export default {
  computed: getComputed()
}

function getComputed () {
  return {
    products: {
      get () {
        return this.$store.state.bazaar.products
      },
      set (value) {
      }
    }
  }
}
