import { mapStores } from 'pinia'
import { useBazaarStore } from '../../store'
import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'
import FilterDialog from '../filter/filter.vue'

export default {
  name: 'bazaar-products',
  components: {
    FilterDialog,
    navDrawer
  },
  data,
  computed: getComputed(),
  methods: getMethods(),
  created: onCreated,
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
        title: 'Simple Product',
        value: 'simple'
      },
      {
        title: '→ Downloadable',
        value: 'downloadable'
      },
      {
        title: '→ Virtual',
        value: 'virtual'
      },
      {
        title: 'Grouped Product',
        value: 'grouped'
      },
      {
        title: 'External/Affiliate product',
        value: 'external'
      },
      {
        title: 'Variable product',
        value: 'variable'
      }
    ],
    stockStatus: [
      {
        title: 'In Stock',
        value: 'instock'
      },
      {
        title: 'Out of Stock',
        value: 'outofstock'
      },
      {
        title: 'On Backorder',
        value: 'onbackorder'
      }
    ]
  }
}

function getComputed () {
  return {
    ...mapStores(useBazaarStore),
    categories () {
      return this.bazaarStore.categories
    },
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
    }
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
      this.bazaarStore.showProductsFilter()
    },
    loadCategories () {
      this.bazaarStore.getCategories()
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
      vm.bazaarStore.getProducts(vm.getFilters())
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
