<template>
  <v-main
    :id="$options.name"
    :class="$options.name"
    theme="dark"
  >
    <v-app-bar color="green">
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      &nbsp;
      <v-avatar>
        <v-icon class="m-1">
          fa fa-money-bill-wave
        </v-icon>
      </v-avatar>
      &nbsp;
      <v-toolbar-title>
        Sales Reports
      </v-toolbar-title>
    </v-app-bar>
    <v-container fluid>
      <router-view />
    </v-container>
    <v-dialog
      v-model="modal"
      width="300px"
    >
      <!-- Vuetify 3 v-date-picker is different. Using standard wrapper if needed or new component -->
      <v-row justify="center">
        <v-date-picker
          v-model="date"
          multiple
        />
      </v-row>
    </v-dialog>
    <filter-dialog />
  </v-main>
</template>
<script lang="ts" src="./bazaar-sales.controller.ts"></script>
<style lang="scss" src="./_bazaar-sales.scss" scoped></style>
