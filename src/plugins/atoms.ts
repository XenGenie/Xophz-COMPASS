import type { App } from "vue";

import { defineAsyncComponent } from "vue";

const atoms: Record<string, any> = {
  XBtn: defineAsyncComponent(() => import("../components/atoms/x-btn/x-btn.vue")),
  XIcon: defineAsyncComponent(() => import("../components/atoms/x-icon/x-icon.vue")),
  XCard: defineAsyncComponent(() => import("../components/atoms/x-card/x-card.vue")),
  XTextField: defineAsyncComponent(
    () => import("../components/atoms/x-text-field/x-text-field.vue")
  ),
  XSelect: defineAsyncComponent(() => import("../components/atoms/x-select/x-select.vue")),
  XCheckbox: defineAsyncComponent(() => import("../components/atoms/x-checkbox/x-checkbox.vue")),
  XSwitch: defineAsyncComponent(() => import("../components/atoms/x-switch/x-switch.vue")),
  XChip: defineAsyncComponent(() => import("../components/atoms/x-chip/x-chip.vue")),
  XAvatar: defineAsyncComponent(() => import("../components/atoms/x-avatar/x-avatar.vue")),
  XDivider: defineAsyncComponent(() => import("../components/atoms/x-divider/x-divider.vue")),
  XList: defineAsyncComponent(() => import("../components/atoms/x-list/x-list.vue")),
  XListItem: defineAsyncComponent(() => import("../components/atoms/x-list-item/x-list-item.vue")),
  XMenu: defineAsyncComponent(() => import("../components/atoms/x-menu/x-menu.vue")),
  XDialog: defineAsyncComponent(() => import("../components/atoms/x-dialog/x-dialog.vue")),
  XTable: defineAsyncComponent(() => import("../components/atoms/x-table/x-table.vue")),
  XSystemBar: defineAsyncComponent(
    () => import("../components/atoms/x-system-bar/x-system-bar.vue")
  ),
  XNavigationDrawer: defineAsyncComponent(
    () => import("../components/atoms/x-navigation-drawer/x-navigation-drawer.vue")
  ),
  XAppBar: defineAsyncComponent(() => import("../components/atoms/x-app-bar/x-app-bar.vue")),
  XFooter: defineAsyncComponent(() => import("../components/atoms/x-footer/x-footer.vue")),
  XBottomSheet: defineAsyncComponent(
    () => import("../components/atoms/x-bottom-sheet/x-bottom-sheet.vue")
  ),
  XMain: defineAsyncComponent(() => import("../components/atoms/x-main/x-main.vue")),
};

export default {
  install(app: App) {
    Object.entries(atoms).forEach(([name, component]) => {
      app.component(name, component);

      const kebabName = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      if (kebabName !== name.toLowerCase()) {
        app.component(kebabName, component);
      }
    });
  },
};
