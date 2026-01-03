import type { RouteRecordRaw } from "vue-router";

const XP = () =>
  import(
    // webpackChunkName: "xp"
    "./xp"
  );

const Leaderboard = () =>
  import(
    /* webpackChunkName: "xp-leaderboard" */
    "./routes/xp-leaderboard/xp-leaderboard"
  );

const Categories = () =>
  import(
    /* webpackChunkName: "xp-categories" */
    "./routes/xp-categories/xp-categories"
  );

const CategoriesIndex = () =>
  import(
    /* webpackChunkName: "xp-categories-index" */
    "./routes/xp-categories/xp-categories-index"
  );

const CategoriesGrid = () =>
  import(
    /* webpackChunkName: "xp-categories-index" */
    "./routes/xp-categories/xp-categories-index"
  );

const Jobs = () =>
  import(
    /* webpackChunkName: "xp-jobs" */
    "./routes/xp-jobs/xp-jobs"
  );

// const Settings = () => import(
//     #<{(| webpackChunkName: "xp-categories" |)}>#
//     './routes/xp-settings/xp-settings'
// )

const MyAbilities = () =>
  import(
    /* webpackChunkName: "xp-categories" */
    "./routes/xp-my-abilities/xp-my-abilities"
  );
const MyAbilitiesIndex = () =>
  import(
    /* webpackChunkName: "xp-my-ach-i" */
    "./routes/xp-my-abilities/routes/xp-my-abilities-index/xp-my-abilities-index"
  );
const MyAbilitiesGrid = () =>
  import(
    /* webpackChunkName: "xp-my-ach-g" */
    "./routes/xp-my-abilities/routes/xp-my-abilities-grid/xp-my-abilities-grid"
  );

const MyAchievements = () =>
  import(
    /* webpackChunkName: "xp-my-achievements" */
    "./routes/xp-my-achievements/xp-my-achievements"
  );
const MyAchievementsIndex = () =>
  import(
    /* webpackChunkName: "xp-my-ach-i" */
    "./routes/xp-my-achievements/routes/xp-my-achievements-index/xp-my-achievements-index"
  );
const MyAchievementsGrid = () =>
  import(
    /* webpackChunkName: "xp-my-ach-g" */
    "./routes/xp-my-achievements/routes/xp-my-achievements-grid/xp-my-achievements-grid"
  );

const MyAccessories = () =>
  import(
    /* webpackChunkName: "xp-accessories" */
    "./routes/xp-my-accessories/xp-my-accessories"
  );
const MyAccessoriesIndex = () =>
  import(
    /* webpackChunkName: "xp-my-ach-i" */
    "./routes/xp-my-accessories/routes/xp-my-accessories-index/xp-my-accessories-index"
  );

const MyAccessoriesGrid = () =>
  import(
    /* webpackChunkName: "xp-my-ach-g" */
    "./routes/xp-my-accessories/routes/xp-my-accessories-grid/xp-my-accessories-grid"
  );
const MyConfig = () =>
  import(
    /* webpackChunkName: "xp-my-ach-g" */
    "./routes/xp-my-config/xp-my-config"
  );
const MyConfigProfile = () =>
  import(
    /* webpackChunkName: "xp-my-ach-g" */
    "./routes/xp-my-config/routes/xp-my-config-profile/xp-my-config-profile"
  );

const LevelUpScreen = () =>
  import(
    /* webpackChunkName: "xp-level-up-screen" */
    "./routes/xp-level-up-screen/xp-level-up-screen"
  );
const LevelUpScreenGainedXP = () =>
  import(
    /* webpackChunkName: "xp-level-up-screen-xp" */
    "./routes/xp-level-up-screen/routes/xp-level-up-screen-gained-xp/xp-level-up-screen-gained-xp"
  );
const LevelUpScreenGainedGP = () =>
  import(
    /* webpackChunkName: "xp-level-up-screen-gp" */
    "./routes/xp-level-up-screen/routes/xp-level-up-screen-gained-gp/xp-level-up-screen-gained-gp"
  );

