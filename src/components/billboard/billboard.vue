<template>
  <div
    id="billboard"
    class="billboard"
  >
    <nprogress-container />
    <v-card
      dark
      class="widget p-0"
    >
      <v-scroll-x-transition
        :duration="{ enter: 800, leave: 0 }"
        mode="out-in"
      >
        <v-layout
          v-if="currentUser.caps.administrator && false === userMask"
          key="adminBillboard"
          justify-center
          align-center
          fill-height
        >
          <v-flex xs2>
            <v-layout
              class="overflow-hidden"
              justify-center
              align-center
              fill-height
            >
              <img
                :src="plugin.icon"
                class="billboard-img"
              >
            </v-layout>
          </v-flex>
          <v-flex
            offset-x2
            grow
          >
            <div :class="!mini ? 'mini-billboard': 'open-billboard'">
              <h1 v-if="billboard.h1">
                {{ billboard.h1 }}
              </h1>
              <h1 v-else>
                {{ plugin.Name }}
              <!-- <template v-for="(breadcrumb, i) in breadcrumbs"> -->
              <!--     <small> -->
              <!--     </small> -->
              <!-- </template> -->
              </h1>
              <blockquote
                v-if="billboard.block"
                class="p-4 pt-0"
              >
                {{ billboard.block }}
              </blockquote>
              <blockquote
                v-else
                class="p-4 pt-0"
              >
                {{ plugin.Description }}
              <!-- <v-chip dark> -->
              <!--   <v-avatar> -->
              <!--     <v-icon> -->
              <!--       fal fa-compass -->
              <!--     </v-icon> -->
              <!--   </v-avatar> -->
              <!--   Questions? Email: -->
              <!--   {{plugin.Author}} -->
              <!-- </v-chip> -->
              <!-- <v-chip color="orange" text-color="white"> -->
              <!--   Premium -->
              <!--   <v-icon right>star</v-icon> -->
              <!-- </v-chip> -->
              </blockquote>
            </div>
          </v-flex>
          <v-flex
            shrink
          >
            <nav-drawer
              @miniChanged="setMini"
              is-billboard-nav
              :value="true"
              :mini="mini"
              dense
            />
          </v-flex>
        </v-layout>
        <v-layout
          v-else-if="!currentUser.caps.administrator || userMask"
          key="userBillboard"
          justify-center
          align-center
          fill-height
        >
          <v-flex xs2>
            <v-layout
              class="overflow-hidden"
              justify-center
              align-center
              fill-height
            >
              <img
                :src="currentUser.avatar"
                class="user-avatar"
              >
            </v-layout>
          </v-flex>
          <v-flex xs8>
            <div :class="!mini ? 'mini-billboard': 'open-billboard'">
              <h1>
                {{ currentUser.data.display_name }}
                <!-- <template v-for="(breadcrumb, i) in breadcrumbs"> -->
                <!--     <small> -->
                <!--     </small> -->
                <!-- </template> -->
                <small>
                  a.k.a.
                  {{ currentUser.data.user_login }}
                </small>
              </h1>
              <blockquote class="p-4 pt-0">
                <br>
                <v-chip
                  dark
                  v-for="(chip, c) in billboardChips"
                  :key="c"
                  text-color="white"
                  :color="chip.color"
                >
                  {{ chip.text }}
                  <v-icon right>
                    {{ chip.icon }}
                  </v-icon>
                </v-chip>
              </blockquote>
            </div>
          </v-flex>
          <v-flex
            xs2
          >
            <nav-drawer
              @miniChanged="setMini"
              is-billboard-nav
              :value="true"
              :mini="mini"
              dense
            />
          </v-flex>
        </v-layout>
      </v-scroll-x-transition>
    </v-card>
  </div>
</template>
<script src="./billboard.controller.js"></script>
<style lang="scss" src="./_billboard.scss"></style>
