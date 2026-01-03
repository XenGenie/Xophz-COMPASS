<template>
  <div
    :id="$options.name"
    :class="$options.name"
    theme="dark"
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <v-app-bar color="green-darken-1">
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
      <v-toolbar-items class="hidden sm:flex">
        <v-btn @click="true">
          <!-- <v-icon>search</v-icon> -->
          LvL {{ level }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view :user="user" />
    </v-main>
  </div>
</template>
<script lang="ts" src="./xp-level-up-screen.controller.ts"></script>
<!-- <style lang="scss" src="./_xp-level-up-screen.scss"></style> -->
