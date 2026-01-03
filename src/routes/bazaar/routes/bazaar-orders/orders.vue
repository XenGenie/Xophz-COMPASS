<template>
  <v-main class="orders">
    <v-app-bar color="orange">
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      &nbsp;<v-img
        :src="plugin.icon"
        max-width="40"
      />&nbsp;
      <v-spacer />
      <v-avatar>
        <v-icon
          class="m-1"
          icon="fas fa-cash-register"
        />
      </v-avatar>
      <v-toolbar-title>
        Customer Orders
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="d-none d-md-flex">
        <v-btn
          icon
          @click="showSearchDialog"
        >
          <v-icon icon="fas fa-search" />
        </v-btn>
        <v-btn
          icon
          @click="isViewGrid = !isViewGrid"
        >
          <v-icon
            v-if="!isViewGrid"
            icon="fas fa-list"
          />
          <v-icon
            v-else
            icon="fas fa-th-large"
          />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-container fluid>
      <v-row justify="center">
        <v-col>
          <!-- Pagination should probably be outside router-view or handled differently. 
               Original had it here. Vuetify 3 v-pagination is fine. -->
          <v-pagination
            v-if="total && limit"
            theme="dark"
            v-model="page"
            :length="Math.ceil(total/limit)"
          />
          <router-view />
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
  </v-main>
</template>
<script lang="ts" src="./orders.controller.ts"></script>
<style lang="scss" src="./_orders.scss"></style>
