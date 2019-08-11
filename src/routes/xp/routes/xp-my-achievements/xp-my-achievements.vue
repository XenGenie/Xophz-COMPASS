<template>
  <v-app
    :id="$options.name"
    :class="$options.name"
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <v-app-bar
      clipped-left
      app
      color="blue"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <v-icon>
        fa-hand-holding-magic
      </v-icon>
      <v-toolbar-title>
        My Achievements
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="playFx('cursorX'); setDate(-1)"
      >
        <v-icon>fa-caret-left</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ date|moment('dddd') }}
      </v-toolbar-title>
      <v-btn
        icon
        @click="playFx('cursorX'); setDate(+1)"
      >
        <v-icon>fa-caret-right</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          icon
          @click="true"
        >
          <v-icon>fa-calendar</v-icon>
        </v-btn>
        <v-btn
          text
          icon
          @click="index = !index"
        >
          <v-icon v-if="!index">
            fal fa-list
          </v-icon>
          <v-icon v-else>
            fal fa-th-large
          </v-icon>
        </v-btn>
        <v-menu
          offset-x
          left
          :close-on-click="false"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              color="primary"
              v-on="on"
              small
            >
              <v-icon>fal fa-search</v-icon>
            </v-btn>
          </template>
          <search dispatch="xp/SEARCH_ACHIEVEMENTS" />
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        grid-list-md
        pt-3
      >
        <router-view :weekday="weekday" />
      </v-container>
    </v-content>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
      class="m-2"
    >
      <v-card fluid>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-center>
            <h1
              text-center
              class="m-3 mb-0 headline"
            >
              {{ achievement.title }}
            </h1>
          </v-flex>
        </v-layout>
        <v-layout
          justify-center
          align-center
          fill-height
        >
          <v-flex
            text-center
            fill-height
            xs2
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
          <v-flex xs8>
            <v-img
              :src="achievement.img"
              class="m-5"
            />
          </v-flex>
        </v-layout>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-center />
        </v-layout>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-center>
            <h1
              text-center
              class="m-3 mb-0 headline"
            >
              <i class="grey--text darken-3">
                DID YOU DO IT?
              </i>
            </h1>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-btn
            color="red darken-1"
            text
            @click="playFx('cancel'); dialog = false"
          >
            No, not yet...
          </v-btn>
          <v-spacer />
          <v-btn
            color="green darken-1"
            @click="
              playFx('confirm');
              dialog = false;
              $router.push({
                path : '/xp/achievement/complete',
                hash : 'xp-level-up-screen'
              })
            "
          >
            Yes, I'm Done!
            <v-icon>
              fa fa-hand-holding-seedling
            </v-icon>
          </v-btn>
        </v-card-actions>
        <!-- <v-footer v-html="achievement.the_content"> -->
        <!--   <v-layout justify-center align-center> -->
        <!--       {{achievement.the_content}} -->
        <!--   </v-layout> -->
        <!-- </v-footer> -->
        <v-footer class="text-xs-center small--text grey--text darken-5">
          <v-layout
            justify-center
            align-center
          >
            <v-flex text-center>
              REWARDS
            </v-flex>
          </v-layout>
        </v-footer>
        <v-footer>
          <v-layout
            align-center
            row
            wrap
            text-center
            class="m-3"
          >
            <v-flex
              fill-height
              xs4
            >
              <h1 class="headline red--text">
                <v-icon
                  large
                  left
                  color="red lighten-1"
                >
                  fal fa-hand-holding-heart
                </v-icon>
                {{ achievement.ap }}
                <small class="red--text darken-5">
                  AP
                </small>
              </h1>
            </v-flex>
            <v-flex
              fill-height
              xs4
            >
              <h1 class="headline orange--text">
                <v-icon
                  large
                  left
                  color="orange lighten-1"
                >
                  fal fa-hand-holding-usd
                </v-icon>
                {{ achievement.gp }}
                <small class="orange--text darken-5">
                  GP
                </small>
              </h1>
            </v-flex>
            <v-flex
              fill-height
              xs4
            >
              <h1 class="headline blue--text">
                <v-icon
                  large
                  left
                  color="blue lighten-1"
                >
                  fal fa-hand-holding-magic
                </v-icon>
                {{ achievement.xp }}
                <small class="blue--text small--text darken-5">
                  XP
                </small>
              </h1>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script src="./xp-my-achievements.controller.js"></script>
<style lang="scss" src="./_xp-my-achievements.scss"></style>
