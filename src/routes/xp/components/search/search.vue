<template>
  <v-toolbar
    class="flex"
  >
    <v-text-field
      solo
      clearable
      hide-details
      small
      v-model="search.text"
      placeholder="Search Achievements"
      prepend-inner-icon="search"
      single-line
    />
    <v-text-field
      v-if="xp != false"
      class="blue"
      solo-inverted
      clearable
      dark
      small
      hide-details
      v-model="search.xp"
      placeholder="Min XP"
      prepend-inner-icon="fa fa-hand-holding-magic"
      single-line
    />
    <v-text-field
      v-if="ap != false"
      class="red"
      solo-inverted
      clearable
      dark
      hide-details
      v-model="search.ap"
      placeholder="Min AP"
      prepend-inner-icon="fa fa-hand-holding-heart"
      single-line
    />
    <v-text-field
      v-if="gp != false"
      class="orange"
      solo-inverted
      clearable
      dark
      hide-details
      v-model="search.gp"
      placeholder="Min GP"
      prepend-inner-icon="fa fa-hand-holding-usd"
      single-line
    />
  </v-toolbar>
</template>
<script src="./search.controller.js"></script>
<style lang="scss" src="./_search.scss"></style>
