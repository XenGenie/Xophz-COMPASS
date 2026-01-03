<template>
  <div class="xp-level-up-screen-gained-gp">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-card>
            <v-row dense>
              <v-col class="flex-grow-1">
                <v-card-title class="text-2xl">
                  <v-icon
                    start
                    size="large"
                  >
                    fal fa-hand-holding
                  </v-icon>
                  Gained GP and item(s).
                </v-card-title>
              </v-col>
              <v-col
                cols="1"
                class="p-3"
              />
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="6"
          class="p-5"
        >
          <v-card color="orange-darken-1">
            <v-row dense>
              <v-col class="flex-grow-1">
                <v-card-title class="text-2xl">
                  <v-icon
                    size="large"
                    start
                  >
                    fal fa-hand-holding-usd
                  </v-icon>
                  Gained GP
                </v-card-title>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-0">
                <v-card-title class="text-2xl text-right">
                  {{ achievement.gp }}G
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="6"
          class="p-5"
        >
          <v-card color="orange-darken-1">
            <v-row dense>
              <v-col class="flex-grow-1">
                <v-card-title class="text-2xl">
                  <v-icon
                    size="large"
                    start
                  >
                    fal fa-money-usd
                  </v-icon>
                  Total GP
                </v-card-title>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-0">
                <v-card-title class="text-2xl text-right">
                  <animated-number
                    :start="user.gp"
                    :number="user.gp"
                    :sound="soundFx.points"
                  />
                  G
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="6"
          class="pl-5 pr-5"
        >
          <v-card
            v-for="(item, key) in itemsOffered"
            :key="key"
            class="mb-2"
          >
            <v-row no-gutters>
              <v-col class="flex-grow-1">
                <v-card-title class="text-2xl">
                  {{ item.key }}
                  <v-icon
                    size="large"
                    start
                  >
                    fal fa-money-usd
                  </v-icon>
                </v-card-title>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-0">
                <v-card-title class="text-2xl p-3 text-right">
                  {{ item.value }}
                </v-card-title>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-0 p-3">
                <v-btn
                  icon
                  color="green"
                  variant="text"
                  @click="takeItem(key)"
                >
                  <v-icon>
                    fal fa-arrow-right
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="6"
          class="pl-5 pr-5"
        >
          <v-card
            v-for="(item, key) in itemsGained"
            :key="key"
            class="mb-2"
          >
            <v-row no-gutters>
              <v-col class="flex-grow-1">
                <v-card-title class="text-2xl">
                  {{ item.key }}
                  <v-icon
                    size="large"
                    start
                  >
                    fal fa-money-usd
                  </v-icon>
                </v-card-title>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-0">
                <v-card-title class="text-2xl p-3 text-right">
                  {{ item.value }}
                </v-card-title>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-0 p-3">
                <v-btn
                  icon
                  color="red"
                  variant="elevated"
                  @click="returnItem(key)"
                >
                  <v-icon>
                    fal fa-times
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          class="text-center mt-4"
        >
          <v-spacer />
          <v-btn
            v-if="itemsOffered.length"
            class="mx-2"
            @click="takeEverything()"
          >
            take everything
          </v-btn>
          <v-btn
            color="primary"
            class="mx-2"
            @click="backToAchievements"
          >
            Back to Achievements
          </v-btn>
          <v-spacer />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts" src="./xp-level-up-screen-gained-gp.controller.ts"></script>
<!-- <style lang="scss" src="./_xp-level-up-screen-gained-gp.scss"></style> -->
