<template>
  <x-system-bar
    height="50"
    density="compact"
    theme="dark"
    class="x-system-bar-molecule"
  >
    <v-container
      fluid
      class="pa-0"
    >
      <v-row
        justify="space-between"
        align="center"
        class="ma-0"
      >
        <v-col
          cols="auto"
          class="d-flex align-center"
        >
          <v-tooltip location="bottom">
            <template #activator="{ props }">
              <x-btn
                v-bind="props"
                size="small"
                variant="tonal"
                :prepend-icon="isWpMenuOpen ? 'fad fa-toggle-on' : 'fad fa-toggle-off'"
                @click="wpmenu"
              >
                <span class="d-none d-sm-inline">WP Menu {{ wpSwitchLabel }}</span>
              </x-btn>
            </template>
            <span>Toggle Wordpress Menu</span>
          </v-tooltip>

          <v-tooltip location="bottom">
            <template #activator="{ props }">
              <x-btn
                v-if="blogInfo"
                size="small"
                variant="tonal"
                v-bind="props"
                prepend-icon="fa fa-globe"
                @click="goHome"
              >
                <span class="d-none d-sm-inline font-weight-bold">
                  {{ blogInfo.name }}
                </span>
              </x-btn>
            </template>
            <span>Go to Home Page</span>
          </v-tooltip>
        </v-col>

        <v-col class="d-flex align-center justify-center">
          <v-breadcrumbs
            :items="breadtrail"
            divider="/"
            class="pa-0 d-none d-md-flex text-caption text-medium-emphasis"
          />
        </v-col>

        <v-col
          cols="auto"
          class="d-flex align-center"
        >
          <v-tooltip location="bottom">
            <template #activator="{ props }">
              <x-btn
                v-bind="props"
                size="small"
                variant="tonal"
                prepend-icon="fad fa-compass"
                @click="showBottomSheet"
              >
                COMPASS
              </x-btn>
            </template>
            <span>Navigate COMPASS</span>
          </v-tooltip>
          <user-avatar-btn />
        </v-col>
      </v-row>
    </v-container>
  </x-system-bar>
</template>

<script lang="ts" src="./x-system-bar.molecule.controller.ts"></script>
<style lang="scss" src="./_x-system-bar.molecule.scss"></style>
