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
      color="#5E73DD"
    >
      <v-btn
        icon
        @click="isRoutesNavActive = !isRoutesNavActive"
      >
        <i class="fa fa-bars fa-2x" />
      </v-btn>
      &nbsp;<v-img :src="plugin.icon" />&nbsp;
      <v-spacer />
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
<script lang="ts" src="./magic-wand.controller.ts"></script>
<style lang="scss" src="./_magic-wand.scss" scoped></style>
