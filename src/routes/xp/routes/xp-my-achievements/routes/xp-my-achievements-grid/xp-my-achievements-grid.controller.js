import soundFx from '../../../../components/sound-fx/sound-fx'

export default {
  name: 'xp-my-achievements-grid',

  // DATA
  data,
  props: ['weekday'],
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
  }
}

function getComputed () {
  return {
    dialog: {
      get () {
        return this.$store.state.xp.dialog
      },
      set (active) {
        this.openAchievementSound()
        this.$store.dispatch('xp/SET_DIALOG', active)
      }
    },
    achievement: {
      get () {
        return this.$store.state.xp.achievement
      },
      set (achievement) {
        this.$store.dispatch('xp/SET_ACHIEVEMENT', achievement)
      }
    },
    achievements: {
      get () {
        const vm = this
        return vm.$store.state.xp.achievements.filter(a => vm.isDueToday(a.repeat_on))
      }
    },
    completed: {
      get () {
        return this.$store.state.xp.completed
      }
    }
  }
}

function getMethods () {
  return {
    isDueToday,
    checkoffAchievement,
    openAchievementSound
  }

  function openAchievementSound () {
    this.playFx('question')
  }

  function checkoffAchievement (achievement) {
    const vm = this
    vm.achievement = achievement
    vm.dialog = true
  }

  function isDueToday (weekdaysDue) {
    const vm = this
    return weekdaysDue.indexOf(vm.weekday) !== -1
  }
}

function getWatched () {
  return {
    date (date) {
      const vm = this
      vm.setWeekday(date.getDay())
    }
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

}

function onDestroyed () {

}
