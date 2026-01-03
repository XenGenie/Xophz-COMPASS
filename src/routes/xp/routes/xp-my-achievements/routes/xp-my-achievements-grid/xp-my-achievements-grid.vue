<template>
  <v-row class="xp-my-achievements-grid p-0">
    <v-col
      v-for="(achievement,a) in achievements"
      :key="a"
      cols="12"
      sm="6"
      md="4"
    >
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 15 : 5"
            class="text-center"
          >
            <v-footer>
              <v-card-title class="m-1 mx-1 pb-0">
                <v-row
                  justify="center"
                  align="center"
                >
                  <v-col class="text-center">
                    {{ achievement.title }}
                  </v-col>
                </v-row>
              </v-card-title>
            </v-footer>
            <v-row
              justify="center"
              align="center"
              class="h-full"
            >
              <v-col
                class="text-center h-full"
                cols="3"
              >
                <v-row
                  justify="center"
                  align="center"
                  class="h-full"
                >
                  <v-col
                    v-for="(day, d) in achievement.repeat_on"
                    :key="d"
                    :class="day == weekday ? 'text-green-500' : 'text-gray-500' "
                    class="text-center"
                    cols="12"
                  >
                    {{ day.toUpperCase() }}
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-img
                  v-if="achievement.img"
                  :src="achievement.img"
                  class="m-3"
                />
              </v-col>
              <v-col
                class="text-center h-full flex-grow"
                cols="3"
              >
                <v-row
                  class="text-center"
                  align="center"
                  justify="center"
                >
                  <v-col cols="12">
                    <v-badge
                      :content="achievement.xp"
                      color="blue-lighten-1"
                    >
                      <v-icon color="blue-lighten-1">
                        fal fa-hand-holding-magic
                      </v-icon>
                    </v-badge>
                  </v-col>
                  <v-col cols="12">
                    <v-badge
                      :content="achievement.gp"
                      color="orange-darken-2"
                    >
                      <v-icon color="orange-darken-1">
                        fal fa-hand-holding-usd
                      </v-icon>
                    </v-badge>
                  </v-col>
                  <v-col cols="12">
                    <v-badge
                      :content="achievement.ap"
                      color="red-darken-2"
                    >
                      <v-icon color="red-darken-2">
                        fal fa-hand-holding-heart
                      </v-icon>
                    </v-badge>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer />
              <v-btn
                @click="playFx('click'); checkoffAchievement(achievement)"
                color="green-darken-1"
              >
                Complete
                <v-icon end>
                  fal fa-sword
                </v-icon>
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./xp-my-achievements-grid.controller.ts"></script>
<style lang="scss" src="./_xp-my-achievements-grid.scss"></style>
