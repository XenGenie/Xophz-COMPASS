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
      color="#ED55A9"
    >
      <v-app-bar-nav-icon
        @click.stop.prevent="toggleAppNavDrawer"
        id="navMenuBtn"
      />
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
      <v-container
        fluid
        fill-height
      >
        <v-layout justify-center>
          <v-flex>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
  </v-app>
</template>
<script src="./bomb-bag.controller.js"></script>
<style lang="scss" src="./_bomb-bag.scss"></style>
