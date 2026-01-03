import { mapStores } from "pinia";
import { useXpStore } from "../../../../store";

export default {
  name: "xp-my-achievements-index",
  // DATA
  data,
  props: ["weekday"],
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
  partials: {},
};

function data() {
  return {
    headers: [
      {
        title: "Img",
        key: "img",
        width: "10%",
      },
      {
        title: "Achievement",
        key: "title",
        width: "50%",
      },
      {
        title: "SUN",
        key: "sun",
        width: "5%",
      },
      {
        title: "MON",
        key: "mon",
        width: "5%",
      },
      {
        title: "TUE",
        key: "tue",
        width: "5%",
      },
      {
        title: "WED",
        key: "wed",
        width: "5%",
      },
      {
        title: "THU",
        key: "thu",
        width: "5%",
      },
      {
        title: "FRI",
        key: "fri",
        width: "5%",
      },
      {
        title: "SAT",
        key: "sat",
        width: "5%",
      },
      {
        title: "XP",
        icon: "fa fa-hand-holding-magic",
        key: "xp",
        width: "5%",
        align: "end",
      },
      {
        title: "AP",
        icon: "fa fa-hand-holding-heart",
        key: "ap",
        width: "5%",
        align: "end",
      },
      {
        title: "GP",
        icon: "fa fa-hand-holding-usd",
        key: "gp",
        width: "5%",
        align: "end",
      },
      {
        title: "Complete",
        key: "actions",
        align: "center",
      },
    ] as any[],
  };
}

function getComputed() {
  return {
    ...mapStores(useXpStore),
    dialog: {
      get() {
        return (this as any).xpStore.dialog;
      },
      set(active) {
        (this as any).xpStore.setDialog(active);
      },
    },
    achievement: {
      get() {
        return (this as any).xpStore.achievement;
      },
      set(achievement) {
        (this as any).xpStore.setAchievement(achievement);
      },
    },
    achievements: {
      get(): any[] {
        const vm = this as any;
        return (vm.xpStore.achievements as any[]).filter((a) => vm.isDueToday(a.repeat_on));
      },
    },
  };
}

function getMethods() {
  return {
    isDueToday,
    checkoffAchievement,
  };

  function checkoffAchievement(achievement) {
    const vm = this as any;
    vm.achievement = achievement;
    vm.dialog = true;
  }

  function isDueToday(weekdaysDue) {
    return weekdaysDue.indexOf((this as any).weekday) !== -1;
  }
}

function getWatched() {
  return {};
}

function onBeforeCreate() {}

function onCreated(this: any) {}

function onActivated() {}

function onDeactivated() {}

function onBeforeDestory() {}

function onDestroyed() {}
