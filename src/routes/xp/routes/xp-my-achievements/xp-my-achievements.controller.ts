import { mapStores } from 'pinia'
import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'
import { useXpStore } from '../../store'
import soundFx from '../../components/sound-fx/sound-fx'
import search from '../../components/search/search.vue'

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
  components: { search, navDrawer },
  mixins: [soundFx],
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
    ...mapStores(useXpStore),
    achievement: {
      get () {
        return this.xpStore.achievement
      }
    },
    dialog: {
      get () {
        return this.xpStore.dialog
      },
      set (active) {
        this.xpStore.setDialog(active)
      }
    },
    date: {
      get () {
        return this.xpStore.date
      },
      set () {
        const vm = this
        vm.xpStore.setDate(vm.date)
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
  vm.xpStore.listAchievements()
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
