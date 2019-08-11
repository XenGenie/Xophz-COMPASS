<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div
        :class="{ 'flip-card-front': true, deactivated: !plugin.isActivated }"
        :style="'background-image: url('+plugin.icon+')'"
      />
      <div
        :class="{ 'flip-card-back': true, deactivated: !plugin.isActivated }"
        :style="'background-image: url('+plugin.icon+')'"
      >
        <br>
        <on-switch :plugin="plugin" />
        <!-- <h1>{{plugin.Name}}</h1>  -->
        <!-- <p>{{plugin.Description}}</p>  -->
      </div>
    </div>
  </div>
</template>
<script src="./item-flip.controller.js"></script>
<style lang="scss" src="./_item-flip.scss" scoped></style>
