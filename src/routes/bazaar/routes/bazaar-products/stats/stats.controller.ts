import { mapStores } from 'pinia'
import { useBazaarStore } from '../../../store'

export default {
  computed: getComputed(),
  created: onCreated
}

function getComputed () {
  return {
    ...mapStores(useBazaarStore),
    filters () {
      return this.bazaarStore.productsFilters
    },
    stats () {
      return this.bazaarStore.productsStats
    }
  }
}

function onCreated () {
  const vm = this
  vm.bazaarStore.loadProductsStats()
}
