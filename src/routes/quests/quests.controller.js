import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  data,
  props: {
    plugin: Object
  },
  components: { navDrawer },
  mixins: [navDrawer],
  computed: getComputed(),
  methods: getMethods()
}

function data () {
  return {}
}

function getComputed () {
  return {}
}

function getMethods () {
  return {}
}
