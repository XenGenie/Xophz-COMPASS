<template>
  <v-main
    :id="$options.name"
    :class="$options.name"
  >
    <v-app-bar
      color="orange"
      elevation="2"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <v-icon icon="fa-hand-holding-usd" />
      <v-toolbar-title>
        My Accessories
      </v-toolbar-title>
      <v-spacer />

      <v-menu
        location="bottom end"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon="fal fa-search"
            variant="text"
            size="small"
            v-bind="props"
          />
        </template>
        <search
          :xp="false"
          :ap="false"
          dispatch="xp/SEARCH_ACCESSORIES"
        />
      </v-menu>

      <v-btn
        variant="text"
        @click="true"
      >
        GP
        {{ $filters.currency(user.gp, 0, '') }}
        <v-icon
          icon="fa fa-coins"
          size="small"
          end
          color="orange-lighten-4"
        />
      </v-btn>
    </v-app-bar>
    <v-container
      fluid
      grid-list-md
      pt-3
    >
      <router-view />
    </v-container>
  </v-main>
</template>
<script lang="ts" src="./xp-my-accessories.controller.ts"></script>
<style lang="scss" src="./_xp-my-accessories.scss"></style>
