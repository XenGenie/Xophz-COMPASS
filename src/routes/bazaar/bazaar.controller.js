import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  data,
  beforeCreate: onBeforeCreate,
  computed: getComputed(),
  components: { navDrawer },
  mixins: [navDrawer],
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

function onBeforeCreate () {

}
