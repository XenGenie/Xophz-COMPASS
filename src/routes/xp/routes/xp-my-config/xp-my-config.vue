<template>
  <v-app
    id="xp-my-config"
    class="xp-my-config"
    dark
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <v-app-bar
      clipped-left
      clipped-right
      app
      color="green"
    >
      <v-btn
        icon
        @click="isRoutesNavActive = !isRoutesNavActive"
      >
        <i class="fa fa-hand-holding-seedling fa-2x" />
      </v-btn>
      <v-toolbar-title>
        My Config
      </v-toolbar-title>
      <search />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-spacer />
      </v-toolbar-items>
    </v-app-bar>
    <!-- <v-navigation-drawer  -->
    <!--   app -->
    <!--   right -->
    <!--   absolute  -->
    <!-- > -->
    <!--   <v-list> -->
    <!--   </v-list> -->
    <!-- </v-navigation-drawer> -->
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout justify-center>
          <v-flex xs12>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
  </v-app>
</template>
<script src="./xp-my-config.controller.js"></script>
<!-- <style lang="scss" src="./_xp-my-config.scss"></style> -->
