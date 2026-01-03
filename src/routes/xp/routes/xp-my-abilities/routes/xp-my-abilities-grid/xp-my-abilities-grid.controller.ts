export default {
  name: 'xp-my-abilities-grid',
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
  transitions: {},
  partials: {}
}

function data () {
  return {

  }
}

function getComputed () {
  return {
    abilities: {
      get () {
        return this.$store.state.xp.abilities
      }
    },
    tally: {
      get () {
        return this.$store.state.xp.tally
      }
    }
  }
}

function getMethods () {
  return {
    apToUnlock (ability) {
      let percent = 0
      switch (ability.repeat) {
        case 'day':
          percent = this.tally.ap[1] / ability.ap_to_unlock
          break
        case 'week':
          percent = this.tally.ap[7] / ability.ap_to_unlock
          break
        case 'month':
          percent = this.tally.ap[30] / ability.ap_to_unlock
          break
        case 'year':
          percent = this.tally.ap[365] / ability.ap_to_unlock
          break
        default:
          percent = this.tally.ap[366] / ability.ap_to_unlock
          break
      }
      return percent * 100
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
  this.$store.dispatch('xp/LIST_ABILITIES')
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
