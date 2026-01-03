<template>
  <div class="xp-level-up-screen-gained-xp">
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
                  Gained XP and AP!
                </v-card-title>
              </v-col>
              <v-col
                cols="1"
                class="p-3"
              />
            </v-row>
            {{ levels }}
          </v-card>
        </v-col>
        <v-col
          cols="6"
          class="p-5"
        >
          <v-card color="blue">
            <v-row dense>
              <v-col class="flex-grow-1">
                <v-card-title class="text-2xl">
                  <v-icon
                    size="large"
                    start
                  >
                    fal fa-hand-holding-magic
                  </v-icon>
                  XP
                </v-card-title>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-0">
                <v-card-title class="text-2xl text-right">
                  {{ achievement.xp }}p
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="6"
          class="p-5"
        >
          <v-card color="red">
            <v-row dense>
              <v-col class="flex-grow-1">
                <v-card-title class="text-2xl">
                  <v-icon
                    size="large"
                    start
                  >
                    fal fa-hand-holding-heart
                  </v-icon>
                  AP
                </v-card-title>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-0">
                <v-card-title class="text-2xl text-right">
                  {{ achievement.ap }}p
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="mt-1"
        >
          <v-card :elevation="hasLeveled ? 24 : 1">
            <v-row no-gutters>
              <v-col
                class="flex-grow-0 flex-shrink-0"
                cols="2"
              >
                <v-row
                  justify="center"
                  align="center"
                  class="h-full"
                >
                  <v-col class="p-3">
                    <v-img :src="currentUser.avatar" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row dense>
                  <v-col class="flex-grow-1">
                    <v-card-title class="text-2xl text-right">
                      {{ currentUser.data.user_login }}
                      <v-spacer />
                    </v-card-title>
                  </v-col>
                  <v-col class="text-right flex-grow-0 flex-shrink-0">
                    <v-card-title class="text-2xl text-right">
                      XP:
                    </v-card-title>
                  </v-col>
                  <v-col
                    cols="3"
                    class="flex-grow-1 text-right"
                  >
                    <h1 class="text-2xl text-right p-3 pr-0">
                      <animated-number
                        :start="user.xp"
                        :number="user.xp"
                        :sound="soundFx.points"
                        @update-progress="updateProgressBar"
                      />
                    </h1>
                  </v-col>
                  <v-col class="flex-grow-0 flex-shrink-0">
                    <h1 class="text-2xl text-right pl-0 p-3">
                      p
                    </h1>
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col
                    cols="8"
                    class="pr-3"
                  >
                    <v-card-title
                      v-if="hasLeveled"
                      class="text-2xl mb-0 pb-0 flex justify-end"
                    >
                      <span
                        v-if="tempLevel < user.level "
                        class="text-green-500 font-bold"
                      >
                        LEVEL UP!
                      </span>
                      <span
                        v-else
                        class="text-red-500 font-bold"
                      >
                        LEVEL DOWN!
                      </span>
                    </v-card-title>
                    <v-spacer />
                  </v-col>
                  <v-col
                    cols="4"
                    class="pr-3 self-center"
                  >
                    <v-progress-linear
                      v-model="userProgress"
                      color="info"
                      height="10"
                    />
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col class="flex-grow-1">
                    <v-card-title class="text-2xl text-right font-bold">
                      Level:
                      {{ currentLevel }}
                    </v-card-title>
                  </v-col>
                  <v-col class="text-right flex-grow-0 flex-shrink-0">
                    <v-card-title class="text-2xl text-right">
                      next level:
                    </v-card-title>
                  </v-col>
                  <v-col
                    cols="3"
                    class="flex-grow-1 text-right"
                  >
                    <h1 class="text-2xl text-right p-3 pr-0">
                      <animated-number
                        :start="xpToNextLevel"
                        :number="xpToNextLevel"
                      />
                    </h1>
                  </v-col>
                  <v-col class="flex-grow-0 flex-shrink-0">
                    <h1 class="text-2xl text-right pl-0 p-3">
                      p
                    </h1>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          class="mt-4 text-center"
        >
          <v-btn
            color="orange"
            size="large"
            rounded="pill"
            class="px-8 shadow-lg"
            @click="
              playFx('click');
              $router.push({
                path : '/xp/achievement/complete/gp',
              })
            "
          >
            Collect GP
            <v-icon
              size="large"
              end
            >
              fa fa-hand-holding-usd
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts" src="./xp-level-up-screen-gained-xp.controller.ts"></script>
<style lang="scss" src="./_xp-level-up-screen-gained-xp.scss"></style>
