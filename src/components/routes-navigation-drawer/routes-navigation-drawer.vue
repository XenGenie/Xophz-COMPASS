<template>
  <v-navigation-drawer
    v-model="drawerModel"
    :class="{
      'routes-navigation-drawer' : true,
      'main-nav' : !isBillboardNav,
      'mr-0' : true
    }"
    :location="location"
    :floating="true"
    :permanent="isBillboardNav"
    :temporary="temporary"
    theme="dark"
    :rail="mini"
    width="300"
  >
    <v-list-item
      v-if="!isBillboardNav && plugin"
      link
    >
      <template #prepend>
        <v-avatar>
          <v-img
            :src="plugin.icon"
            cover
          />
        </v-avatar>
      </template>

      <v-list-item-title class="pb-0">
        {{ plugin.Name }}
      </v-list-item-title>
      <v-list-item-subtitle class="m-0 p-0 small--text grey--text darken-4">
        {{ $route.name && $route.name.substring(0,11) + '...' }}
      </v-list-item-subtitle>

      <template
        v-if="!mini"
        #append
      >
        <v-btn
          icon
          size="small"
          variant="text"
          @click.stop="miniMode"
        >
          <v-icon size="small">
            fal fa-chevron-left
          </v-icon>
        </v-btn>
      </template>
    </v-list-item>

    <v-divider
      v-if="!isBillboardNav"
      class="m-2"
    />

    <v-list
      theme="dark"
      density="compact"
      nav
    >
      <v-list-item
        v-for="(child,c) in children"
        :key="c"
        link
        @click="$router.push({
          path : child.path,
          hash : (child.meta && !isBillboardNav) ? child.meta.hash : undefined,
        })"
      >
        <template
          v-if="mini"
          #prepend
        >
          <v-icon :color="child.color">
            fa fa-{{ child.icon }}
          </v-icon>
        </template>

        <v-list-item-title>
          {{ child.name }}
        </v-list-item-title>

        <template #append>
          <v-icon
            v-if="isBillboardNav || !mini"
            class="route-icon"
            :color="child.color"
          >
            fa-{{ child.icon }}
          </v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" src="./routes-navigation-drawer.controller.ts"></script>
<style lang="scss" src="./_routes-navigation-drawer.scss"></style>
