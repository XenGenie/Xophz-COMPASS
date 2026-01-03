<template>
  <v-toolbar
    class="flex"
  >
    <v-text-field
      v-model="search.text"
      solo
      clearable
      hide-details
      small
      placeholder="Search Achievements"
      prepend-inner-icon="search"
      single-line
    />
    <v-text-field
      v-if="xp != false"
      v-model="search.xp"
      class="blue"
      solo-inverted
      clearable
      dark
      small
      hide-details
      placeholder="Min XP"
      prepend-inner-icon="fa fa-hand-holding-magic"
      single-line
    />
    <v-text-field
      v-if="ap != false"
      v-model="search.ap"
      class="red"
      solo-inverted
      clearable
      dark
      hide-details
      placeholder="Min AP"
      prepend-inner-icon="fa fa-hand-holding-heart"
      single-line
    />
    <v-text-field
      v-if="gp != false"
      v-model="search.gp"
      class="orange"
      solo-inverted
      clearable
      dark
      hide-details
      placeholder="Min GP"
      prepend-inner-icon="fa fa-hand-holding-usd"
      single-line
    />
  </v-toolbar>
</template>
<script lang="ts" src="./search.controller.ts"></script>
<style lang="scss" src="./_search.scss"></style>
