import { mapStores } from 'pinia'
import { useBazaarStore } from '../../../store'

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
        title: 'Image',
        value: 'thumb'
      },
      {
        title: 'Product Name',
        value: 'title'
      },
      {
        title: 'SKU',
        value: 'sku'
      },
      {
        title: 'Price',
        value: 'price'
      },
      {
        title: 'Stock',
        value: 'stock'
      }
    ]
  }
}

function onMounted () {
  const vm = this
  vm.bazaarStore.getProducts()
  // vm.pagination.totalItems = vm.total // pagination handled by store/props
  // vm.pagination.rowsPerPage = vm.limit
}

function getComputed () {
  return {
    ...mapStores(useBazaarStore),
    page: {
      get () {
        return this.bazaarStore.paging.page
      },
      set (page) {
        this.bazaarStore.goToPage(page)
      }
    },
    limit () {
      return this.bazaarStore.paging.limit
    },
    total () {
      return this.bazaarStore.totalProducts
    },
    loading () {
      return this.bazaarStore.isLoading
    },
    products () {
      return this.bazaarStore.products
    }
  }
}

function getWatched () {
  return {
    pagination (pagination) {
       // Vuetify 3 pagination handling is different.
       // This watcher might not be needed if using v-model:options or manual pagination.
       if (pagination.page) this.page = pagination.page
    },
    page (page) {
      this.pagination.page = page
    }
  }
}
