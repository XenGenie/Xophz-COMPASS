import { mapStores } from 'pinia'
import { useXpStore } from '../../store'
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
  components: { navDrawer },
  mixins: [soundFx],
  transitions: {},
  partials: {}
}

function data () {
  return {
    audio: new Audio()
  }
}

function getComputed () {
  return {
    ...mapStores(useXpStore),
    achievement: {
      get () {
        return this.xpStore.achievement
      }
    },
    currentUser: {
      get () {
        return this.$store.state.compass.currentUser
      }
    },
    user: {
      get () {
        return this.xpStore.user
      }
    },
    level: {
      get () {
        return this.user.level
      }
    }
  }
}

function getMethods () {
  return {
    rewardPointsToUser
  }
  function rewardPointsToUser () {
    this.xpStore.rewardPointsToUser(this.achievement)
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
