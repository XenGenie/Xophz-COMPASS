<template>
  <v-app
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <v-app-bar
      app
      clipped-left
      color="#5E73DD"
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
          <v-icon>
            fal fa-search
          </v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <v-main>
      <router-view />
    </v-main>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
  </v-app>
</template>
<script lang="ts" src="./treasure-trove.controller.ts"></script>
<style lang="scss" src="./_treasure-trove.scss" scoped></style>
