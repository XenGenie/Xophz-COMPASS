import { mapStores } from 'pinia'
import { useCompassStore } from '@/routes/compass/store'

export default {
  name: 'user-avatar-btn',
  computed: {
    ...getComputed(),
    ...mapStores(useCompassStore)
  },
  methods: getMethods(),
  data
}

function data () {
  return {
    logoutDialog: false
  }
}

function getComputed () {
  return {
    wpSwitchLabel: { // wpswitchlabels is seemingly missing in this file scope, assuming it's unneeded or handled elsewhere. removing dependency on this.wpSwitchLabels[].
       get() { return '' } 
    },
    isWpMenuOpen: {
      get () {
        return this.compassStore.isWpMenuOpen
      },
      set (isOpen) {
        this.compassStore.setWpMenu(isOpen)
      }
    },
    currentUser: {
      get () {
        return this.compassStore.currentUser
      }
    },
    blogInfo: {
      get () {
        return this.compassStore.blogInfo
      }
    },
    user: {
      get () {
        return this.compassStore.currentUser
      }
    },
    userMask: {
      get () {
        return this.compassStore.userMask
      },
      set (userMask) {
        this.compassStore.setUserMask(userMask)
      }
    }
  }
}

function getMethods () {
  return {
    wpmenu () { this.isWpMenuOpen = !this.isWpMenuOpen },
    toggleMask () {
      this.userMask = !this.userMask
    },
    confirmLogout () {
      this.logoutDialog = true
    },
    logout () {
      window.location.href = this.blogInfo.logouturl
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
