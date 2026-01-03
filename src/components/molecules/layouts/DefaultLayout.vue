<template>
  <v-layout class="default-layout">
    <v-system-bar
      density="compact"
      theme="dark"
      class="h-20 border-b border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl"
      elevation="1"
    >
      <v-container
        fluid
        class="p-0"
      >
        <v-row
          justify="space-between"
          align="center"
        >
          <v-col
            cols="auto"
            class="flex items-center"
          >
            <v-tooltip location="bottom">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  size="small"
                  variant="tonal"
                  :prepend-icon="isWpMenuOpen ? 'fad fa-toggle-on' : 'fad fa-toggle-off'"
                  @click="wpmenu"
                >
                  <span class="d-none d-sm-inline">WP Menu {{ wpSwitchLabel }}</span>
                </v-btn>
              </template>
              <span>Toggle Wordpress Menu</span>
            </v-tooltip>
            <v-tooltip location="bottom">
              <template #activator="{ props }">
                <v-btn
                  v-if="blogInfo"
                  size="small"
                  variant="tonal"
                  v-bind="props"
                  prepend-icon="fa fa-globe"
                  @click="goHome"
                >
                  <span class="d-none d-sm-inline font-bold">
                    {{ blogInfo.name }}
                  </span>
                </v-btn>
              </template>
              <span>Go to Home Page</span>
            </v-tooltip>
          </v-col>

          <v-col class="flex items-center justify-center">
            <v-breadcrumbs
              :items="breadtrail"
              divider="/"
              class="p-0 d-none d-md-flex text-gray-400 text-xs"
            />
          </v-col>

          <v-col
            cols="auto"
            class="flex items-center"
          >
            <v-tooltip location="bottom">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  size="small"
                  variant="tonal"
                  prepend-icon="fad fa-compass"
                  @click="showBottomSheet"
                >
                  COMPASS
                </v-btn>
              </template>
              <span>Navigate COMPASS</span>
            </v-tooltip>
            <user-avatar-btn />
          </v-col>
        </v-row>
      </v-container>
    </v-system-bar>
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <trinity-rings-spinner v-if="spinner" />
    <v-main>
      <v-container fluid>
        <Billboard
          :plugin="activePlugin"
          id="v-main-billboard"
          v-if="!isBillboardOff"
        />
        <router-view />
        <!-- This renders the page content inside the layout -->
      </v-container>

    </v-main>

    <v-footer
      app
      class="p-2 text-sm copyright"
      theme="dark"
      absolute
    >
      <v-row
        justify="center"
        align="center"
        class="m-0"
      >
        <v-col class="text-center">
          <v-btn-toggle />
          &nbsp;
          <v-btn
            variant="outlined"
            color="#E151AA"
            size="small"
          >
            Support COMPASS&nbsp;
            <v-icon
              size="small"
              icon="fa fa-heart"
            />
            <!-- Premiere Sponsor -->
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
    <v-bottom-sheet
      v-model="bottomSheet"
      :scrim="false"
    >
      <v-toolbar
        color="#212121"
        theme="dark"
        density="compact"
      >
        <v-icon
          start
          class="ml-4"
          icon="fad fa-compass"
        />
        <v-chip
          class="ml-4"
          color="green"
        >
          <span>
            Premium
          </span>
          <v-icon
            end
            icon="fa fa-star"
          />
        </v-chip>
        <v-spacer />
        <v-toolbar-title class="headline d-flex d-sm-none">
          COMPASS
          <v-avatar
            size="32"
            rounded="0"
          />
          <v-chip color="green">
            <v-icon icon="fa fa-star" />
          </v-chip>
        </v-toolbar-title>
        <v-toolbar-title class="d-none d-sm-flex">
          COMPASS
        </v-toolbar-title>
        &nbsp;
        <v-spacer />
        <v-btn
          icon
          variant="text"
          @click="bottomSheet = false"
        >
          <v-icon icon="fa fa-times" />
        </v-btn>
      </v-toolbar>
      <v-list>
        <v-row class="ma-0">
          <v-col
            v-for="plugin in plugins"
            :key="plugin.TextDomain"
            cols="3"
            lg="2"
          >
            <v-list-item @click="
                bottomSheet = false;
                $router.push({
                  path: getTextDomainPath(plugin.TextDomain),
                  hash : '#v-main-billboard'
                }); ">
              <template #prepend>
                <v-avatar
                  size="64"
                  class="d-none d-xl-flex"
                >
                  <v-img
                    :src="plugin.icon"
                    :alt="plugin.title"
                    cover
                  />
                </v-avatar>
                <v-avatar
                  size="48"
                  class="d-flex d-xl-none"
                >
                  <v-img
                    :src="plugin.icon"
                    :alt="plugin.title"
                    cover
                  />
                </v-avatar>
              </template>
              <v-list-item-title class="text-right">
                {{ plugin.Name }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
        </v-row>
      </v-list>
    </v-bottom-sheet>
  </v-layout>
</template>
<script lang="ts" src="./default-layout.controller.ts"></script>
