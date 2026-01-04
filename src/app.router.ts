import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

// Helper to create lazy route loader
const lazyRoute =
  (path: string): (() => Promise<{ default: RouteRecordRaw }>) =>
  () =>
    import(`./routes/${path}/${path}.routes.ts`);

// Only compass is loaded immediately since it's the default route
import compass from "./routes/compass/compass.routes";

// All other routes are dynamically imported when first accessed
const lazyRouteConfigs = [
  { loader: lazyRoute("silver-arrow"), path: "/silver-arrow" },
  { loader: lazyRoute("bazaar"), path: "/bazaar" },
  { loader: lazyRoute("bomb-bag"), path: "/bomb-bag" },
  { loader: lazyRoute("gale-boomerang"), path: "/gale-boomerang" },
  { loader: lazyRoute("pegasus-boots"), path: "/pegasus-boots" },
  { loader: lazyRoute("bugnet"), path: "/bugnet" },
  { loader: lazyRoute("moving-castle"), path: "/moving-castle" },
  { loader: lazyRoute("magic-cloak"), path: "/magic-cloak" },
  { loader: lazyRoute("enchiridion"), path: "/enchiridion" },
  { loader: lazyRoute("event-horizon"), path: "/event-horizon" },
  { loader: lazyRoute("thors-hammer"), path: "/thors-hammer" },
  { loader: lazyRoute("golden-keys"), path: "/golden-keys" },
  { loader: lazyRoute("lit-lamp"), path: "/lit-lamp" },
  { loader: lazyRoute("lead-magnet"), path: "/lead-magnet" },
  { loader: lazyRoute("treasure-map"), path: "/treasure-map" },
  { loader: lazyRoute("enchanted-mirror"), path: "/enchanted-mirror" },
  { loader: lazyRoute("titans-mitt"), path: "/titans-mitt" },
  { loader: lazyRoute("midnight-nerd"), path: "/midnight-nerd" },
  { loader: lazyRoute("quests"), path: "/quests" },
  { loader: lazyRoute("phantom-zone"), path: "/phantom-zone" },
  { loader: lazyRoute("pixie-dust"), path: "/pixie-dust" },
  { loader: lazyRoute("post-digger"), path: "/post-digger" },
  { loader: lazyRoute("mirror-shield"), path: "/mirror-shield" },
  { loader: lazyRoute("treasure-trove"), path: "/treasure-trove" },
  { loader: lazyRoute("magic-wand"), path: "/magic-wand" },
  { loader: lazyRoute("xp"), path: "/xp" },
];

// Create placeholder routes that load the real config on first access
const createLazyRoutes = (): RouteRecordRaw[] => {
  return lazyRouteConfigs.map(({ loader, path }) => {
    const name = `lazy-${path}`;
    return {
      path,
      name,
      component: () =>
        import("@/components/organisms/layouts/x-compass-layout/x-compass-layout.organism.vue"),
      beforeEnter: async (_to, _from, next) => {
        try {
          console.log(`[Router] Loading lazy route for ${path}...`);
          const routeModule = await loader();
          const routeConfig = routeModule.default;

          // Remove this lazy placeholder before adding the real route
          router.removeRoute(name);

          // Add the full route to the router
          router.addRoute("app-root", routeConfig);

          // Retry navigation with the now-registered route
          next({ ..._to, replace: true });
        } catch (e) {
          console.error(`Failed to load route ${path}:`, e);
          next("/");
        }
      },
    };
  });
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "app-root",
      component: () =>
        import("@/components/organisms/layouts/x-compass-layout/x-compass-layout.organism.vue"),
      children: [
        compass,
        ...createLazyRoutes(),
        {
          path: "/xophz-compass",
          redirect: "/",
        },
      ],
    },
  ],
  scrollBehavior(to: any) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 98,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
