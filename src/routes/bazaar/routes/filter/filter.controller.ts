import { mapStores } from 'pinia'
import { useBazaarStore } from '../../store'

export default {
  data,
  computed: getComputed(),
  methods: getMethods()
}

function data () {
  return {
    dropdown: {
      contain: 'Contains',
      exact: 'Is Exactly',
      not: 'Does NOT Contain',
      start: 'Starts with...',
      end: '...Ends with'
    },
    form: {
      title: null,
      sku: null,
      categories: []
    }
  }
}

function getComputed () {
  return {
    ...mapStores(useBazaarStore),
    isActive: {
      get () {
        return this.bazaarStore.isProductsFilterDialogOn
      },
      set (value) {
        if (value) this.bazaarStore.showProductsFilter()
        else this.bazaarStore.hideProductsFilter()
      }
    },
    isSaving: {
      get () {
        return this.bazaarStore.isLoading
      }
    }
  }
}

function getMethods () {
  return {
    findProducts (e) {
      const vm = this
      // vm.isActive = false // let action handle it or explicit logic
      // In Pinia store `getProducts` sets isProductsFilterDialogOn = false
      vm.bazaarStore.applyProductsFilters(vm.form)
      vm.bazaarStore.getProducts()
    }
  }
}
