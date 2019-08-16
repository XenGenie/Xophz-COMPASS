<template>
  <v-content
    :id="$options.name"
    :class="$options.name"
  >
    <v-app-bar
      color="red darken-4"
      clipped-left
      app
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <v-icon>
        fa-hand-holding-heart
      </v-icon>
      <v-toolbar-title>
        My Abilities
      </v-toolbar-title>
      <v-spacer />
      <v-btn-toggle
        color=""
        v-model="toggleMultiple"
        multiple
      >
        <v-btn>
          Day
        </v-btn>
        <v-btn>
          Week
        </v-btn>
        <v-btn>
          Month
        </v-btn>
        <v-btn>
          Year
        </v-btn>
        <v-btn>
          All Time
        </v-btn>
      </v-btn-toggle>
      <v-toolbar-items
        dark
        class="hidden-sm-and-down"
      >
        <v-menu
          offset-x
          left
          :close-on-click="false"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              small
              v-on="on"
            >
              <v-icon small>
                fal fa-search
              </v-icon>
            </v-btn>
          </template>
          <search
            :xp="false"
            :gp="false"
            dispatch="xp/SEARCH_ABILITIES"
          />
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-container
      fluid
      grid-list-md
      pt-3
    >
      <router-view />
    </v-container>
  </v-content>
</template>
<script src="./xp-my-abilities.controller.js"></script>
<style lang="scss" src="./_xp-my-abilities.scss"></style>
