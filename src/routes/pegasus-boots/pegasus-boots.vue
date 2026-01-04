<template>
  <div :id="$options.name" :class="$options.name" class="pegasus-boots-content">
    <XCompassAppBar />
    <v-container fluid class="p-6">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-container>
  </div>
</template>
<script lang="ts" src="./pegasus-boots.controller.ts"></script>
<style lang="scss" src="./_pegasus-boots.scss" scoped></style>
