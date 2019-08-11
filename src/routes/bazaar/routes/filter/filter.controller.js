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
    isActive: {
      get () {
        const vm = this
        return vm.$store.state.bazaar.isProductsFilterDialogOn
      },

      set (value) {
        const vm = this
        return vm.$store.commit('bazaar/SET_PRODUCTS_FILTER_DIALOG', value)
      }
    },

    isSaving: {
      get () {
        const vm = this
        return vm.$store.state.bazaar.isLoading
      },

      set (value) {
        const vm = this
        vm.$store.commit('bazaar/SET_IS_LOADING', value)
      }
    }
  }
}

function getMethods () {
  return {
    findProducts (e) {
      const vm = this
      vm.isActive = false
      vm.$store.dispatch('bazaar/APPLY_PRODUCTS_FILTERS', vm.form)
    }
  }
}
