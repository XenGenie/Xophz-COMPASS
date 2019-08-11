<template>
  <v-app
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />

    <v-app-bar
      app
      clipped-left
      color="#27536B"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      &nbsp;
      <v-img
        :src="plugin.icon"
      />
      &nbsp;
      <v-toolbar-title>
        {{ $route.name }}
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          icon
          @click="true"
        >
          <v-icon />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
  </v-app>
</template>
<script src="./event-horizon.controller.js"></script>
<!-- <style lang="scss" src="./_event-horizon.scss" scoped></style> -->
