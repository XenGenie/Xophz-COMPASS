import compassMixin from '../../mixins/compass-mixin/compass-mixin.controller'

export default {
  name: 'compass-welcome',
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
}

function onBeforeMount () {

}

function onMounted () {
  this.stepper = 1
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
