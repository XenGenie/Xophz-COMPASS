import compassMixin from '../../mixins/compass-mixin/compass-mixin.controller'

export default {
  name: 'compass-explore',
  // DATA
  data,
  props: [],
  computed: getComputed(),
  methods: getMethods(),
  watch: getWatched(),
  // LIFECYCLE
  beforeCreate: onBeforeCreate,
  created: onCreated,
  beforeMount: onBeforeMount,
  mounted: onMounted,
  beforeUpdate: onBeforeUpdate,
  updated: onUpdated,
  activated: onActivated,
  deactivated: onDeactivated,
  beforeDestroy: onBeforeDestory,
  destroyed: onDestroyed,
  // ASSETS
  components: {},
  mixins: [compassMixin],
  transitions: {},
  partials: {}
}

function data () {
  return {
    dialog: true,
    snackbar: false,
    snack: {
      gray: false,
      img: '',
      text: ''
    }
  }
}

function getComputed () {
  return {
    plugins: {
      get () {
        return this.$store.state.compass.pluginList
      }
    }
  }
}

function getMethods () {
  return {
    togglePlugin (e, plugin) {
      const vm = this
      vm.snack.img = plugin.icon
      vm.snack.gray = plugin.isActivated
      if (!plugin.isActivated) {
        vm.snack.text = `${plugin.Name} has been activated.`
        vm.activatePlugin(plugin).then(vm.showSnackbar)
      } else {
        vm.snack.text = `${plugin.Name} has been deactivated.`
        vm.deactivatePlugin(plugin).then(vm.showSnackbar)
      }
    },
    activatePlugin (plugin) {
      return this.$store.dispatch('compass/ACTIVATE_PLUGIN', plugin)
    },
    deactivatePlugin (plugin) {
      return this.$store.dispatch('compass/DEACTIVATE_PLUGIN', plugin)
    },
    showSnackbar () {
      this.snackbar = true
    }
  }
}

function getWatched () {
  return {

  }
}

function onBeforeCreate () {
}

function onCreated () {

}

function onBeforeMount () {

}

function onMounted () {
  this.loading = false
}

function onBeforeUpdate () {

}

function onUpdated () {

}

function onActivated () {

}

function onDeactivated () {

}

function onBeforeDestory () {

}

function onDestroyed () {

}
