<template>
  <v-app
    :id="$options.name"
    :class="$options.name"
  >
    <v-content>
      <v-container class="pl-0 pr-0">
        <v-stepper
          alt-labels
          class="x-stepper elevation-0"
          v-model="stepper"
        >
          <v-stepper-header
            class="elevation-0"
          >
            <v-stepper-step
              :complete="stepper > 1"
              step="1"
              @click="stepper = 1 "
            >
              Welcome
            </v-stepper-step>
            <v-divider />
            <v-stepper-step
              :complete="stepper > 2"
              step="2"
              @click="stepper = 2 "
            >
              Navigate
            </v-stepper-step>
            <v-divider />
            <v-stepper-step step="3">
              Explore
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content
              step="1"
              class="step-1"
            >
              <trinity-rings-spinner v-if="loading" />
              <router-view v-if="stepper == 1" />
            </v-stepper-content>
            <v-stepper-content step="2">
              <router-view v-if="stepper == 2" />
            </v-stepper-content>
            <v-stepper-content step="3">
              <router-view v-if="stepper == 3" />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-container>
    </v-content>
  </v-app>
</template>
<script src="./compass.controller.js"></script>
<style lang="scss" src="./_compass.scss" scoped ></style>
