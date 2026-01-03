import { mapStores } from 'pinia'
import { useBazaarStore } from '../../store'
import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'bazaar-orders',
  data,
  computed: {
    ...mapStores(useBazaarStore)
  },
  components: { navDrawer },
  created: onCreated,
  methods: getMethods(),
  watch: getWatched()
}

function data () {
  return {
    isMenuVisible: false,
    isViewGrid: false
  }
}

function getMethods () {
  return {
    loadOrders () {
      this.bazaarStore.getOrders()
    },
    showSearchDialog () {

    }
  }
}

function getWatched () {
  return {
    isViewGrid (isGrid) {
      const vm = this
      // Logic from original: const name = `${vm.$options.name} ${!isGrid}` ? 'Index' : 'Grid'
      // Wait, original logic: `${vm.$options.name} ${!isGrid}` ? 'Index' : 'Grid'
      // That string check looks buggy in original? "bazaar-orders false" is truthy.
      // Assuming it meant logic to toggle routes.
      // If isGrid (true) -> maybe 'Orders Grid'?
      // If !isGrid (false) -> 'Orders Index'?
      // Original: 
      // const name = `${vm.$options.name} ${!isGrid}` ? 'Index' : 'Grid'
      // This logic always returns 'Index' because non-empty string is true.
      // Likely it was: `${vm.$options.name} ${!isGrid ? 'Index' : 'Grid'}` ??
      // I'll check bazaar.routes.js (Step 147).
      // name: 'Orders Index' path: '/bazaar/orders'
      // name: 'Orders Grid' path: '/bazaar/orders/grid'
      // name: 'Customer Orders' for parent.
      // Parent component is `orders.vue`. It names itself `bazaar-orders` (orders.controller.js line 4).
      // So logic probably intended: router.push({ name: isGrid ? 'Orders Grid' : 'Orders Index' })
      const name = isGrid ? 'Orders Grid' : 'Orders Index'
      vm.$router.push({ name })
    }
  }
}

function onCreated () {
  const vm = this
  vm.loadOrders()
}
