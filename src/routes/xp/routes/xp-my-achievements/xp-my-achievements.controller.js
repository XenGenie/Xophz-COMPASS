import soundFx from '../../components/sound-fx/sound-fx'
import search from '../../components/search/search.vue'
import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'

export default {
  name: 'xp-my-achievements',

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
  components: { search },
  mixins: [soundFx, navDrawer],
  transitions: {},
  partials: {}
}

function data () {
  return {
    index: false,
    weekday: 'sun',
    routes: [
      'grid',
      'index'
    ]
  }
}

function getComputed () {
  return {
    achievement: {
      get () {
        return this.$store.state.xp.achievement
      }
    },
    dialog: {
      get () {
        return this.$store.state.xp.dialog
      },
      set (active) {
        this.$store.dispatch('xp/SET_DIALOG', active)
      }
    },
    date: {
      get () {
        return this.$store.state.xp.date
      },
      set () {
        const vm = this
        vm.$store.dispatch('xp/SET_DATE', vm.date)
      }
    }
  }
}

function getMethods () {
  return {
    setDate,
    setWeekday,
    isPath,
    primeRoute
  }

  function isPath (path) {
    this[path] = this.$route.path.indexOf(path) !== -1
  }

  function setDate (n) {
    const vm = this
    vm.date.setDate(vm.date.getDate() + n)
    vm.setWeekday(vm.date.getDay())
  }

  function setWeekday (d) {
    const vm = this
    const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    vm.weekday = week[d]
  }

  function primeRoute (key) {
    const vm = this
    vm.routes.reverse()
    if (vm[key] && vm.routes[0] === key) {
      vm.routes.reverse()
    }
  }
}

function getWatched () {
  return {
    index () {
      const vm = this
      vm.primeRoute('index')
      vm.$router.push(vm.$route.path.replace(...vm.routes))
    }
  }
}

function onBeforeCreate () {

}

function onCreated () {
  const vm = this
  vm.$store.dispatch('xp/LIST_ACHIEVEMENTS')
  vm.isPath('index')
  vm.setDate(0)
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
