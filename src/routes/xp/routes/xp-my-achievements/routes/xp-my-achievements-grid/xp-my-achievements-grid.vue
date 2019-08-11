<template>
  <v-layout
    class="xp-my-achievements-grid pa-0"
    row
    wrap
  >
    <v-flex
      v-for="(achievement,a) in achievements"
      :key="a"
      sm6
      md3
    >
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 15: 5}`"
          text-center
        >
          <v-card-title
            primary-title
            class="m-1 mx-1 pb-0"
          >
            <v-layout
              justify-center
              align-center
            >
              <v-flex text-center>
                <h3
                  text-center
                  class="mb-0"
                >
                  {{ achievement.title }}
                </h3>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-layout
            justify-center
            align-center
            fill-height
          >
            <v-flex
              text-center
              fill-height
              xs3
            >
              <v-layout
                justify-center
                align-center
                row
                wrap
                fill-height
              >
                <v-flex
                  v-for="(day, d) in achievement.repeat_on"
                  :key="d"
                  :class="day == weekday ? 'green--text' : 'grey--text' "
                  text-center
                  xs12
                >
                  {{ day.toUpperCase() }}
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-img
                v-if="achievement.img"
                :src="achievement.img"
                class="m-3"
              />
            </v-flex>
            <v-flex
              text-center
              fill-height
              grow
              xs3
            >
              <v-layout
                text-center
                align-center
                justify-center
                row
                wrap
              >
                <v-flex xs12>
                  <v-badge>
                    <template v-slot:badge>
                      <span>{{ achievement.xp }}</span>
                    </template>
                    <v-icon
                      color="blue lighten-1"
                    >
                      fal fa-hand-holding-magic
                    </v-icon>
                  </v-badge>
                </v-flex>
                <v-flex xs12>
                  <v-badge color="orange darken-2">
                    <template v-slot:badge>
                      <span>{{ achievement.gp }}</span>
                    </template>
                    <v-icon
                      color="orange darken-1"
                    >
                      fal fa-hand-holding-usd
                    </v-icon>
                  </v-badge>
                </v-flex>
                <v-flex xs12>
                  <v-badge
                    top
                    color="red darken-2"
                  >
                    <template v-slot:badge>
                      <span>{{ achievement.ap }}</span>
                    </template>
                    <v-icon
                      color="red darken-2"
                    >
                      fal fa-hand-holding-heart
                    </v-icon>
                  </v-badge>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer />
            <v-btn
              @click="playFx('click'); checkoffAchievement(achievement)"
              color="green darken-1"
            >
              Complete
              <v-icon>
                fal fa-sword
              </v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>
<script src="./xp-my-achievements-grid.controller.js"></script>
<style lang="scss" src="./_xp-my-achievements-grid.scss"></style>
