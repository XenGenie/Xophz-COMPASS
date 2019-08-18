<template>
  <v-content
    :id="$options.name"
    :class="$options.name"
  >
    <v-container fluid>
      <v-layout
        justify-center
        align-center
        wrap
        fill-height
      >
        <v-flex
          shrink
          pa-2
          d-flex
          text-center
        >
          <v-alert
            :value="true"
            color="blue"
            type="info"
            large
            icon="fad fa-compass"
            class="step-2"
          >
            Below are different cardinal areas of COMPASS.
            Navigate to them at any time by pressing the
            <v-btn
              @click="bottomSheet = !bottomSheet"
              small
            >
              <v-icon
                left
                small
              >
                fad fa-compass
              </v-icon>
              COMPASS
            </v-btn>
            button at the top of the page.
            <!-- Take a minute to look around. Click GO to start exploring. -->
          </v-alert>
        </v-flex>
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
              <v-flex
                shrink
              >
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
                offset-xs5
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
    </v-container>
    <!-- <v-dialog -->
    <!--   v-model="welcomeDialog" -->
    <!--   width="33vw" -->
    <!-- > -->
    <!--   <v-card> -->
    <!--     <v-toolbar -->
    <!--       class="headline grey darken-4" -->
    <!--     > -->
    <!--       <v-card-title -->
    <!--         primary-title -->
    <!--       > -->
    <!--         It's Dangerous to Go Alone! -->
    <!--       </v-card-title> -->
    <!--     </v-toolbar> -->
    <!--     <v-card-title> -->
    <!--     </v-card-title> -->
    <!--   </v-card> -->
    <!-- </v-dialog> -->
  </v-content>
</template>
<script src="./compass-explore.controller.js"></script>
<style lang="scss" src="./_compass-explore.scss"></style>
