<template>
  <v-content
    id="xp-my-config"
    class="xp-my-config"
  >
    <v-app-bar
      clipped-left
      clipped-right
      app
      color="green"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <!-- <v-icon> -->
      <!--   fa-hand-holding-seedling -->
      <!-- </v-icon> -->
      <v-toolbar-title>
        My Config
      </v-toolbar-title>
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
</template>
<script src="./xp-my-config.controller.js"></script>
<!-- <style lang="scss" src="./_xp-my-config.scss"></style> -->
