import navDrawer from '../../mixins/navigation-drawer/navigation-drawer.vue'

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
    xp_lvl1: 600
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
    users: {
      get () {
        return this.$store.state.xp.users
      }
    }
  }
}

function getMethods () {
  return {
    xpToNextLevel
  }

  function xpToNextLevel (user) {
    const vm = this

    const levels = []

    // const handicap = user.age / 10

    const lvl1 = (vm.xp_lvl1 * user.handicap)

    const level = Math.floor(user.xp / lvl1)
    let nextLevel = 0

    let i
    for (i = 0; i < (user.level + 2); i = +1) {
      levels[i] = lvl1 * i
      if (user.xp >= user.levels[i]) {
        nextLevel = i + 1
      }
    }

    const lvlUp = 100 * (
      levels[user.level] /
      levels[user.nextLevel]
    )

    return {
      ...user,
      levels,
      level,
      lvlUp,
      nextLevel
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
  const vm = this
  let i
  const xp = 60
  vm.users.forEach(vm.xpToNextLevel)
  for (i = 0; i < 100; i += 1) {
    // if(i){
    //   // vm.levels[i] = vm.levels[i-2] + vm.levels[i-1];
    // // } else if(i) {
    //   // vm.levels[i] = (i * xp) * 1.6018 - vm.levels[i-1];
    //   ;
    // }else{
    // }

    vm.levels[i] = (xp * i) * 1.7
  }
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
