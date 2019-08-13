<template>
  <div class="xp-level-up-screen-gained-gp">
    <v-container>
      <v-layout
        row
        wrap
        justify-center
      >
        <v-flex xs12>
          <v-card>
            <v-layout>
              <v-flex grow>
                <v-card-title class="headline">
                  <v-icon
                    left
                    large
                  >
                    fal fa-hand-holding
                  </v-icon>
                  Gained GP and item(s).
                </v-card-title>
              </v-flex>
              <v-flex
                xs1
                class="p-3"
              />
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex
          xs6
          class="p-5"
        >
          <v-card color="orange darken-1">
            <v-layout>
              <v-flex grow>
                <v-card-title class="headline">
                  <v-icon
                    large
                    left
                  >
                    fal fa-hand-holding-usd
                  </v-icon>
                  Gained GP
                </v-card-title>
              </v-flex>
              <v-flex shrink>
                <v-card-title
                  class="headline text-right"
                  text-right
                >
                  {{ achievement.gp }}G
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex
          xs6
          class="p-5"
        >
          <v-card color="orange darken-1">
            <v-layout>
              <v-flex grow>
                <v-card-title class="headline">
                  <v-icon
                    large
                    left
                  >
                    fal fa-money-usd
                  </v-icon>
                  Total GP
                </v-card-title>
              </v-flex>
              <v-flex shrink>
                <v-card-title
                  class="headline text-right"
                  text-right
                >
                  <animated-number
                    :start="user.gp"
                    :number="user.gp"
                    :sound="soundFx.points"
                  />
                  <!-- sound="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-25674/zapsplat_multimedia_game_points_tally_006_25876.mp3"></animated-number> -->
                  G
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex
          xs6
          class="pl-5 pr-5"
        >
          <v-card
            v-for="(item, key) in itemsOffered"
            :key="key"
          >
            <v-layout>
              <v-flex grow>
                <v-card-title class="headline">
                  {{ item.key }}
                  <v-icon
                    large
                    left
                  >
                    fal fa-money-usd
                  </v-icon>
                </v-card-title>
              </v-flex>
              <v-flex shrink>
                <v-card-title
                  class="headline p-3  text-right"
                  text-right
                >
                  {{ item.value }}
                </v-card-title>
              </v-flex>
              <v-flex
                shrink
                class="p-3"
              >
                <v-btn
                  icon
                  color="green"
                  text
                  @click="takeItem(key)"
                >
                  <v-icon>
                    fal fa-arrow-right
                  </v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex
          xs6
          class="pl-5 pr-5"
        >
          <v-card
            v-for="(item, key) in itemsGained"
            :key="key"
          >
            <v-layout>
              <v-flex grow>
                <v-card-title class="headline">
                  {{ item.key }}
                  <v-icon
                    large
                    left
                  >
                    fal fa-money-usd
                  </v-icon>
                </v-card-title>
              </v-flex>
              <v-flex shrink>
                <v-card-title
                  class="headline p-3  text-right"
                  text-right
                >
                  {{ item.value }}
                </v-card-title>
              </v-flex>
              <v-flex
                shrink
                class="p-3"
              >
                <v-btn
                  icon
                  color="red"
                  @click="returnItem(key)"
                >
                  <v-icon>
                    fal fa-times
                  </v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex
          grow
          xs12
          text-center
        >
          <v-spacer />
          <v-btn
            v-if="itemsOffered.length"
            @click="takeEverything()"
          >
            take everything
          </v-btn>
          <v-spacer />
        </v-flex>
        <v-flex
          text-center
          xs12
        >
          <v-btn
            @click="backToAchievements"
          >
            Back to Achievements
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script src="./xp-level-up-screen-gained-gp.controller.js"></script>
<!-- <style lang="scss" src="./_xp-level-up-screen-gained-gp.scss"></style> -->
