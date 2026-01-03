<template>
  <v-main
    :id="$options.name"
    :class="$options.name"
  >
    <v-app-bar
      color="blue"
      elevation="2"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <v-icon icon="fa-hand-holding-magic" />
      <v-toolbar-title>
        My Achievements
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon="fa-caret-left"
        variant="text"
        @click="playFx('cursorX'); setDate(-1)"
      />
      <v-toolbar-title class="flex-grow-0 mx-2">
        {{ new Date(date).toLocaleString('en-us', {weekday:'long'}) }}
      </v-toolbar-title>
      <v-btn
        icon="fa-caret-right"
        variant="text"
        @click="playFx('cursorX'); setDate(+1)"
      />
      <v-spacer />
      
      <v-btn
        icon="fa-calendar"
        variant="text"
        @click="true"
      />
      
      <v-btn
        variant="text"
        :icon="!index ? 'fal fa-list' : 'fal fa-th-large'"
        @click="index = !index"
      />

      <v-menu
        location="bottom end"
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <v-btn
            color="primary"
            variant="flat"
            size="small"
            icon="fal fa-search"
            v-bind="props"
          />
        </template>
        <search dispatch="xp/SEARCH_ACHIEVEMENTS" />
      </v-menu>
    </v-app-bar>
    <v-container
      fluid
      class="pt-3"
    >
      <router-view :weekday="weekday" />
    </v-container>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
      class="m-2"
    >
      <v-card fluid>
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="text-center">
            <h1 class="m-3 mb-0 text-2xl">
              {{ achievement.title }}
            </h1>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          align="center"
          class="h-full"
        >
          <v-col
            class="text-center h-full"
            cols="2"
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
          <v-col cols="8">
            <v-img
              :src="achievement.img"
              class="m-5"
            />
          </v-col>
        </v-row>
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="text-center" />
        </v-row>
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="text-center">
            <h1 class="m-3 mb-0 text-2xl">
              <i class="text-gray-700">
                DID YOU DO IT?
              </i>
            </h1>
          </v-col>
        </v-row>
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
        <v-footer class="text-center text-sm text-gray-700">
          <v-row
            justify="center"
            align="center"
          >
            <v-col class="text-center">
              REWARDS
            </v-col>
          </v-row>
        </v-footer>
        <v-footer>
          <v-row
            align="center"
            class="m-3 text-center"
          >
            <v-col
              class="h-full"
              cols="4"
            >
              <h1 class="text-2xl text-red-500">
                <v-icon
                  size="large"
                  start
                  color="red-lighten-1"
                >
                  fal fa-hand-holding-heart
                </v-icon>
                {{ achievement.ap }}
                <small class="text-red-900">
                  AP
                </small>
              </h1>
            </v-col>
            <v-col
              class="h-full"
              cols="4"
            >
              <h1 class="text-2xl text-orange-500">
                <v-icon
                  size="large"
                  start
                  color="orange-lighten-1"
                >
                  fal fa-hand-holding-usd
                </v-icon>
                {{ achievement.gp }}
                <small class="text-orange-900">
                  GP
                </small>
              </h1>
            </v-col>
            <v-col
              class="h-full"
              cols="4"
            >
              <h1 class="text-2xl text-blue-500">
                <v-icon
                  size="large"
                  start
                  color="blue-lighten-1"
                >
                  fal fa-hand-holding-magic
                </v-icon>
                {{ achievement.xp }}
                <small class="text-blue-900 text-sm">
                  XP
                </small>
              </h1>
            </v-col>
          </v-row>
        </v-footer>
      </v-card>
    </v-dialog>
  </v-main>
</template>
<script lang="ts" src="./xp-my-achievements.controller.ts"></script>
<style lang="scss" src="./_xp-my-achievements.scss"></style>
