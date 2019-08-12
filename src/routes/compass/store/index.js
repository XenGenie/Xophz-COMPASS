import actions from './actions'
import mutations from './mutations'

export default {
  actions,
  mutations,
  namespaced: true,
  state: {
    blogInfo: {
      name: '',
      description: '',
      url: '',
      version: ''
    },
    pluginList: [],
    currentPlugin: {},
    isWpMenuOpen: localStorage.isWpMenuOpen === true,
    currentUser: {
      data: {
        user_nicename: ''
      },
      caps: {
        administrator: false
      }
    },
    isAppBarOff: false,
    isBillboardOff: false,
    billboard: {
      h1: '',
      chips: [
        {
          icon: 'fal fa-star',
          text: 'Premium',
          color: 'orange'
        },
        {
          icon: 'fal-home',
          text: 'Something Else',
          color: 'red'
        }
      ]
    },
    stepper: 1,
    activePlugin: {
      Name: '',
      Description: '',
      TextDomain: ''
    },
    userMask: false,
    isAppNavDrawerOpen: true,
    isAppNavDrawerMini: true,
    isBillboardNavDrawerMini: false,
    bottomSheet: false,
    loading: false
  }
}
