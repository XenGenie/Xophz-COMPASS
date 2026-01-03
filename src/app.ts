import { createApp } from "vue";
import { createPinia } from "pinia";
import _ from "lodash";

// Import app components
import Billboard from "./components/billboard/billboard.vue";
import NavDrawer from "./components/routes-navigation-drawer/routes-navigation-drawer.vue";
import AnimatedNumber from "./components/animated-number/animated-number.vue";

// Import plugin instances
import vuetify from "./plugins/vuetify";
import router from "./app.router";
import App from "./index.vue";

import menuFix from "./utils/admin_menu_fix";
import "@fortawesome/fontawesome-pro/css/all.min.css";
import "@fortawesome/fontawesome-pro/css/duotone.min.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "./styles/tailwind.css";

const pinia = createPinia();

// Filters replacement
const currencyFilter = (value: any, decimals: number, symbol?: string): string | boolean => {
  if (!value) return false;
  let isK = "";
  let currency = value;
  if (typeof currency !== "number") {
    if (currency.toString().charAt(currency.toString().length - 1) === "k") {
      isK = "k";
      currency = currency.toString().replace("k", "");
    }
  }
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
  const num = formatter.format(Number(currency));
  if (typeof symbol !== "undefined") return (num + isK).replace("$", symbol);
  return num + isK;
};

const kFormatterFilter = (num: number): string | number =>
  Math.abs(num) > 999
    ? `${Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1))}k`
    : Math.sign(num) * Math.abs(num);

// Initialize app
const mountApp = () => {
  const el = document.querySelector("#app");
  if (el) {
    const app = createApp(App);

    app.use(pinia);
    app.use(router);
    app.use(vuetify);

    // Global Properties
    app.config.globalProperties.lodash = _;
    app.config.globalProperties._ = _;
    app.config.globalProperties.$filters = {
      currency: currencyFilter,
      kFormatter: kFormatterFilter,
    };

    // Global Components
    app.component("animated-number", AnimatedNumber);
    app.component("Billboard", Billboard);
    app.component("NavDrawer", NavDrawer);

    app.mount(el);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}

menuFix("xophz-compass");
