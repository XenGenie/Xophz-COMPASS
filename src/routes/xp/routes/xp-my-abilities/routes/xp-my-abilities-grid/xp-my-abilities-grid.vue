<template>
  <v-layout
    class="xp-my-abilities-grid pa-0"
    row
    wrap
  >
    <v-flex
      v-for="(ability, a) in abilities"
      :key="a"
      xs12
      sm4
      md2
    >
      <v-card
        class="pt-3 m-1"
        :class="apToUnlock(ability) > 100 ? 'red darken-4': ''"
      >
        <v-img
          v-if="ability.img"
          :src="ability.img"
          aspect-ratio="1"
          m
        />
        <v-card-title
          primary-title
          class="mb-0"
        >
          <v-layout
            justify-center
            align-center
          >
            <v-flex text-center>
              <h6
                text-center
                class="mb-0"
              >
                {{ ability.title }}
              </h6>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-progress-linear
          color="red"
          class="m-0"
          :value="apToUnlock(ability)"
        />
        <v-footer>
          <v-layout
            justify-center
            align-center
            text-center
          >
            <v-card-title
              primary-title
              text-center
            >
              <h4 text-center>
                <small>
                  {{ ability.ap_to_unlock }}
                  AP &infin;
                  {{ ability.repeat }}
                </small>
              </h4>
            </v-card-title>
          </v-layout>
        </v-footer>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script src="./xp-my-abilities-grid.controller.js"></script>
<style lang="scss" src="./_xp-my-abilities-grid.scss"></style>
