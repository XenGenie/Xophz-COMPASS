import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'Orders',
  props: [],
  data,

  components: { navDrawer },
  mixins: [navDrawer],
  watch: getWatched(),
  created: onCreated,
  mounted: onMounted,
  methods: getMethods()
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
      this.$store.dispatch('bazaar/GET_ORDERS')
    },
    showSearchDialog () {

    }
  }
}

function getWatched () {
  return {
    isViewGrid (isGrid) {
      const vm = this
      const name = `${vm.$options.name} ${!isGrid}` ? 'Index' : 'Grid'
      vm.$router.push({ name })
    }
  }
}

function onCreated () {
  const vm = this
  vm.loadOrders()
}

function onMounted () {

}
