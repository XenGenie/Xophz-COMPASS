export default {
  data,
  props: {
    plugin: Object
  },
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
