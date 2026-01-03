<template>
  <div
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <v-app-bar
      app
      clipped-left
      color="#08E092"
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
  </div>
</template>
<script lang="ts" src="./titans-mitt.controller.ts"></script>
<style lang="scss" src="./_titans-mitt.scss" scoped></style>
