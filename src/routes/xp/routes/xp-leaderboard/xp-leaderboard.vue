<template>
  <v-main
    :id="$options.name"
    :class="$options.name"
    theme="dark"
  >
    <v-app-bar color="#5D3369">
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
      class="pt-3"
    >
      <v-row
        justify="center"
        align="center"
        class="h-full"
      >
        <v-col
          v-if="!currentPlayer.birthdate"
          cols="12"
          sm="6"
          md="4"
          class="pb-2"
        >
          <v-card
            class="m-5 h-full"
            color="green"
            theme="dark"
          >
            <v-row
              justify="center"
              align="center"
              class="p-3 h-full"
            >
              <v-col
                cols="auto"
                class="text-center"
              >
                <v-card-title>
                  Press
                  Start
                  to Join
                </v-card-title>
                <v-btn @click="startPlayerDialog = true">
                  <v-icon>
                    fa-controller
                  </v-icon>
                  Start
                </v-btn>
                <!-- {{ currentPlayer }} -->
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          v-for="(player, p) in players"
          :key="p"
          cols="12"
          sm="6"
          md="4"
          class="pb-2"
        >
          <v-card
            class="m-5"
            theme="dark"
          >
            <v-row
              justify="center"
              align="center"
              class="p-3"
            >
              <v-col class="flex-grow">
                <v-row>
                  <v-col>
                    <v-avatar start>
                      <v-img :src="player.avatar" />
                    </v-avatar>
                    <v-card-title>
                      <h1 class="text-2xl m-0">
                        {{ player.user_login }}
                      </h1>
                    </v-card-title>
                  </v-col>
                  <v-col class="text-right">
                    <v-chip
                      class="m-2"
                      color="green"
                    >
                      Level
                      <v-avatar
                        end
                        class="bg-green-900 text-white"
                      >
                        {{ player.level }}
                      </v-avatar>
                    </v-chip>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row
              justify="center"
              align="center"
            >
              <v-col cols="auto">
                <v-chip
                  class="m-1"
                  color="red"
                >
                  <v-avatar
                    start
                    class="bg-red-900"
                  >
                    <small class="text-sm">AP</small>
                  </v-avatar>
                  {{ player.ap }}
                </v-chip>
                <v-chip
                  class="m-1"
                  size="small"
                  color="red"
                >
                  D
                  <v-avatar
                    end
                    class="bg-red-900"
                  >
                    <small class="text-sm">
                      {{ player.ap }}
                    </small>
                  </v-avatar>
                </v-chip>
                <v-chip
                  size="small"
                  class="m-1"
                  color="red"
                >
                  W
                  <v-avatar
                    end
                    class="bg-red-900"
                  >
                    <small class="text-sm">
                      {{ player.ap }}
                    </small>
                  </v-avatar>
                </v-chip>
                <v-chip
                  size="small"
                  class="m-1"
                  color="red"
                >
                  M
                  <v-avatar
                    end
                    class="bg-red-900"
                  >
                    <small class="text-sm">
                      {{ player.ap }}
                    </small>
                  </v-avatar>
                </v-chip>
                <v-chip
                  size="small"
                  class="m-1"
                  color="red"
                >
                  Y
                  <v-avatar
                    end
                    class="bg-red-900"
                  >
                    <small class="text-sm">
                      {{ player.ap }}
                    </small>
                  </v-avatar>
                </v-chip>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-chip
                class="m-2"
                color="blue"
              >
                <v-avatar
                  start
                  class="bg-blue-900"
                >
                  <small class="text-sm">XP</small>
                </v-avatar>
                {{ player.xp }}
              </v-chip>
              <v-spacer />
              <v-chip
                class="m-2"
                color="orange"
              >
                <v-avatar
                  start
                  class="bg-orange-900"
                >
                  <small class="text-sm">GP</small>
                </v-avatar>
                {{ player.gp }}
              </v-chip>
              <v-spacer />
              <v-chip
                class="m-2"
                color="blue"
              >
                <v-avatar
                  start
                  class="bg-green-900"
                >
                  {{ player.level + 1 }}
                </v-avatar>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="startPlayerDialog"
      width="30vw"
    >
      <v-card>
        <v-toolbar
          color="grey-darken-4"
          elevation="5"
          theme="dark"
        >
          <v-toolbar-title>
            When is your birthdate?
          </v-toolbar-title>
        </v-toolbar>
        <v-row>
          <v-col
            cols="auto"
            class="text-center mx-auto"
          >
            <v-date-picker
              v-model="birthdate"
              class="elevation-0"
            />
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn
            color="red"
            variant="text"
          >
            Nevermind
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            @click="startPlayer"
          >
            {{ birthdate }}
            <v-icon
              end
              size="small"
            >
              fad fa-check
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>
<script lang="ts" src="./xp-leaderboard.controller.ts"></script>
<style lang="scss" src="./_xp-leaderboard.scss"></style>
