<template>
  <div
    :id="$options.name"
    :class="$options.name"
  >
    <v-container class="p-0">
      <v-sheet
        class="mb-6 bg-transparent flex justify-center items-center py-4 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
      >
        <v-btn
          :variant="stepper === 1 ? 'elevated' : 'text'"
          @click="stepper = 1"
          color="primary"
          class="mx-1 px-4"
          rounded="lg"
          size="small"
        >
          <span class="mr-2 opacity-50 font-bold">1</span>
          Welcome
        </v-btn>
        <v-divider
          vertical
          inset
          class="mx-4 border-gray-700"
        ></v-divider>
        <v-btn
          :variant="stepper === 2 ? 'elevated' : 'text'"
          @click="stepper = 2"
          color="primary"
          class="mx-1 px-4"
          rounded="lg"
          size="small"
        >
          <span class="mr-2 opacity-50 font-bold">2</span>
          Navigate
        </v-btn>
        <v-divider
          vertical
          inset
          class="mx-4 border-gray-700"
        ></v-divider>
        <v-btn
          :variant="stepper === 3 ? 'elevated' : 'text'"
          @click="stepper = 3"
          color="primary"
          class="mx-1 px-4"
          rounded="lg"
          size="small"
        >
          <span class="mr-2 opacity-50 font-bold">3</span>
          Explore
        </v-btn>
      </v-sheet>

      <v-window v-model="stepper">
        <v-window-item :value="1">
          <!-- <trinity-rings-spinner v-if="loading" /> -->
          <router-view v-if="stepper == 1" />
        </v-window-item>
        <v-window-item :value="2">
          <router-view v-if="stepper == 2" />
        </v-window-item>
        <v-window-item :value="3">
          <router-view v-if="stepper == 3" />
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>
<script lang="ts" src="./compass.controller.ts"></script>
<style lang="scss" src="./_compass.scss" scoped></style>
