<template>
  <v-content
    :id="$options.name"
    :class="$options.name"
  >
    <v-app-bar
      clipped-left
      app
      color="orange"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <v-icon>
        fa-hand-holding-usd
      </v-icon>
      <v-toolbar-title>
        My Accessories
      </v-toolbar-title>
      <v-spacer />
      <!-- <search :xp="false" :ap="false"></search> -->
      <v-toolbar-items>
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
            :ap="false"
            dispatch="xp/SEARCH_ACCESSORIES"
          />
        </v-menu>
        <v-btn
          text
          @click="true"
        >
          GP
          {{ user.gp|currency(0,'') }}
          <v-icon
            right
            small
            color="orange lighten-4"
          >
            fa fa-coins
          </v-icon>
        </v-btn>
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
<script src="./xp-my-accessories.controller.js"></script>
<style lang="scss" src="./_xp-my-accessories.scss"></style>
