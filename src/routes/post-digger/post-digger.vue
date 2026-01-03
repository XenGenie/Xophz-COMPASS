<template lang="html">
  <v-app
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <v-app-bar
      app
      clipped-left
      color="#0680AE"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      &nbsp;
      <v-img :src="plugin.icon" />
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
    <v-main>
      <router-view />
    </v-main>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
  </v-app>
</template>

<script lang="ts" src="./post-digger.controller.ts"></script>
<style lang="scss" src="./_post-digger.scss" scoped></style>
