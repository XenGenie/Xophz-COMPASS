import { defineStore } from "pinia";
import Api from "../compass.api";

export const useCompassStore = defineStore("compass", {
  state: () => ({
    blogInfo: {
      name: "",
      description: "",
      url: "",
      version: "",
      logouturl: "",
    },
    pluginList: [] as any[],
    currentPlugin: {},
    isWpMenuOpen: localStorage.isWpMenuOpen === "1",
    currentUser: {
      data: {
        user_nicename: "",
      },
      caps: {
        administrator: false,
      },
      roles: [],
    },
    isAppBarOff: false,
    isBillboardOff: false,
    billboard: {
      h1: "",
      chips: [
        {
          icon: "fal fa-star",
          text: "Premium",
          color: "orange",
        },
        {
          icon: "fal-home",
          text: "Something Else",
          color: "red",
        },
      ],
    },
    stepper: 1,
    activePlugin: {
      Name: "",
      Description: "",
      TextDomain: "",
    },
    userMask: false,
    isRoutesNavActive: localStorage.isRoutesNavActive === "1",
    isAppNavDrawerOpen: false,
    isAppNavDrawerMini: true,
    isBillboardNavDrawerMini: false,
    bottomSheet: false,
    loading: false,
    usersErrors: null as any,
    appBarOrder: 0,
  }),

  actions: {
    setUserMask(userMask) {
      this.userMask = userMask;
    },
    setLoading(loading) {
      this.loading = loading;
    },
    setStepper(stepper: number) {
      this.stepper = stepper;
    },
    turnOffAppBar(isOff: boolean) {
      this.isAppBarOff = isOff;
    },
    turnOffBillboard(isOff: boolean) {
      this.isBillboardOff = isOff;
    },
    setBillboard(billboard: any) {
      this.billboard = billboard;
    },
    setWpMenu(isOpen: boolean) {
      this.isWpMenuOpen = isOpen;
      localStorage.isWpMenuOpen = isOpen ? "1" : "";
    },
    setBottomSheet(active: boolean) {
      this.bottomSheet = active;
    },
    toggleNav(active) {
      this.isRoutesNavActive = active;
      localStorage.isRoutesNavActive = active ? 1 : 0;
    },
    setIsAppNavDrawerOpen(isOpen: boolean) {
      this.isAppNavDrawerOpen = isOpen;
    },
    setIsAppNavDrawerMini(isMini: boolean) {
      this.isAppNavDrawerMini = isMini;
    },
    setIsBillboardNavDrawerMini(isMini: boolean) {
      this.isBillboardNavDrawerMini = isMini;
    },
    setActivePlugin(plugin: any) {
      this.activePlugin = plugin;
    },
    setBillboardChips(payload: any) {
      this.billboard.chips = payload;
    },
    async getCurrentUser() {
      try {
        const response = await Api().getCurrentUser();
        this.blogInfo = response.data.blog_info;
        this.currentUser = response.data.current_user;
      } catch (response) {
        this.loading = false;
        this.usersErrors = response;
      }
    },
    async loadPlugins() {
      try {
        const response = await Api().getPlugins();
        this.pluginList = response.data;
        this.loading = false;
      } catch (response) {
        this.loading = false;
        this.usersErrors = response;
      }
    },
    async activatePlugin(plugin) {
      try {
        await Api().activatePlugin({ plugin: plugin.TextDomain });
        const foundIndex = this.pluginList.findIndex((x) => x.TextDomain === plugin.TextDomain);
        if (foundIndex !== -1) {
          this.pluginList[foundIndex] = { ...plugin, isActivated: true };
        }
        this.loading = false;
      } catch (response) {
        this.loading = false;
        this.usersErrors = response;
      }
    },
    async deactivatePlugin(plugin) {
      try {
        await Api().deactivatePlugin({ plugin: plugin.TextDomain });
        const foundIndex = this.pluginList.findIndex((x) => x.TextDomain === plugin.TextDomain);
        if (foundIndex !== -1) {
          this.pluginList[foundIndex] = { ...plugin, isActivated: false };
        }
        this.loading = false;
      } catch (response) {
        this.loading = false;
        this.usersErrors = response;
      }
    },
    toggleAppBarOrder() {
      this.appBarOrder = this.appBarOrder === 0 ? -1 : 0;
    },
  },
});
