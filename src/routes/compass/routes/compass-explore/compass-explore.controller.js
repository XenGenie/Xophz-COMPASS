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
    welcomeDialog: true,
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
    bottomSheet: {
      get () {
        return this.$store.state.compass.bottomSheet
      },
      set (isActive) {
        this.$store.dispatch('compass/SET_BOTTOM_SHEET', isActive)
      }
    },
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
      const action = plugin.isActivated ? 'deactivate' : 'activate'
      const toggle = `${action}Plugin`

      vm.snack.text = `${plugin.Name} has been ${action}d.`
      vm.snack.gray = plugin.isActivated
      vm.snack.img = plugin.icon

      vm[toggle](plugin)
        .then(vm.loadPlugins)
        .then(vm.showSnackbar)
    },
    loadPlugins () {
      return this.$store.dispatch('compass/LOAD_PLUGINS')
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
