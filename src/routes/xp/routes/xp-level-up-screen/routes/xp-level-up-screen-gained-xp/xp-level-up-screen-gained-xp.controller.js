import soundFx from '../../../../components/sound-fx/sound-fx'

export default {
  name: 'xp-level-up-screen-gained-xp',
  // DATA
  data,
  props: {
    user: {
      default: 0
    }
  },
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
  mixins: [soundFx],
  transitions: {},
  partials: {}
}

function data () {
  return {
    xp_lvl1: 600,
    nextLevel: 0,
    currentLevel: 0,
    userProgress: 0,
    levels: [],
    levelUp: [],
    tempLevel: 0
  }
}

function getComputed () {
  return {
    hasLeveled () {
      return this.tempLevel !== this.user.lvl
    },
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
    xpToNextLevel: {
      get () {
        this.layLevels()
        return this.levels[this.nextLevel] - this.user.xp
      }
    }
  }
}

function getMethods () {
  return {
    updateProgressBar (xp) {
      const vm = this
      const current = vm.levels[vm.currentLevel]
      const next = vm.levels[vm.nextLevel]
      const total = next - current
      const left = next - xp
      const progress = total - left
      vm.userProgress = Math.floor((progress / total) * 100)
    },

    updateNextLevelProgress () {
      // if(v < (this.xpToNextLevel - this.user.xp) )
      //   this.updateProgressBar(this.xpToNextLevel - v);
    },

    shellOutPoints () {
      const vm = this
      const xp =
        Number(vm.user.xp) +
        Number(vm.achievement.xp)
      vm.$store.dispatch('xp/SET_USER_POINTS', {
        ...vm.user,
        xp
      })
    },

    layLevels () {
      const vm = this
      const handicap = 12 / 10
      const lvl1 = (vm.xp_lvl1 * handicap)
      let i
      for (i = 0; i < (Math.floor(vm.user.xp / lvl1) + 2); i += 1) {
        vm.levels[i] = Math.ceil(lvl1 * (i * handicap))
        if (vm.user.xp >= vm.levels[i]) {
          vm.currentLevel = i
          vm.nextLevel = i + 1
        }
      }
      vm.updateProgressBar(vm.user.xp)
    }
  }
}

function getWatched () {
  return {
    hasLeveled (hasLeveled) {
      if (hasLeveled) {
        if (this.tempLevel > this.user.lvl) this.playFx('levelDown')
        else this.playFx('levelUp')
      }
    },
    user () {
    },
    currentLevel (level) {
      if (level && level !== this.user.lvl) this.$store.dispatch('xp/LEVEL_UP', level)
    }
  }
}

function onBeforeCreate () {

}

function onCreated () {
  this.tempLevel = this.user.lvl
}

function onBeforeMount () {
}

function onMounted () {
  const vm = this
  setTimeout(vm.shellOutPoints, 500)
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
