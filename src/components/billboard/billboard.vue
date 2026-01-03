<template>
  <div
    id="billboard"
    class="billboard"
  >
    <!-- <nprogress-container /> -->
    <v-card
      theme="dark"
      class="widget p-0 border-0 bg-transparent"
      elevation="0"
    >
      <v-fade-transition mode="out-in">
        <v-row
          v-if="currentUser && currentUser.caps && currentUser.caps.administrator && false === userMask"
          key="adminBillboard"
          justify="center"
          align="center"
          class="h-full m-0"
        >
          <v-col
            cols="12"
            sm="2"
            class="flex items-center justify-center p-4"
          >
            <v-avatar
              size="120"
              class="border-4 border-gray-800 shadow-2xl"
            >
              <v-img
                v-if="plugin && plugin.icon"
                :src="plugin.icon"
                alt="Plugin Icon"
              />
            </v-avatar>
          </v-col>
          <v-col
            cols="12"
            sm="8"
            class="flex flex-col justify-center px-6 py-4"
          >
            <div :class="!isBillboardMini ? 'mini-billboard': 'open-billboard'">
              <h1
                v-if="billboard && billboard.h1"
                class="text-4xl font-black mb-2 tracking-tight text-white drop-shadow-md"
              >
                {{ billboard.h1 }}
              </h1>
              <h1
                v-else-if="plugin"
                class="text-4xl font-black mb-2 tracking-tight text-white drop-shadow-md"
              >
                {{ plugin.Name }}
              </h1>
              <blockquote
                v-if="billboard && billboard.block"
                class="text-lg text-gray-300 italic border-l-4 border-primary pl-4"
              >
                {{ billboard.block }}
              </blockquote>
              <blockquote
                v-else-if="plugin"
                class="text-lg text-gray-300 italic border-l-4 border-primary pl-4"
              >
                {{ plugin.Description }}
              </blockquote>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="2"
            class="flex items-center justify-center"
          >
            <div class="flex flex-col gap-1 w-full p-2">
              <v-btn
                v-for="(child, c) in billboardSubroutes"
                :key="c"
                block
                size="x-small"
                variant="tonal"
                color="blue-grey-lighten-4"
                class="text-left justify-start font-bold lowercase opacity-60 hover:opacity-100"
                @click="$router.push(child.path)"
                rounded="sm"
              >
                {{ child.name }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row
          v-else-if="!currentUser || !currentUser.caps || !currentUser.caps.administrator || userMask"
          key="userBillboard"
          justify="center"
          align="center"
          class="h-full m-0"
        >
          <v-col
            cols="12"
            sm="2"
            class="flex items-center justify-center p-4"
          >
            <v-avatar
              size="120"
              class="border-4 border-gray-800 shadow-2xl"
            >
              <v-img
                v-if="currentUser"
                :src="currentUser.avatar"
                alt="User Avatar"
              />
            </v-avatar>
          </v-col>
          <v-col
            cols="12"
            sm="8"
            class="flex flex-col justify-center px-6 py-4"
          >
            <div :class="!isBillboardMini ? 'mini-billboard': 'open-billboard'">
              <h1
                v-if="currentUser && currentUser.data"
                class="text-4xl font-black mb-2 tracking-tight text-white drop-shadow-md"
              >
                {{ currentUser.data.display_name }}
                <small class="text-lg font-normal opacity-50 block sm:inline">
                  a.k.a. {{ currentUser.data.user_login }}
                </small>
              </h1>
              <div class="flex flex-wrap gap-2 mt-4">
                <v-chip
                  v-for="(chip, c) in billboardChips"
                  :key="c"
                  :color="chip.color || 'white'"
                  variant="tonal"
                  size="small"
                  class="font-bold border border-white/10"
                >
                  {{ chip.text }}
                  <template v-slot:append>
                    <v-icon
                      size="small"
                      class="ml-1"
                    >{{ chip.icon }}</v-icon>
                  </template>
                </v-chip>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="2"
            class="flex items-center justify-center border-l border-white/5"
          >
            <div class="flex flex-col gap-1 w-full p-2">
              <v-btn
                v-for="(child, c) in billboardSubroutes"
                :key="c"
                block
                size="x-small"
                variant="tonal"
                color="blue-grey-lighten-4"
                class="text-left justify-start font-bold lowercase opacity-60 hover:opacity-100"
                @click="$router.push(child.path)"
                rounded="sm"
              >
                {{ child.name }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-card>
  </div>
</template>
<script lang="ts" src="./billboard.controller.ts"></script>
<style lang="scss" src="./_billboard.scss"></style>
