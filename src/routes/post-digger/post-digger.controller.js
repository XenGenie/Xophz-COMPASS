import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  data,
  props: {
    plugin: Object
  },
  components: { navDrawer },
  mixins: [navDrawer]
}

function data () {
  return {}
}
