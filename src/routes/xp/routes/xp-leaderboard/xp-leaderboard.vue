<template>
  <v-content
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <v-app-bar
      app
      clipped-left
      color="#5D3369"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <v-toolbar-title>
        {{ $route.name }}
      </v-toolbar-title>
      <v-img :src="plugin.icon" />
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-switch
          v-model="userMask"
          icon="fa-mask"
          label="Masquerade"
        />
      </v-toolbar-items>
    </v-app-bar>
    <v-container
      fluid
      grid-list-md
      pt-3
    >
      <v-layout
        row
        wrap
        justify-center
        align-center
        fill-height
      >
        <v-flex
          v-if="!currentPlayer.birthdate"
          xs12
          sm6
          md4
          pb-2
        >
          <v-card
            ma-5
            color="green"
            dark
            fill-height
          >
            <v-layout
              pa-3
              justify-center
              align-center
              fill-height
            >
              <v-flex
                shrink
                text-center
              >
                <v-card-title>
                  Press
                  Start
                  to Join
                </v-card-title>
                <v-btn
                  @click="startPlayerDialog = true"
                >
                  <v-icon>
                    fa-controller
                  </v-icon>
                  Start
                </v-btn>
                <!-- {{ currentPlayer }} -->
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex
          v-for="(player, p) in players"
          :key="p"
          xs12
          sm6
          md4
          pb-2
        >
          <v-card
            ma-5
            dark
          >
            <v-layout
              pa-3
              justify-center
              align-center
            >
              <v-flex grow>
                <v-layout>
                  <v-flex>
                    <v-avatar
                      left
                    >
                      <v-img
                        :src="player.avatar"
                      />
                    </v-avatar>
                    <v-card-title primary-title>
                      <h1 class="headline m-0">
                        {{ player.user_login }}
                      </h1>
                    </v-card-title>
                  </v-flex>
                  <v-flex
                    text-right
                  >
                    <v-chip
                      class="ma-2"
                      color="green"
                      text-color="black"
                    >
                      Level
                      <v-avatar
                        right
                        class="green darken-4 white--text"
                        text-color="white"
                      >
                        {{ player.level }}
                      </v-avatar>
                    </v-chip>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout
              justify-center
              align-center
            >
              <v-flex shrink>
                <v-chip
                  class="ma-1"
                  color="red"
                  text-color="white"
                >
                  <v-avatar
                    left
                    class="red darken-4"
                  >
                    <small class="small--text">AP</small>
                  </v-avatar>
                  {{ player.ap }}
                </v-chip>
                <v-chip
                  class="ma-1"
                  small
                  color="red"
                  text-color="white"
                >
                  D
                  <v-avatar
                    right
                    class="red darken-4"
                  >
                    <small class="small--text">
                      {{ player.ap }}
                    </small>
                  </v-avatar>
                </v-chip>
                <v-chip
                  small
                  class="ma-1"
                  color="red"
                  text-color="white"
                >
                  W
                  <v-avatar
                    right
                    class="red darken-4"
                  >
                    <small class="small--text">
                      {{ player.ap }}
                    </small>
                  </v-avatar>
                </v-chip>
                <v-chip
                  small
                  class="ma-1"
                  color="red"
                  text-color="white"
                >
                  M
                  <v-avatar
                    right
                    class="red darken-4"
                  >
                    <small class="small--text">
                      {{ player.ap }}
                    </small>
                  </v-avatar>
                </v-chip>
                <v-chip
                  small
                  class="ma-1"
                  color="red"
                  text-color="white"
                >
                  Y
                  <v-avatar
                    right
                    class="red darken-4"
                  >
                    <small class="small--text">
                      {{ player.ap }}
                    </small>
                  </v-avatar>
                </v-chip>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-chip
                class="ma-2"
                color="blue"
                text-color="white"
              >
                <v-avatar
                  left
                  class="blue darken-4"
                >
                  <small class="small--text">XP</small>
                </v-avatar>
                {{ player.xp }}
              </v-chip>
              <v-spacer />
              <v-chip
                class="ma-2"
                color="orange"
                text-color="white"
              >
                <v-avatar
                  left
                  class="orange darken-4"
                >
                  <small class="small--text">GP</small>
                </v-avatar>
                {{ player.gp }}
              </v-chip>
              <v-spacer />
              <v-chip
                class="ma-2"
                color="blue"
                text-color="white"
              >
                <v-avatar
                  left
                  class="green darken-4"
                >
                  {{ player.level + 1 }}
                </v-avatar>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog
      width="30vw"
      v-model="startPlayerDialog"
    >
      <v-card>
        <v-toolbar
          color="grey darken-4"
          class="elevation-5"
          dark
        >
          <v-toolbar-title>
            When is your birthdate?
          </v-toolbar-title>
        </v-toolbar>
        <v-layout>
          <!-- <v-flex -->
          <!--   xs10 -->
          <!--   text-center -->
          <!-- > -->
          <!--   <v-card-title> -->
          <!--     {{ plugin.Name }} -->
          <!--   </v-card-title> -->
          <!--   {{ plugin.Description }} -->
          <!-- </v-flex> -->
          <!-- <v-flex xs2> -->
          <!--   <v-img -->
          <!--     class="ma-5" -->
          <!--     :src="plugin.icon" -->
          <!--   /> -->
          <!-- </v-flex> -->
          <v-flex
            shrink
            text-center
          >
            <v-date-picker
              landscape
              class="elevation-0"
              elevation="0"
              v-model="birthdate"
            />
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-btn
            color="red"
            text
          >
            Nevermind
          </v-btn>
          <v-spacer />
          <v-btn
            @click="startPlayer"
            color="primary"
          >
            {{ birthdate|moment("ddd, MMM DD YYYY") }}
            <v-icon
              right
              small
            >
              fad fa-check
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>
<script src="./xp-leaderboard.controller.js"></script>
<style lang="scss" src="./_xp-leaderboard.scss"></style>
