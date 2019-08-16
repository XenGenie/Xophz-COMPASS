<template>
  <v-layout
    class="xp-my-accessories-grid pa-0"
    row
    wrap
  >
    <v-flex
      v-for="(accessory, key) in accessories"
      :key="key"
      xs6
      sm3
    >
      <v-hover>
        <v-card class="pt-3 m-1">
          <v-img
            v-if="accessory.img"
            :src="accessory.img"
          >
            <v-container
              fill-height
              fluid
            >
              <v-layout fill-height>
                <v-flex
                  xs12
                  align-bottom
                  align-end
                  flexbox
                >
                  <span class="headline" />
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title
            primary-title
            class="mb-0"
          >
            <v-layout
              justify-center
              align-center
            >
              <v-flex text-center>
                <h4
                  text-center
                  class="mb-0"
                >
                  {{ accessory.title }}
                </h4>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-actions>
            <v-layout>
              <v-flex text-center>
                <v-btn color="orange">
                  -{{ accessory.gp_cost|currency(0,'') }}
                  GP
                  <v-icon
                    small
                    right
                  >
                    fa fa-plus
                  </v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>
<script src="./xp-my-accessories-grid.controller.js"></script>
<style lang="scss" src="./_xp-my-accessories-grid.scss"></style>
