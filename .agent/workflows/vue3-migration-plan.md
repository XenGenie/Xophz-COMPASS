# Implementation Plan - Vue 3 Route Migration

This plan outlines the systematic migration of all remaining routes to Vue 3 (Vuetify 3 + Pinia) while maintaining the modular "per-plugin" feel the user requested.

## Layout Strategy
- **Root Shell (`index.vue`)**: Maintains the single `<v-app>` required by Vuetify 3. It will contain a "thin" global app bar for system-wide controls (WP Menu, Global Search, User Avatar).
- **Route Layouts**: Each route component (e.g., `silver-arrow.vue`) will act as the "App Container" for that specific plugin. It will use `<v-main>` and its own localized `<v-app-bar>` to keep the unique branding/colors and tools specific to that plugin.
- **State Management**: Convert all remaining `$store` (Vuex) calls to Pinia using the `useCompassStore` or plugin-specific stores.
- **Component Refactoring**: Update legacy Vuetify 2 props (e.g., `dark`, `clipped-left`, `app`) to Vuetify 3 equivalents (e.g., `theme="dark"`, `density="compact"`).

## Migration Checklist

### Core Layouts (In Progress)
- [x] `silver-arrow`: Updated controller and template to premium layout.
- [x] `bomb-bag`: Updated controller and template.
- [ ] `gale-boomerang`: Mid-migration, needs cleanup.
- [ ] `pegasus-boots`: Controller updated, template pending.
- [ ] `bugnet`: Controller updated, template pending.

### Utility Routes
- [ ] `moving-castle`
- [ ] `magic-cloak`
- [ ] `enchiridion`
- [ ] `event-horizon`
- [ ] `thors-hammer`
- [ ] `golden-keys`
- [ ] `lit-lamp`
- [ ] `lead-magnet`
- [ ] `treasure-map`
- [ ] `enchanted-mirror`
- [ ] `titans-mitt`
- [ ] `midnight-nerd`
- [ ] `phantom-zone`
- [ ] `pixie-dust`
- [ ] `mirror-shield`
- [ ] `treasure-trove`
- [ ] `magic-wand`

### Complex Modules
- [ ] `xp`: Comprehensive migration of sub-routes and leaderboard logic.
- [ ] `bazaar`: Migration of shop, orders, and sales dashboards.
- [ ] `post-digger`: Cleanup and layout fix.

## Premium Aesthetics
- Use `backdrop-blur` and glassmorphism for all headers.
- Consistent color palettes tied to the plugin's primary theme.
- Improved spacing and typography using Tailwind classes.
