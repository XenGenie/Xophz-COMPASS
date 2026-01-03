<template>
  <div class="switch">
    <v-switch
      v-model="isOn"
      :id="plugin.TextDomain"
      :disabled="plugin.Name == 'COMPASS'"
      dark
      :label="label"
      color="green"
    />
  </div>
</template>
<script lang="ts" src="./switch.controller.ts"></script>
<!-- <style lang="scss" src="./_switch.scss" scoped></style> -->
