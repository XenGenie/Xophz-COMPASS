import soundFx from '../../../../components/sound-fx/sound-fx'

export default {
  name: 'xp-level-up-screen-gained-gp',
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
    itemsOffered: [
      // {
      //   key: 'New Shoes',
      //   value: 1
      // },
      // {
      //   key: 'Piece of candy',
      //   value: 1
      // },
      // {
      //   key: 'Snack',
      //   value: 1
      // }
    ],
    itemsGained: []
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
    }
  }
}

function getMethods () {
  return {
    backToAchievements () {
      const playPromise = this.playFx('click')
      const vm = this

      if (playPromise !== undefined) {
        playPromise.then(() => {
          vm.$router.push({
            path: '/xp/achievements/grid#xp-my-achievements'
          })
        })
          .catch(() => {

          })
      }
    },
    shellOutPoints () {
      const vm = this
      const gp = Number(vm.user.gp) + Number(vm.achievement.gp)
      vm.$store.dispatch('xp/SET_USER_POINTS', {
        ...vm.user,
        gp
      })
    },

    takeItem (key) {
      const vm = this
      const fx = this.playFx('item', 'take')
      vm.itemsGained.push(
        vm.itemsOffered.splice(key, 1)[0]
      )
      fx.currentime = 0
    },

    returnItem (key) {
      const vm = this
      const fx = this.playFx('item', 'give')
      vm.itemsOffered.push(
        vm.itemsGained.splice(key, 1)[0]
      )
      fx.currentime = 0
    },

    takeEverything () {
      const vm = this
      vm.playFx('burp')
      vm.itemsGained = vm.itemsOffered.concat(vm.itemsGained)
      vm.itemsOffered = []
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

}

function onBeforeMount () {

}

function onMounted () {
  const vm = this
  setTimeout(vm.shellOutPoints, 250)
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
