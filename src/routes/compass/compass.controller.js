import compassMixin from './mixins/compass-mixin/compass-mixin.controller'

export default {
  name: 'xophz-compass',
  data,
  props: {
    plugin: Object
  },
  components: {},
  created: onCreated,
  mounted,
  mixins: [compassMixin],
  computed: getComputed(),
  watch: getWatched(),
  methods: getMethods()
}

function data () {
  return {
    active: 'first',
    first: false,
    second: false,
    third: false,
    showSnackbar: false,
    snackbarPlugin: {},
    secondStepError: null
  }
}

function getComputed () {
  return {
    currentUser: {
      get () {
        return this.$store.state.compass.currentUser
      }
    },
    plugins: {
      get () {
        return this.$store.state.compass.pluginList
      }
    },
    billboard: {
      get () {
        return this.$store.state.compass.billboard
      },
      set (billboard) {
        this.$store.dispatch('compass/SET_BILLBOARD', billboard)
      }
    },
    isBillboardOff: {
      get () {
        return this.$store.state.compass.isBillboardOff
      }
    },
    isAppBarOff: {
      get () {
        return this.$store.state.compass.isAppBarOff
      }
    }
  }
}

function getWatched () {
  return {
    stepper (step) {
      const vm = this
      const hash = vm.$options.name
      const path = {
        1: '/',
        2: '/compass/explore',
        3: '/compass/dashboard'
      }[step]

      const isBillboardOff = {
        1: true,
        2: true,
        3: true
      }[step]

      vm.$store.dispatch('compass/TURN_OFF_BILLBOARD', isBillboardOff)

      vm.loading = true
      vm.$router.push({ path, hash }, () => {
        vm.loading = false
      })
    }
  }
}

function mounted () {
  this.showCompass()
  this.$store.dispatch('compass/TURN_OFF_BILLBOARD', true)
  this.$store.dispatch('compass/TURN_OFF_APP_BAR', true)
}

function onCreated () {
}

function getMethods () {
  return {
    mouseOver (plugin) {
      const vm = this
      vm.showSnackbar = true
      vm.snackbarPlugin = plugin
    },
    refreshLayout () {
      // $('#second').reloadItems();
      // this.$refs.layout();
    },
    togglePlugin (e, plugin) {
      const vm = this
      if (e.target.checked) {
        vm.activatePlugin(plugin)
      } else {
        vm.deactivatePlugin(plugin)
      }
    },
    activatePlugin (plugin) {
      // $.ajax({
      //   url: '',
      //   data : { 'action' : 'activate_plugin', 'plugin' : plugin.TextDomain },
      //   method: 'GET',
      //   success: function () {
      //   },
      //   error: function () {
      //   }
      // });
    },
    deactivatePlugin (plugin) {
      // $.ajax({
      //   // url: ajaxurl,
      //   data : { 'action' : 'deactivate_plugin', 'plugin' : plugin.TextDomain },
      //   method: 'GET',
      //   success: function () {
      //   },
      //   error: function () {
      //   }
      // });
    },
    setDone (id, index) {
      this[id] = true
      this.secondStepError = null
      if (index) {
        this.active = index
      }
    },
    setError () {
      this.secondStepError = 'This is an error!'
    },
    showCompass () {
      // this.$refs.compassCircle.style.opacity = 1;
    }
  }
}
