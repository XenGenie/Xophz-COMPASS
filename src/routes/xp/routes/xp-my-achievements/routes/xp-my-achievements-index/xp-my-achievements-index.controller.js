export default {
  name: 'xp-my-achievements-index',
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
  transitions: {},
  partials: {}
}

function data () {
  return {
    headers: [
      {
        text: 'Img',
        value: 'img',
        width: '10%'
      },
      {
        text: 'Achievement',
        value: 'title',
        width: '50%'
      },
      {
        text: 'SUN',
        width: '5%'
      },
      {
        text: 'MON',
        width: '5%'
      },
      {
        text: 'TUE',
        width: '5%'
      },
      {
        text: 'WED',
        width: '5%'
      },
      {
        text: 'THU',
        width: '5%'
      },
      {
        text: 'FRI',
        width: '5%'
      },
      {
        text: 'SAT',
        width: '5%'
      },
      {
        text: 'XP',
        icon: 'fa fa-hand-holding-magic',
        value: 'xp',
        width: '5%'
      },
      {
        text: 'AP',
        icon: 'fa fa-hand-holding-heart',
        value: 'ap',
        width: '5%'
      },
      {
        text: 'GP',
        icon: 'fa fa-hand-holding-usd',
        value: 'gp',
        width: '5%'
      },
      {
        text: 'Complete',
        value: ''
      }
    ]
  }
}

function getComputed () {
  return {
    dialog: {
      get () {
        return this.$store.state.xp.dialog
      },
      set (active) {
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
    }
  }
}

function getMethods () {
  return {
    isDueToday,
    checkoffAchievement
  }

  function checkoffAchievement (achievement) {
    const vm = this
    vm.achievement = achievement
    vm.dialog = true
  }

  function isDueToday (weekdaysDue) {
    return weekdaysDue.indexOf(this.weekday) !== -1
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

}

function onDestroyed () {

}