export default {
  path: "/xp",
  name: "xophz-compass-xp",
  component: XP,
  children: [
    {
      path: "/xp",
      name: "XP Leaderboard",
      meta: {
        icon: "fal fa-users",
        roles: ["achiever"],
      },
      component: Leaderboard,
    },
    {
      path: "/xp/categories/index",
      name: "Job Categories",
      meta: { icon: "fa fa-hat-wizard" },
      component: Categories,
      children: [
        {
          name: "Job Categories Index",
          path: "/xp/categories/index",
          component: CategoriesIndex,
        },
        {
          name: "Job Categories Grid",
          path: "/xp/categories/grid",
          component: CategoriesGrid,
        },
      ],
    },
    {
      path: "/xp/goals",
      name: "Jobs",
      meta: { icon: "fa fa-wand-magic" },
      component: Jobs,
    },
    {
      path: "/xp/goals",
      name: "Unlockable Abilities",
      meta: { icon: "fa fa-book-spells" },
      component: Jobs,
    },
    // ///////// ACHIEVER ROUTES
    {
      path: "/xp/achievement/complete",
      name: "Level Up Screen",
      meta: {
        icon: "fa fa-hand-holding-usd",
      },
      component: LevelUpScreen,
      children: [
        {
          name: "Level Up Screen Gained XP",
          path: "/xp/achievement/complete",
          component: LevelUpScreenGainedXP,
        },
        {
          name: "Level Up Screen Gained GP",
          path: "/xp/achievement/complete/gp",
          component: LevelUpScreenGainedGP,
        },
      ],
    },
    {
      path: "/xp/achievements/grid",
      name: "My Achievements",
      meta: {
        hash: "xp-my-achievements",
        icon: "fa fa-hand-holding-magic",
        color: "blue",
        roles: ["achiever"],
      },
      component: MyAchievements,
      children: [
        {
          name: "My Achievements Grid",
          path: "/xp/achievements/grid",
          component: MyAchievementsGrid,
        },
        {
          name: "My Achievements Index",
          path: "/xp/achievements/index",
          component: MyAchievementsIndex,
        },
      ],
    },
    {
      path: "/xp/abilities",
      name: "My Abilities",
      meta: {
        hash: "xp-my-abilities",
        color: "red",
        icon: "fa fa-hand-holding-heart",
        roles: "achiever",
      },
      component: MyAbilities,
      children: [
        {
          name: "My Abilities Grid",
          path: "/xp/abilities",
          component: MyAbilitiesGrid,
        },
        {
          name: "My Abilities Index",
          path: "/xp/abilities/index",
          component: MyAbilitiesIndex,
        },
      ],
    },
    {
      path: "/xp/accessories",
      name: "My Accessories",
      meta: {
        hash: "xp-my-accessories",
        color: "orange",
        icon: "fa fa-hand-holding-usd",
        roles: "achiever",
      },
      component: MyAccessories,
      children: [
        {
          name: "My Accessories Grid",
          path: "/xp/accessories",
          component: MyAccessoriesGrid,
        },
        {
          name: "My Accessories Index",
          path: "/xp/accessories/index",
          component: MyAccessoriesIndex,
        },
      ],
    },
    {
      path: "/xp/user",
      name: "My Account",
      meta: {
        color: "green",
        hash: "xp-my-config",
        icon: "fa fa-hand-holding-seedling",
        roles: "achiever",
      },
      component: MyConfig,
      children: [
        {
          name: "Timeline ",
          path: "/xp/user",
          meta: {
            hash: "xp-my-accessories",
            icon: "fa fa-clock",
            roles: "achiever",
          },
          component: MyConfigProfile,
        },
        {
          name: "Profile",
          path: "/xp/user/settings",
          meta: {
            hash: "xp-my-accessories",
            icon: "fa fa-clock",
            roles: "achiever",
          },
          component: MyConfigProfile,
        },
        {
          name: "Settings",
          path: "/xp/user/settings",
          meta: {
            hash: "xp-my-accessories",
            icon: "fa fa-clock",
            roles: "achiever",
          },
          component: MyConfigProfile,
        },
        // {
        //   name : 'My Profile ',
        //   path : '/xp/user/timeline',
        //   component : MyConfigProfile
        // }
      ],
    },
    // {
    //   path: '/xp/config',
    //   name: 'X Pendium',
    //   meta : { icon : 'fal fa-stars' },
    //   component: Settings
    // }
  ],
} as RouteRecordRaw;
