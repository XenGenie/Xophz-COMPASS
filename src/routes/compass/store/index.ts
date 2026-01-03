import { defineStore } from 'pinia'
import Api from '../compass.api'

export const useCompassStore = defineStore('compass', {
  state: () => ({
    blogInfo: {
      name: '',
      description: '',
      url: '',
      version: '',
      logouturl: ''
    },
    pluginList: [],
    currentPlugin: {},
    isWpMenuOpen: localStorage.isWpMenuOpen === '1',
    currentUser: {
      data: {
        user_nicename: ''
      },
      caps: {
        administrator: false
      },
      roles: []
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
    isRoutesNavActive: localStorage.isRoutesNavActive === '1',
    isAppNavDrawerOpen: false,
    isAppNavDrawerMini: true,
    isBillboardNavDrawerMini: false,
    bottomSheet: false,
    loading: false,
    usersErrors: null
  }),

  actions: {
    setUserMask(userMask) {
      this.userMask = userMask
    },
    setLoading(loading) {
      this.loading = loading
    },
    setStepper(stepper) {
      this.stepper = stepper
    },
    turnOffAppBar(isOff) {
      this.isAppBarOff = isOff
    },
    turnOffBillboard(isOff) {
      this.isBillboardOff = isOff
    },
    setBillboard(billboard) {
      this.billboard = billboard
    },
    setWpMenu(isOpen) {
      this.isWpMenuOpen = isOpen
      localStorage.isWpMenuOpen = isOpen ? 1 : ''
    },
    setBottomSheet(active) {
      this.bottomSheet = active
    },
    toggleNav(active) {
      this.isRoutesNavActive = active
      localStorage.isRoutesNavActive = active ? 1 : 0
    },
    setIsAppNavDrawerOpen(isOpen) {
      this.isAppNavDrawerOpen = isOpen
    },
    setIsAppNavDrawerMini(isMini) {
      this.isAppNavDrawerMini = isMini
    },
    setIsBillboardNavDrawerMini(isMini) {
      this.isBillboardNavDrawerMini = isMini
    },
    setActivePlugin(plugin) {
      this.activePlugin = plugin
    },
    setBillboardChips(payload) {
      this.billboard.chips = payload
    },
    async getCurrentUser() {
      try {
        const response = await Api().getCurrentUser()
        this.blogInfo = response.data.blog_info
        this.currentUser = response.data.current_user
      } catch (response) {
        this.loading = false
        this.usersErrors = response
      }
    },
    async loadPlugins() {
      try {
        const response = await Api().getPlugins()
        this.pluginList = response.data
        this.loading = false
      } catch (response) {
        this.loading = false
        this.usersErrors = response
      }
    },
    async activatePlugin(plugin) {
      try {
        await Api().activatePlugin({ plugin: plugin.TextDomain })
        const foundIndex = this.pluginList.findIndex(x => x.TextDomain === plugin.TextDomain)
        if (foundIndex !== -1) {
          this.pluginList[foundIndex] = { ...plugin, isActivated: true }
        }
        this.loading = false
      } catch (response) {
        this.loading = false
        this.usersErrors = response
      }
    },
    async deactivatePlugin(plugin) {
      try {
        await Api().deactivatePlugin({ plugin: plugin.TextDomain })
        const foundIndex = this.pluginList.findIndex(x => x.TextDomain === plugin.TextDomain)
        if (foundIndex !== -1) {
          this.pluginList[foundIndex] = { ...plugin, isActivated: false }
        }
        this.loading = false
      } catch (response) {
        this.loading = false
        this.usersErrors = response
      }
    }
  }
})
