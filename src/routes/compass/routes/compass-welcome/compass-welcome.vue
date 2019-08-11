<template>
  <div
    :id="$options.name"
    :class="$options.name"
    ma-5
  >
    <link
      rel="prefetch"
      href="./../../../../../wp-content/plugins/xophz-compass/assets/xophz-compass-ii.png"
    >
    <v-layout
      fill-height
      justify-center
      align-center
      class="step-1-layout mb-5"
    >
      <div
        class="circle-container "
        @click="stepper=2"
      >
        <div class="outer-ring" />
        <!-- Used for gyroscope effect -->
        <div class="outer-outer-ring" />
        <div
          class="circle"
          ref="compassCircle"
        >
          <div class="front text-center">
            <div class="front-inner text-center">
              <v-layout
                justify-center
                align-center
              >
                <v-flex text-center>
                  <img
                    width="64px"
                    src="./../../../../../wp-content/plugins/xophz-compass/assets/xophz-compass.png"
                  >
                  <h1 class="m-0">
                    COMPASS
                  </h1>
                  <h6 class="xsmall--text">
                    <small>
                      <!-- Cardinal Operations Master Panel And Strategic System -->
                      Company Overview Managment Planning & Strategic System
                    </small>
                  </h6>
                  <v-icon>
                    fa-mouse-pointer
                  </v-icon>
                </v-flex>
              </v-layout>
            </div>
          </div>
          <div class="back text-center">
            <div class="back-inner">
              <img
                src="./../../../../../wp-content/plugins/xophz-compass/assets/xophz-compass-ii.png"
                width="100%"
              >
            </div>
          </div>
        </div>
      </div>
    </v-layout>
  </div>
</template>
<script src="./compass-welcome.controller.js"></script>
<style lang="scss" src="./_compass-welcome.scss"></style>
