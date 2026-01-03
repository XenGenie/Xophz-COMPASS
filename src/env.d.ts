/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import type { GlobalComponents } from "vuetify";

declare module "vuetify" {
  export interface InternalDataTableHeader {
    icon?: string;
  }
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents extends GlobalComponents {
    Billboard: typeof import("./components/billboard/billboard.vue")["default"];
    NavDrawer: typeof import("./components/routes-navigation-drawer/routes-navigation-drawer.vue")["default"];
    AnimatedNumber: typeof import("./components/animated-number/animated-number.vue")["default"];
  }
}
