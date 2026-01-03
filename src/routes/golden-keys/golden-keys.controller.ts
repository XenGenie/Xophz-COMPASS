import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  data,
  props: {
    plugin: Object
  },
  components: { navDrawer },
  computed: getComputed(),
  methods: getMethods()
}

function data () {
  return {
    // plugin : this.$parent.activePlugin
  }
}

function getComputed () {
  return {
    // plugin : {
    //     get: function(){
    //         const plugin = this.$parent.activePlugin;
    //         return plugin;
    //     }
    // }
  }
}

function getMethods () {
  return {}
}
