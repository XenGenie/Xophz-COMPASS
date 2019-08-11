import FilterDialog from '../filter/filter.vue'
import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'bazaar-products',
  methods: getMethods(),
  computed: getComputed(),
  data,
  components: {
    FilterDialog,
    navDrawer
  },
  created: onCreated,
  mixins: [navDrawer],
  watch: getWatched()
}

function data () {
  return {
    menuVisible: false,
    viewList: true,
    sending: false,
    category: '',
    stock: '',
    productType: '',
    productTypes: [
      {
        text: 'Simple Product',
        value: 'simple'
      },
      {
        text: '→ Downloadable',
        value: 'downloadable'
      },
      {
        text: '→ Virtual',
        value: 'virtual'
      },
      {
        text: 'Grouped Product',
        value: 'grouped'
      },
      {
        text: 'External/Affiliate product',
        value: 'external'
      },
      {
        text: 'Variable product',
        value: 'variable'
      }
    ],
    stockStatus: [
      {
        text: 'In Stock',
        value: 'instock'
      },
      {
        text: 'In Stock',
        value: 'instock'
      },
      {
        text: 'Out of Stock',
        value: 'outofstock'
      },
      {
        text: 'On Backorder',
        value: 'onbackorder'
      }
    ]
  }
}

function getMethods () {
  return {
    navi (routeName) {
      this.$router.push({ name: routeName })
    },
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    },
    selectedFilter () {
      this.loadProducts()
    },
    showFilterDialog () {
      this.$store.dispatch('bazaar/SHOW_PRODUCTS_FILTER')
    },
    loadCategories () {
      this.$store.dispatch('bazaar/GET_CATEGORIES')
    },
    getFilters () {
      const vm = this
      const { category } = vm
      const type = vm.productType
      const { stock } = vm
      const filters = {}
      if (category) filters.category = category
      if (type) filters.type = type
      if (stock) filters.stock_status = stock
      return filters
    },
    loadProducts () {
      const vm = this
      vm.$store.dispatch('bazaar/GET_PRODUCTS', vm.getFilters())
    }
  }
}

function getWatched () {
  return {
    viewList (value) {
      const vm = this
      const whichView = value ? 'Index' : 'Grid'
      vm.$router.push({
        name: `Products ${whichView}`
      })
    }
  }
}

function onCreated () {
  this.loadCategories()
  this.loadProducts()
}

function getComputed () {
  return {
    categories: {
      get () {
        return this.$store.state.bazaar.categories
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
    },
    total: {
      get () {
        return this.$store.state.bazaar.totalProducts
      }
    }
  }
}
