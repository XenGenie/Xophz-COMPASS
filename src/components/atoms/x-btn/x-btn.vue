<template>
  <v-btn v-bind="$attrs" class="x-btn">
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </v-btn>
</template>

<script lang="ts" src="./x-btn.controller.ts"></script>
<style lang="scss" src="./_x-btn.scss"></style>
