<template>
  <div
    :id="$options.name"
    :class="$options.name"
  >
    <v-container fluid>
      <v-row
        justify="center"
        align="center"
        class="h-full"
      >
        <v-col
          cols="auto"
          class="p-2 flex text-center"
        >
          <v-alert
            color="blue"
            type="info"
            icon="fad fa-compass"
            class="step-2"
          >
            Below are different cardinal areas of COMPASS.
            Navigate to them at any time by pressing the
            <v-btn
              size="small"
              class="mx-2"
              @click="bottomSheet = !bottomSheet"
            >
              <v-icon
                start
                size="small"
              >
                fad fa-compass
              </v-icon>
              COMPASS
            </v-btn>
            button at the top of the page.
          </v-alert>
        </v-col>
        <v-col
          v-for="(plugin, php) in plugins"
          :key="php"
          class="flex"
          cols="12"
          sm="6"
        >
          <v-card class="plugin ma-2">
            <v-btn
              v-if="plugin.Name != 'COMPASS'"
              size="small"
              :color="plugin.isActivated ? 'green' : ''"
              class="activate-btn"
              @click="togglePlugin(this,plugin)"
            >
              <span v-if="plugin.isActivated">
                Disable
                <v-icon
                  end
                  size="small"
                >
                  fa-toggle-on
                </v-icon>
              </span>
              <span v-else>
                Enable
                <v-icon
                  size="small"
                  end
                >
                  fa-toggle-off
                </v-icon>
              </span>
            </v-btn>
            <v-row
              justify="center"
              align="center"
              class="h-full"
            >
              <v-col cols="auto">
                <img
                  :src="plugin.icon"
                  :class="{
                    'm-3': true,
                    pluginImage: true,
                    deactivated: !plugin.isActivated
                  }"
                >
              </v-col>
              <v-col class="ml-auto">
                <v-btn
                  :disabled="!plugin.isActivated"
                  class="learn-more"
                  @click="goToPlugin(plugin)"
                >
                  Go
                  <v-icon
                    end
                    color="success"
                  >
                    fad fa-traffic-light-go
                  </v-icon>
                </v-btn>
                <h3 class="text-2xl mb-0">
                  <router-link :to="getPluginRoute(plugin)" />
                  <div class="text-xl font-bold">
                    {{ plugin.Name }}
                  </div>
                </h3>
                <v-list-subheader class="justify-end">
                  {{ plugin.Version }}
                  by
                  {{ plugin.Author }}
                </v-list-subheader>
                <div class="text-sm text-gray-400 mr-3">
                  {{ plugin.Description }}
                </div>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer />
              <v-btn size="small">
                <span>
                  Enable
                  <v-icon
                    size="small"
                    end
                  >
                    fa-toggle-off
                  </v-icon>
                </span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="snackbar"
        class="text-gray-400"
      >
        <v-avatar>
          <v-img
            :src="snack.img"
            :class="{ deactivated : snack.gray }"
          />
        </v-avatar>
        &nbsp;
        {{ snack.text }}
        <template #actions>
          <v-btn
            color="pink"
            variant="text"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>
<script lang="ts" src="./compass-explore.controller.ts"></script>
<style lang="scss" src="./_compass-explore.scss"></style>
