import soundFx from '../../components/sound-fx/sound-fx'
import navDrawer from '../../mixins/navigation-drawer/navigation-drawer.vue'

export default {
  name: 'xp-level-up-screen',
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
  mixins: [soundFx, navDrawer],
  transitions: {},
  partials: {}
}

function data () {
  return {
    audio: new Audio(),
    level: 9
  }
}

function getComputed () {
  return {
    achievement: {
      get () {
        return this.$store.state.xp.achievement
      }
    },

    currentUser: {
      get () {
        return this.$store.state.compass.currentUser
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
    rewardPointsToUser
  }
  function rewardPointsToUser () {
    this.$store.dispatch('xp/REWARD_POINTS_TO_USER', this.achievement)
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
  this.playFx('complete')
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
  this.rewardPointsToUser()
}
