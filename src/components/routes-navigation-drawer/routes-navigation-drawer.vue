<template>
  <v-navigation-drawer
    v-model="value"
    :class="{
      'routes-navigation-drawer' : true,
      'main-nav' : !isBillboardNav,
      'mr-0' : true
    }"
    :app="!isBillboardNav"
    :right="right"
    floating
    :permanent="isBillboardNav"
    :temporary="temporary"
    :dark="dark"
    :mini-variant.sync="mini"
    clipped
    fill-height
  >
    <!-- <v-list-item v-if="!isBillboardNav"> -->
    <!--   <v-list-item-avatar v-if="mini"> -->
    <!--     <img :src="currentUser.avatar"> -->
    <!--   </v-list-item-avatar> -->
    <!--   <v-list-item-avatar v-else> -->
    <!--     <v-btn -->
    <!--       icon  -->
    <!--       @click="logout" -->
    <!--     > -->
    <!--       <v-icon > -->
    <!--         fa fa-unlock -->
    <!--       </v-icon> -->
    <!--     </v-btn> -->
    <!--   </v-list-item-avatar> -->
    <!--  -->
    <!--   <v-list-item-content> -->
    <!--     <v-list-item-title class="pb-0"> -->
    <!--       {{currentUser.data.display_name}} -->
    <!--     </v-list-item-title> -->
    <!--     <v-subheader class="m-0 p-0 small--text grey--text darken-4"> -->
    <!--       <router-link to="/user/profile"> -->
    <!--       {{currentUser.data.user_login}} -->
    <!--       </router-link> -->
    <!--       <v-spacer></v-spacer> -->
    <!--     </v-subheader> -->
    <!--   </v-list-item-content> -->
    <!--   <v-list-item-avatar v-if="!mini"> -->
    <!--     <v-btn -->
    <!--       small -->
    <!--       icon -->
    <!--       @click.stop="miniMode" -->
    <!--     > -->
    <!--       <v-icon small>chevron_left</v-icon> -->
    <!--     </v-btn> -->
    <!--   </v-list-item-avatar> -->
    <!-- </v-list-item> -->
    <v-list-item
      link
      v-if="!isBillboardNav"
    >
      <v-list-item-avatar>
        <v-btn
          icon
          small
        >
          <v-avatar>
            <v-img
              :src="plugin.icon"
            />
          </v-avatar>
        </v-btn>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="pb-0">
          {{ plugin.Name }}
        </v-list-item-title>
        <v-subheader class="m-0 p-0 small--text grey--text darken-4">
          {{ $route.name.substring(0,11) + '...' }}
        </v-subheader>
      </v-list-item-content>
      <v-list-item-action v-if="!mini">
        <v-btn
          icon
          small
          @click.stop="miniMode"
        >
          <v-icon small>
            fal fa-chevron-left
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider
      class="m-2"
      v-if="!isBillboardNav"
    />
    <v-list
      dark
      :dense="dense"
      nav
    >
      <v-list-item-group>
        <v-list-item
          v-for="(child,c) in children"
          :key="c"
          link
          @click="$router.push({
            path : child.path,
            hash : (child.meta && !isBillboardNav) ? child.meta.hash : false,
          })
          "
        >
          <v-list-item-icon
            v-if="!isBillboardNav"
            :class="{
              'mini-avatar' : mini,
            }"
          >
            <v-icon
              :color="child.color"
            >
              fa fa-{{ child.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ child.name }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon
            :class="{
              'mini-avatar' : mini,
            }"
          >
            <v-icon
              v-if="isBillboardNav"
              class="route-icon"
              :color="child.color"
            >
              fa-{{ child.icon }}
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
  </v-navigation-drawer>
</template>
<script src="./routes-navigation-drawer.controller.js"></script>
<style lang="scss" src="./_routes-navigation-drawer.scss"></style>
