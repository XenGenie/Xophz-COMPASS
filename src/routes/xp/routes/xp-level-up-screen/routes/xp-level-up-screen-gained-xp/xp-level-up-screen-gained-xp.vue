<template>
  <div class="xp-level-up-screen-gained-xp">
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
                  Gained XP and AP!
                </v-card-title>
              </v-flex>
              <v-flex
                xs1
                class="p-3"
              />
            </v-layout>
            {{ levels }}
          </v-card>
        </v-flex>
        <v-flex
          xs6
          class="p-5"
        >
          <v-card color="blue">
            <v-layout>
              <v-flex grow>
                <v-card-title class="headline">
                  <v-icon
                    large
                    left
                  >
                    fal fa-hand-holding-magic
                  </v-icon>
                  XP
                </v-card-title>
              </v-flex>
              <v-flex shrink>
                <v-card-title
                  class="headline text-right"
                  text-right
                >
                  {{ achievement.xp }}p
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex
          xs6
          class="p-5"
        >
          <v-card color="red">
            <v-layout>
              <v-flex grow>
                <v-card-title class="headline">
                  <v-icon
                    large
                    left
                  >
                    fal fa-hand-holding-heart
                  </v-icon>
                  AP
                </v-card-title>
              </v-flex>
              <v-flex shrink>
                <v-card-title
                  class="headline text-right"
                  text-right
                >
                  {{ achievement.ap }}p
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
          xs12
          class="mt-1"
        >
          <v-card :class="hasLeveled ? 'elevation-24' : ''">
            <v-layout fill-height>
              <v-flex
                shrink
                xs2
              >
                <v-layout
                  justify-center
                  align-center
                >
                  <v-flex class="p-3">
                    <v-img
                      :src="currentUser.avatar"
                    />
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex>
                <v-layout>
                  <v-flex grow>
                    <v-card-title
                      class="headline text-right"
                      text-right
                    >
                      {{ currentUser.data.user_login }}
                      <!-- <v-chip v-if="hasLeveled" color="success" text-color="white"> -->
                      <!--   {{user.level}} -->
                      <!--   <v-icon right>fal fa-hand-holding-seedling</v-icon> -->
                      <!-- </v-chip> -->
                      <v-spacer />
                    </v-card-title>
                  </v-flex>
                  <v-flex
                    text-right
                    shrink
                  >
                    <v-card-title
                      class="headline text-right"
                      text-right
                    >
                      XP:
                    </v-card-title>
                  </v-flex>
                  <v-flex
                    xs3
                    grow
                    text-right
                  >
                    <h1
                      class="headline text-right p-3 pr-0"
                      text-right
                    >
                      <animated-number
                        :start="user.xp"
                        :number="user.xp"
                        :sound="soundFx.points"
                        @updateProgress="updateProgressBar"
                      />
                    </h1>
                  </v-flex>
                  <v-flex shrink>
                    <h1
                      class="headline text-right pl-0 p-3"
                      text-right
                    >
                      p
                    </h1>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex
                    xs8
                    class="pr-3"
                  >
                    <v-card-title
                      v-if="hasLeveled"
                      class="headline mb-0 pb-0"
                      text-right
                    >
                      <span
                        v-if="tempLevel < user.level "
                        class="green--text"
                      >
                        LEVEL UP!
                      </span>
                      <span
                        v-else
                        class="red--text"
                      >
                        LEVEL DOWN!
                      </span>
                    </v-card-title>
                    <v-spacer />
                  </v-flex>
                  <v-flex
                    xs4
                    class="pr-3"
                  >
                    <v-progress-linear
                      color="info"
                      height="10"
                      v-model="userProgress"
                    />
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex grow>
                    <v-card-title
                      class="headline text-right"
                      text-right
                    >
                      <!-- <v-chip large color="green" text-color="white"> -->
                      <!--   LEVEL {{user.level}}  -->
                      <!--   <v-icon right>fa fa-hand-holding-seedling</v-icon> -->
                      <!-- </v-chip> -->
                      Level:
                      {{ currentLevel }}
                    </v-card-title>
                  </v-flex>
                  <v-flex
                    text-right
                    shrink
                  >
                    <v-card-title
                      class="headline text-right"
                      text-right
                    >
                      next level:
                    </v-card-title>
                  </v-flex>
                  <v-flex
                    xs3
                    grow
                    text-right
                  >
                    <h1
                      class="headline text-right p-3 pr-0"
                      text-right
                    >
                      <animated-number
                        :start="xpToNextLevel"
                        :number="xpToNextLevel"
                      />
                    </h1>
                  </v-flex>
                  <v-flex shrink>
                    <h1
                      class="headline text-right pl-0 p-3"
                      text-right
                    >
                      p
                    </h1>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout
        justify-center
        align-center
      >
        <v-flex
          xs12
          class="mt-1"
          text-center
        >
          <v-btn
            color="orange"
            large
            @click="
              playFx('click');
              $router.push({
                path : '/xp/achievement/complete/gp',
              })
            "
          >
            Collect GP
            <v-icon
              large
              right
            >
              fa fa-hand-holding-usd
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script src="./xp-level-up-screen-gained-xp.controller.js"></script>
<style lang="scss" src="./_xp-level-up-screen-gained-xp.scss"></style>
