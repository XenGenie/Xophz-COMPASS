<template>
  <div
    :id="$options.name"
    :class="$options.name"
    class="m-5"
  >
    <!-- <link
      rel="prefetch"
      href="/wp-content/plugins/xophz-compass/assets/xophz-compass-ii.png"
    > -->
    <v-row
      class="h-full step-1-layout mb-5"
      justify="center"
      align="center"
    >
      <div
        class="circle-container"
        @click="stepper=2"
      >
        <div class="outer-ring" />
        <!-- Used for gyroscope effect -->
        <div class="outer-outer-ring" />
        <div
          ref="compassCircle"
          class="circle"
        >
          <div class="front text-center">
            <div class="front-inner text-center">
              <v-row
                justify="center"
                align="center"
                class="h-full m-0"
              >
                <v-col class="text-center">
                  <img
                    width="64px"
                    src="/wp-content/plugins/xophz-compass/assets/xophz-compass.png"
                  >
                  <h6 class="mt-3 m-0 text-white text-sm">
                    <small class="text-white">
                      Welcome to
                    </small>
                  </h6>
                  <h1 class="m-0">
                    COMPASS
                  </h1>
                  <h6 class="text-sm">
                    <small>

                      <!-- Cardinal Operators Master Panel -->
                      Company Overview Management Planning
                      <br>
                      And
                      <!-- strategic system -->
                      Strategic System

                      <!-- <br/> -->
                      <!-- &  -->
                      <!-- <br/> -->
                      <!-- Strategic System -->
                    </small>
                  </h6>
                  <v-icon icon="fas fa-mouse-pointer" />
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="back text-center">
            <div class="back-inner">
              <img
                src="/wp-content/plugins/xophz-compass/assets/xophz-compass-ii.png"
                width="100%"
              >
            </div>
          </div>
        </div>
      </div>
    </v-row>
  </div>
</template>
<script lang="ts" src="./compass-welcome.controller.ts"></script>
<style lang="scss" src="./_compass-welcome.scss"></style>
