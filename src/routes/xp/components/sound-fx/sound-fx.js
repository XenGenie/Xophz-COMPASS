export default {
  name: 'sound-fx',

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
    loaded: 0,
    audio: {}
  }
}

function getComputed () {
  return {
    soundFx: {
      get () {
        const path = this.$route.matched[0].path.replace('/', '')
        return this.$store.state[path].soundFx
      }
    }
  }
}

function getMethods () {
  return {
    playFx
  }
  function playFx (fx, sub) {
    let file = this.soundFx[fx] ? this.soundFx[fx] : fx
    file = file[sub] ? file[sub] : fx
    this.audio = new Audio(file)
    this.audio.play()
    return this.audio
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
  if (this.audio.pause) this.audio.pause()
}

function onDestroyed () {
}
