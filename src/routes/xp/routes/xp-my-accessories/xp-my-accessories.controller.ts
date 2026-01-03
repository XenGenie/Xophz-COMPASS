import navDrawer from '../../mixins/navigation-drawer/navigation-drawer.vue'
import soundFx from '../../components/sound-fx/sound-fx'
import search from '../../components/search/search.vue'

export default {
  name: 'xp-my-accessories',
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

  }
}

function getComputed () {
  return {
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

  }
}

function onBeforeCreate () {

}

function onCreated () {
  const vm = this
  vm.$store.dispatch('xp/LIST_ACCESSORIES')
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
