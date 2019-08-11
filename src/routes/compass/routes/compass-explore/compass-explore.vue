<template>
  <v-app
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <v-alert
      :value="true"
      color="blue"
      type="info"
      class="step-2"
    >
      Below are the different cardinal areas that extend COMPASS.
      Each come with their own set of unique tools aimed at maximizing productivity,
      while also minimizing time spent managing content.
      Here, you can easily activate or deactivate them.
    </v-alert>
    <v-layout
      d-flex
      row
      wrap
      fill-height
    >
      <v-flex
        v-for="(plugin, php) in plugins"
        :key="php"
        d-flex
        xs12
        sm6
      >
        <v-card class="plugin ma-2">
          <v-btn
            small
            v-if="plugin.Name != 'COMPASS'"
            @click="togglePlugin(this,plugin)"
            :color="plugin.isActivated ? 'green' : ''"
            class="activate-btn"
          >
            <span v-if="plugin.isActivated">
              Disable

              <v-icon
                right
                small
              >
                fa-toggle-on
              </v-icon>
            </span>
            <span v-else>
              Enable
              <v-icon
                small
                right
              >
                fa-toggle-off
              </v-icon>
            </span>
          </v-btn>
          <v-layout
            justify-center
            align-center
            fill-height
          >
            <v-flex xs4>
              <img
                :src="plugin.icon"
                :class="{
                  'm-3': true,
                  pluginImage: true,
                  deactivated: !plugin.isActivated
                }"
              >
            </v-flex>
            <v-flex
              xs8
              class="pl-3"
            >
              <v-btn
                :disabled="!plugin.isActivated"
                class=" learn-more"
                @click="$router.push({
                  path : plugin.TextDomain.replace('xophz-compass-', '/'),
                  hash : 'billboard',
                  offset : { y : 15 }
                })"
              >
                Go
                <v-icon
                  right
                  color="success"
                >
                  fad fa-traffic-light-go
                </v-icon>
              </v-btn>
              <h3 class="headline mb-0">
                <router-link
                  :to="{
                    path : plugin.TextDomain.replace('xophz-compass-', ''),
                    hash : 'billboard',
                    offset : { y : 15 }
                  }"
                />
                <div class="headline v-title">
                  {{ plugin.Name }}
                </div>
              </h3>
              <v-subheader text-right>
                {{ plugin.Version }}
                by
                {{ plugin.Author }}
              </v-subheader>
              <div class="v-subhead mr-3">
                {{ plugin.Description }}
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      class="grey--text"
    >
      <v-avatar>
        <v-img
          :src="snack.img"
          :class="{ deactivated : snack.gray }"
        />
      </v-avatar>
      &nbsp;
      {{ snack.text }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>
<script src="./compass-explore.controller.js"></script>
<style lang="scss" src="./_compass-explore.scss"></style>
