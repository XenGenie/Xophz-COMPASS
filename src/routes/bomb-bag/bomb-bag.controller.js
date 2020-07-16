import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'bomb-bag',
  data,
  props: {
    plugin: Object
  },
  components: { navDrawer },
  mixins: [navDrawer],
  computed: getComputed(),
  created: onCreated,
  methods: getMethods()
}

function data () {
  return {}
}

function getComputed () {
  return {
    isRoutesNavActive: {
      get () {
        return this.$store.state.compass.isRoutesNavActive
      },
      set (active) {
        this.$store.dispatch('compass/TOGGLE_NAV', active)
      }
    }
  }
}

function getMethods () {
  return {}
}

function onCreated () {
  this.$store.dispatch('compass/TOGGLE_NAV', true)
}
