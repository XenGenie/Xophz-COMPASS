import { mapStores } from 'pinia'
import { useCompassStore } from '../../store'
import compassMixin from '../../mixins/compass-mixin/compass-mixin.controller'

export default {
  name: 'compass-explore',
  // DATA
  data,
  props: [],
  computed: {
    ...getComputed(),
    ...mapStores(useCompassStore)
  },
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
        return this.compassStore.bottomSheet
      },
      set (isActive) {
        this.compassStore.setBottomSheet(isActive)
      }
    },
    plugins: {
      get () {
        return this.compassStore.pluginList
      }
    }
  }
}

function getMethods () {
  return {
    goToPlugin (plugin) {
      if (!plugin || !plugin.TextDomain) return
      this.$router.push({
        path: plugin.TextDomain.replace('xophz-compass-', '/'),
        hash: 'billboard',
        offset: { y: 15 }
      })
    },
    getPluginRoute (plugin) {
      if (!plugin || !plugin.TextDomain) return {}
      return {
        path: plugin.TextDomain.replace('xophz-compass-', ''),
        hash: 'billboard',
        offset: { y: 15 }
      }
    },
    togglePlugin (e, plugin) {
      const vm = this
      const action = plugin.isActivated ? 'deactivate' : 'activate'
      const toggle = `${action}Plugin`

      vm.snack.text = `${plugin.Name} has been ${action}d.`
      vm.snack.gray = plugin.isActivated
      vm.snack.img = plugin.icon

      vm[toggle](plugin)
        .then(() => {
          vm.loadPlugins()
          vm.showSnackbar()
        })
    },
    loadPlugins () {
      return this.compassStore.loadPlugins()
    },
    activatePlugin (plugin) {
      return this.compassStore.activatePlugin(plugin)
    },
    deactivatePlugin (plugin) {
      return this.compassStore.deactivatePlugin(plugin)
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
