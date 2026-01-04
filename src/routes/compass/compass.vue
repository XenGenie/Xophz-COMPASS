<template>
  <v-container
    class="p-0"
    :id="$options.name"
    :class="$options.name"
  >
    <XCompassAppBar />
    <div class="d-flex justify-center mb-6">
      <v-btn-toggle
        v-model="stepper"
        mandatory
        rounded="xl"
        class="bg-gray-900/50 backdrop-blur-sm border border-gray-800"
        divided
        data-test="compass-stepper"
      >
        <v-btn
          :value="1"
          class="px-6"
          :variant="stepper === 1 ? 'elevated' : 'text'"
          color="primary"
        >
          <span class="mr-2 opacity-50 font-bold">1</span>
          Welcome
        </v-btn>

        <v-btn
          :value="2"
          class="px-6"
          :variant="stepper === 2 ? 'elevated' : 'text'"
          color="primary"
        >
          <span class="mr-2 opacity-50 font-bold">2</span>
          Navigate
        </v-btn>

        <v-btn
          :value="3"
          class="px-6"
          :variant="stepper === 3 ? 'elevated' : 'text'"
          color="primary"
        >
          <span class="mr-2 opacity-50 font-bold">3</span>
          Explore
        </v-btn>
      </v-btn-toggle>
    </div>

    <router-view v-slot="{ Component }">
      <transition
        :name="transitionName"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </v-container>
</template>
<script lang="ts" src="./compass.controller.ts"></script>
<style lang="scss" src="./_compass.scss" scoped></style>
