<template>
  <v-main
    :id="$options.name"
    :class="$options.name"
    class="min-h-screen bg-slate-950"
  >
    <v-app-bar
      density="compact"
      class="bg-slate-900/40 backdrop-blur-xl border-b border-white/5"
      flat
    >
      <v-btn
        icon
        variant="text"
        class="ml-2 hover:bg-white/10 transition-colors"
        @click="toggleAppNavDrawer"
      >
        <v-icon color="pink-accent-1">
          fad fa-bars
        </v-icon>
      </v-btn>

      <v-avatar
        size="28"
        class="mx-3 rounded-lg border border-white/10 shadow-lg"
      >
        <v-img
          v-if="plugin && plugin.icon"
          :src="plugin.icon"
          cover
        />
      </v-avatar>

      <v-toolbar-title class="text-sm font-black tracking-widest text-white/90 uppercase">
        {{ $route.name }}
      </v-toolbar-title>

      <v-spacer />

      <div class="mr-4 flex gap-2">
        <v-btn
          icon="fa fa-sync"
          variant="tonal"
          size="x-small"
          class="bg-white/5 border border-white/10 text-pink-accent-1"
        />
        <v-btn
          icon="fa fa-cog"
          variant="tonal"
          size="x-small"
          class="bg-white/5 border border-white/10 text-pink-accent-1"
        />
      </div>
    </v-app-bar>

    <v-container
      fluid
      class="p-6"
    >
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-container>
  </v-main>
</template>
<script lang="ts" src="./silver-arrow.controller.ts"></script>
<style lang="scss" src="./_silver-arrow.scss" scoped></style>
