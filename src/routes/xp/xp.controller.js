export default {
  name: 'xp-controller',
  // DATA
  data,
  props: {
    plugin: Object
  },
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
  transitions: {},
  partials: {}
}

function data () {
  return {

  }
}

function getComputed () {
  return {
    billboardChips: {
      get () {
        return this.$store.state.xp.billboard.chips
      }
    },
    user: {
      get () {
        return this.$store.state.xp.user
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
    billboardChips (chips) {
      return this.$store.dispatch('compass/SET_BILLBOARD_CHIPS', chips)
    }
  }
}

function onBeforeCreate () {

}

function onCreated () {
  const vm = this
  vm.$store.dispatch('xp/GET_USER')
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
