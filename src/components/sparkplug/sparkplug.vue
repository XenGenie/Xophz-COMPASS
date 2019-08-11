<template>
  <div
    id="sparkplug"
    class="sparkplug"
  >
    <v-card
      dark
    >
      <v-sheet
        class="v-sheet--offset mx-auto"
        :color="color"
        elevation="12"
        max-width="calc(100% - 32px)"
      >
        <v-sparkline
          :labels="labels"
          :value="value"
          color="white"
          :auto-draw="autoDraw"
          label-size="12"
          line-width="2"
          padding="16"
        />
      </v-sheet>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-layout
              justify-center
              align-center
            >
              <v-flex shrink>
                <v-icon
                  :color="color"
                  size="4rem"
                >
                  {{ icon }}
                </v-icon>
              </v-flex>
              <v-flex text-center>
                <v-subheader>
                  {{ subheader }}
                </v-subheader>
                <h2>
                  {{ header }}
                </h2>
                <div class="subheading font-weight-light grey--text">
                  +
                  <span class="text-success">
                    {{ plugSpark }}
                  </span>
                  {{ plug }}
                  <v-icon
                    class="mr-2"
                    :color="color"
                  >
                    {{ plugIcon }}
                  </v-icon>
                </div>
              </v-flex>
            </v-layout>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider class="my-2" />
            <v-timeline>
              <v-timeline-item
                v-for="(line, l) in items"
                :key="l"
                :color="color"
                left
                :icon="line.icon"
              >
                <v-subheader>
                  {{ line.line }}
                </v-subheader>
                <h3
                  slot="opposite"
                  class="title"
                  v-if="!line.currency"
                >
                  {{ line.opposite }}
                </h3>
                <h3
                  slot="opposite"
                  v-else
                  class="title"
                >
                  {{ line.opposite|currency }}
                </h3>
              </v-timeline-item>
            </v-timeline>
            <slot />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>
<script src="./sparkplug.controller.js"></script>
<style lang="scss" src="./_sparkplug.scss"></style>
