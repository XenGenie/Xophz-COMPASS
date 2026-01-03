import soundFx from '../../components/sound-fx/sound-fx'
import search from '../../components/search/search.vue'
import navDrawer from '../../mixins/navigation-drawer/navigation-drawer.vue'

export default {
  name: 'xp-my-abilities',
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
  components: { search, navDrawer },
  mixins: [soundFx],
  transitions: {},
  partials: {}
}

function data () {
  return {
    toggleMultiple: []
  }
}

function getComputed () {
  return {

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
  // this.$store.dispatch('xp/TALLY_ABILITY_POINTS');
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
