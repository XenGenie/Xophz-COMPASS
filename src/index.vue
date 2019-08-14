<template>
  <div id="app">
    <v-footer
      dark
      class="breadcrumbs p-1"
    >
      <v-layout
        justify-center
        align-center
        fill-height
      >
        <v-flex shrink>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                class="ml-1 mr-2"
                small
                @click="showBottomSheet"
              >
                <v-icon small>
                  fad fa-compass
                </v-icon>
                &nbsp;COMPASS
              </v-btn>
            </template>
            <span>Navigate COMPASS</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                small
                v-on="on"
                @click="goHome"
              >
                <v-icon
                  small
                >
                  fad fa-home
                </v-icon>
                &nbsp;
                {{ blogInfo.name }}
              </v-btn>
            </template>
            <span>Go to Home Page</span>
          </v-tooltip>
        </v-flex>
        <v-flex>
          <v-breadcrumbs
            :items="breadtrail"
            divider="/"
            class="p-0 pl-3 pt-1"
          />
        </v-flex>
        <v-spacer />
        <v-flex shrink>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                @click="wpmenu"
                class="mx-2"
                small
              >
                WP Menu
                <!-- {{ wpSwitchLabel }} -->
                <v-icon
                  v-if="isWpMenuOpen"
                  right
                  small
                >
                  fad fa-toggle-on
                </v-icon>
                <v-icon
                  v-else
                  small
                  right
                >
                  fad fa-toggle-off
                </v-icon>
              </v-btn>
            </template>
            <span>Toggle Wordpress Menu</span>
          </v-tooltip>
        </v-flex>
        <v-flex shrink>
          <user-avatar-btn />
        </v-flex>
      </v-layout>
    </v-footer>
    <trinity-rings-spinner v-if="spinner" />
    <v-content
      id="v-content-billboard"
      class="v-content-billboard"
      v-if="!isBillboardOff"
    >
      <v-container
        fluid
        py-0
      >
        <Billboard
          v-if="!isBillboardOff"
          :plugin="activePlugin"
        />
      </v-container>
    </v-content>
    <router-view />
    <v-footer
      dark
      class="p-2 small--text copyright"
    >
      <v-layout
        justify-center
        align-center
      >
        <v-flex
          grow
        >
          <v-btn-toggle />
          &nbsp;
          <v-btn
            outlined
            color="#E151AA"
            small
          >
            Support COMPASS&nbsp;
            <v-icon small>
              fa fa-heart
            </v-icon>
            <!-- Premiere Sponsor -->
          </v-btn>
          <!-- <v-chip color="#E151AA"> -->
          <!-- Support COMPASS  -->
          <!-- </v-chip> -->
        </v-flex>
      </v-layout>
    </v-footer>
    <v-bottom-sheet
      attach="#app"
      v-model="bottomSheet"
      :hide-overlay="false"
    >
      <v-toolbar
        color="#212121"
        dark
        dense
      >
        <v-icon>
          fad fa-compass
        </v-icon>
        <v-spacer />
        <v-toolbar-title>
          <b>C</b>ompany
          <b>O</b>verview
          <b>M</b>anagment
          <b>P</b>lanning
          <b>A</b>nd
          <b>S</b>trategic
          <b>S</b>ystem
          <v-avatar
            size="32px"
            tile
          />
          <v-chip color="green">
            <span>
              Premium
            </span>
            <v-icon right>
              fa fa-star
            </v-icon>
          </v-chip>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            @click="bottomSheet = false"
            icon
            text
          >
            <v-icon>
              fa fa-times
            </v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list>
        <v-layout wrap>
          <v-flex
            sm6
            md6
            lg2
            v-for="plugin in plugins"
            :key="plugin.TextDomain"
          >
            <v-list-item
              @click="$router.push({
                path: getTextDomainPath(plugin.TextDomain),
                hash : 'v-content-billboard'
              });"
            >
              <v-list-item-icon>
                <v-avatar small>
                  <v-img
                    :src="plugin.icon"
                    :alt="plugin.title"
                  />
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content text-right>
                <v-list-item-title v-text="plugin.Name" />
              </v-list-item-content>
            </v-list-item>
          </v-flex>
        </v-layout>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>
<script src="./index.controller.js"></script>
<style src="./styles/theme.scss" lang="scss" />
<style lang="scss" src="./_index.scss" />
