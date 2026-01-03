import { mapStores } from 'pinia'
import { useCompassStore } from '@/routes/compass/store'

export default {
  name: 'compass-mixin',
  computed: {
    ...getComputed(),
    ...mapStores(useCompassStore)
  },
  methods: getMethods()
}

function getComputed () {
  return {
    stepper: {
      get () {
        return this.compassStore.stepper
      },
      set (stepper) {
        this.compassStore.setStepper(stepper)
      }
    },
    loading: {
      get () {
        return this.compassStore.loading
      },
      set (loading) {
        this.compassStore.setLoading(loading)
      }
    }
  }
}

function getMethods () {
  return {

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
