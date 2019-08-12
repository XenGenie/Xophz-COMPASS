<template>
  <v-app
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <v-app-bar
      app
      clipped-left
      color="#5D3369"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      &nbsp;
      <v-img :src="plugin.icon" />
      &nbsp;
      <v-toolbar-title>
        {{ $route.name }}
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          icon
          @click="true"
        >
          <v-icon>
            fa-mask
          </v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        grid-list-md
        pt-3
      >
        <v-layout
          row
          wrap
        >
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
                        text-color="white"
                      >
                        Level
                        <v-avatar
                          right
                          class="green darken-4"
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
                    small
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
    </v-content>
  </v-app>
</template>
<script src="./xp-leaderboard.controller.js"></script>
<style lang="scss" src="./_xp-leaderboard.scss"></style>
