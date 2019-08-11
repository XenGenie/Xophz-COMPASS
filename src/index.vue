<template>
  <div id="app">
    <v-footer
      dark
      class="breadcrumbs p-0 pr-3"
    >
      <v-layout
        justify-center
        align-center
      >
        <v-flex shrink>
          <v-btn
            small
            icon
          >
            <v-icon
              @click="wpmenu"
              small
              v-if="isWpMenuOpen"
            >
              fad fa-toggle-on
            </v-icon>
            <v-icon
              @click="wpmenu"
              small
              v-else
            >
              fad fa-toggle-off
            </v-icon>
          </v-btn>
          <v-btn
            icon
            small
            @click="goHome"
          >
            <v-icon
              small
            >
              fad fa-home
            </v-icon>
            <!-- &nbsp;COMPASS -->
          </v-btn>

          <v-btn
            small
            @click="showBottomSheet"
          >
            <v-icon small>
              fad fa-compass
            </v-icon>
            &nbsp;COMPASS
          </v-btn>
        </v-flex>
        <v-flex grow>
          <ul
            class="breadcrumb"
          >
            <!-- <li class="breadcrumb-item"> -->
            <!--   <a @click="showBottomSheet"> -->
            <!--     COMPASS -->
            <!--   </a>  -->
            <!-- </li> -->
            <li
              v-for="(breadcrumb, i) in breadcrumbs"
              :key="i"
              class="breadcrumb-item"
            >
              <router-link
                :to="breadcrumb.path"
                v-if="1+i != breadcrumbs.length"
              >
                {{ i == 0 ? activePlugin.Name : breadcrumb.name }}
              </router-link>
              <span v-else-if="breadcrumb">
                {{ breadcrumb.name }}
              </span>
            </li>
          </ul>
        </v-flex>
        <v-spacer />
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
    <router-view :plugin="activePlugin" />
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
      :hide-overlay="fadse"
    >
      <v-toolbar
        dark
        dense
        flat
        color="black"
      >
        <v-toolbar-title>
          <b>C</b>entral
          <b>O</b>perating
          <b>M</b>aster
          <b>P</b>anel
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
            icon
            text
          >
            <v-icon @click="bottomSheet = fadse">
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
                <v-avatar>
                  <v-img
                    :src="plugin.icon"
                    :alt="plugin.title"
                  />
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ plugin.Name }}</v-list-item-title>
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
