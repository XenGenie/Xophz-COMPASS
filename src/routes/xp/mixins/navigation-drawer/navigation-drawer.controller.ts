import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'xp-navigation-drawer',

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
  components: { navDrawer },
  transitions: {},
  partials: {}
}

function data () {
  return {

  }
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
  return {

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
