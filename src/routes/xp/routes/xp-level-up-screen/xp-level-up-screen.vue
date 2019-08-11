<template>
  <v-app
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <!-- <v-navigation-drawer  -->
    <!--   app -->
    <!--   absolute  -->
    <!--   v-model="isNavDrawerOpen" -->
    <!-- > -->
    <!--   <v-list></v-list> -->
    <!-- </v-navigation-drawer> -->
    <v-app-bar
      color="green darken-1"
      clipped-left
      app
    >
      <v-btn
        icon
        @click="isRoutesNavActive = !isRoutesNavActive"
      >
        <v-img :src="achievement.img" />
      </v-btn>
      <v-toolbar-title>
        {{ achievement.title }}
        completed by
        {{ currentUser.data.user_login }}!
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click="true">
          <!-- <v-icon>search</v-icon> -->
          LvL {{ level }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view :user="user" />
    </v-content>
  </v-app>
</template>
<script src="./xp-level-up-screen.controller.js"></script>
<!-- <style lang="scss" src="./_xp-level-up-screen.scss"></style> -->
