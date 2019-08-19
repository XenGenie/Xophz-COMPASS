import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'xp-dashboard',
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
  mixins: [navDrawer],
  transitions: {},
  partials: {}
}

function data () {
  return {
    levels: [],
    birthdate: new Date().toISOString().substr(0, 10),
    startPlayerDialog: false,
    xp_level1: 600
  }
}

function getComputed () {
  return {
    plugin: {
      get () {
        return this.$store.state.compass.activePlugin
      }
    },
    userChips: {
      get () {
        return this.$store.state.compass.billboard.chips
      },
      set (chips) {
        this.$store.dispatch('compass/SET_BILLBOARD_CHIPS', chips)
      }
    },
    userMask: {
      get () {
        return this.$store.state.compass.userMask
      },
      set (userMask) {
        this.$store.dispatch('compass/SET_USER_MASK', userMask)
      }
    },
    currentPlayer: {
      get () {
        return this.$store.state.xp.user
      }
    },
    players: {
      get () {
        return this.$store.state.xp.players
      }
    }
  }
}

function getMethods () {
  return {
    loadPlayers,
    xpToNextLevel,
    startPlayer
  }

  function startPlayer () {
    const vm = this
    vm.startPlayerDialog = false
    vm.$store.dispatch('xp/START_PLAYER', vm.birthdate)
      .then(vm.loadPlayers)
  }

  function loadPlayers () {
    this.$store.dispatch('xp/LOAD_PLAYERS')
  }

  function xpToNextLevel (user) {
    // const vm = this
    //
    // const levels = []
    //
    // const handicap = 8 / 10
    //
    // const level1 = (vm.xp_level1 * handicap)
    //
    // const level = Math.floor(user.xp / level1)
    // let nextLevel = 0
    //
    // let i
    // for (i = 0; i < (user.level + 2); i = +1) {
    //   levels[i] = level1 * i
    //   if (user.xp >= user.levels[i]) {
    //     nextLevel = i + 1
    //   }
    // }
    //
    // const levelUp = 100 * (
    //   levels[user.level] /
    //   levels[user.nextLevel]
    // )
    //
    // return {
    //   ...user,
    //   levels,
    //   level,
    //   levelUp,
    //   nextLevel
    // }
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
  vm.loadPlayers()
  // let i
  // const xp = 60
  // vm.players.forEach(vm.xpToNextLevel)
  //
  // for (i = 0; i < 100; i += 1) {
  //   if (i) {
  //     vm.levels[i] = vm.levels[i - 2] + vm.levels[i - 1]
  //   } else if (i) {
  //     vm.levels[i] = (i * xp) * 1.6018 - vm.levels[i - 1]
  //   }
  //
  //   vm.levels[i] = (xp * i) * 1.7
  // }
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
