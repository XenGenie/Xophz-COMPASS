import FilterDialog from '../filter/filter.vue'
import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'bazaar-sales',
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
  components: {
    FilterDialog,
    navDrawer
  },
  mixins: [navDrawer],
  transitions: {},
  partials: {}
}

function data () {
  return {
    date: [],
    modal: false,
    isMenuVisible: true
  }
}

function getComputed () {
  return {

  }
}

function getMethods () {
  return {
    showSearchDialog () {
      this.$store.dispatch('bazaar/SHOW_PRODUCTS_FILTER')
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
  this.billboard = {
    h1: this.$refs.billboardH1.innerHTML,
    block: this.$refs.billboardBlock.innerHTML
  }
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
