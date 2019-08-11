<template>
  <div class="orders">
    <v-app dark>
      <nav-drawer v-model="isAppNavDrawerOpen" />
      <v-app-bar
        clipped-left
        app
        color="orange"
      >
        <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
        &nbsp;<v-img :src="plugin.icon" />&nbsp;
        <v-spacer />
        <v-avatar>
          <v-icon class="m-1">
            fa fa-cash-register
          </v-icon>
        </v-avatar>
        <v-toolbar-title>
          Customer Orders
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            icon
            @click="showSearchDialog"
          >
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="isViewGrid = !isViewGrid"
          >
            <i
              v-if="!isViewGrid"
              class="fa fa-list"
            />
            <i
              v-else
              class="fa fa-th-large"
            />
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
              <v-pagination
                dark
                v-model="page"
                :length="Math.ceil(total/limit)"
              />
              <router-view />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <!-- <v-footer> -->
      <!-- </v-footer> -->
    </v-app>
  </div>
</template>
<script src="./orders.controller.js"></script>
<style lang="scss" src="./_orders.scss"></style>
