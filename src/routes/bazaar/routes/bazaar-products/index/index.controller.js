export default {
  data,
  mounted: onMounted,
  computed: getComputed(),
  watch: getWatched()
}

function data () {
  return {
    pagination: {},
    headers: [
      {
        text: 'Image',
        value: 'thumb'
      },
      {
        text: 'Product Name',
        value: 'title'
      },
      {
        text: 'SKU',
        value: 'sku'
      },
      {
        text: 'Price',
        value: 'price'
      },
      {
        text: 'Stock',
        value: 'stock'
      }
    ]
  }
}

function onMounted () {
  const vm = this
  vm.$store.dispatch('bazaar/GET_PRODUCTS')
  vm.pagination.totalItems = vm.total
  vm.pagination.rowsPerPage = vm.$store.state.bazaar.productsLimit
}

function getComputed () {
  return {
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
    },
    total: {
      get () {
        return this.$store.state.bazaar.totalProducts
      }
    },
    loading: {
      get () {
        return this.$store.state.bazaar.isLoading
      }
    },
    products: {
      get () {
        return this.$store.state.bazaar.products
      }
    }
  }
}

function getWatched () {
  return {
    pagination (pagination) {
      this.page = pagination.page
    },
    page (page) {
      this.pagination.page = page
    }
  }
}
