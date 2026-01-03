import { mapStores } from 'pinia'
import { useXpStore } from './store'
import { useCompassStore } from '@/routes/compass/store'

export default {
  name: 'xp-controller',
  data,
  props: {
    plugin: Object
  },
  computed: getComputed(),
  methods: getMethods(),
  watch: getWatched(),
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
  components: {}
}

function data () {
  return {}
}

function getComputed () {
  return {
    ...mapStores(useXpStore, useCompassStore),
    billboardChips: {
      get () {
        return this.xpStore.billboard.chips
      }
    },
    user: {
      get () {
        return this.xpStore.user
      }
    }
  }
}

function getMethods () {
  return {}
}

function getWatched () {
  return {
    billboardChips (chips) {
      this.compassStore.setBillboardChips(chips)
    }
  }
}

function onBeforeCreate () {
}

function onCreated () {
  const vm = this
  vm.xpStore.getUser()
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
