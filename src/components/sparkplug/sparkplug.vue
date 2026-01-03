<template>
  <div
    id="sparkplug"
    class="sparkplug"
  >
    <v-card theme="dark">
      <v-sheet
        class="v-sheet--offset mx-auto"
        :color="color"
        elevation="12"
        max-width="calc(100% - 32px)"
      >
        <v-sparkline
          :labels="labels"
          :model-value="value"
          color="white"
          :auto-draw="autoDraw"
          label-size="12"
          line-width="2"
          padding="16"
        />
      </v-sheet>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-row
              justify="center"
              align="center"
            >
              <v-col cols="auto">
                <v-icon
                  :color="color"
                  size="4rem"
                >
                  {{ icon }}
                </v-icon>
              </v-col>
              <v-col class="text-center">
                <v-card-subtitle>
                  {{ subheader }}
                </v-card-subtitle>
                <h2>
                  {{ header }}
                </h2>
                <div class="subheading font-light text-gray-400">
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
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-divider class="my-2" />
            <v-timeline
              density="compact"
              side="end"
            >
              <v-timeline-item
                v-for="(line, l) in items"
                :key="l"
                :dot-color="color"
                :icon="line.icon"
                size="small"
              >
                <div class="flex justify-between w-full">
                  <div>{{ line.line }}</div>
                  <div
                    v-if="!line.currency"
                    class="font-bold"
                  >
                    {{ line.opposite }}
                  </div>
                  <div
                    v-else
                    class="font-bold"
                  >
                    {{ formatCurrency(line.opposite) }}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
            <slot />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>
<script lang="ts" src="./sparkplug.controller.ts"></script>
<style lang="scss" src="./_sparkplug.scss"></style>
