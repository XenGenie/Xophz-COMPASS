<template>
  <v-container class="xp-my-config-profile">
    <v-timeline>
      <v-timeline-item
        color="green"
        large
        icon="fa fa-hand-holding-seedling"
      />
      <v-timeline-item
        left
        large
      >
        <template v-slot:icon>
          <v-avatar>
            <img :src="currentUser.avatar">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span class="headline font-weight-bold">
            AGE: {{ player.age }}
            LVL : {{ player.level }}
          </span>
        </template>
        <v-card class="elevation-2">
          <v-layout>
            <v-flex xs4>
              <v-img
                :src="currentUser.avatar"
              />
            </v-flex>
            <v-flex>
              <v-card-title class="headline">
                {{ currentUser.data.display_name }}
                a.k.a
                {{ currentUser.data.user_login }}
                <small class="grey--text">
                  {{ currentUser.data.user_email }}
                </small>
              </v-card-title>
              <v-card-text />
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer />
            <v-btn
              @click="birthdateDialog = true"
            >
              {{ player.birthdate|moment('MMMM DD YYYY') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
      <!-- <v-timeline-item -->
      <!--   color="red" -->
      <!-- > -->
      <!--   <template v-slot:opposite> -->
      <!--     <span>Total AP</span> -->
      <!--   </template> -->
      <!--   <v-card class="elevation-2" color="red"> -->
      <!--     <v-layout justify-center align-center fill-height class="m-3"> -->
      <!--       <v-flex text-left class="m-3 mt-4 mb-4"> -->
      <!--         <h1 text-center> -->
      <!--           AP -->
      <!--         </h1> -->
      <!--       </v-flex> -->
      <!--       <v-flex grow text-center> -->
      <!--         <h1 text-center> -->
      <!--           {{user.ap}} -->
      <!--         </h1> -->
      <!--       </v-flex> -->
      <!--       <v-flex text-right> -->
      <!--           <v-icon -->
      <!--           size="4rem" -->
      <!--             > -->
      <!--             fal fa-hand-holding-heart -->
      <!--           </v-icon> -->
      <!--       </v-flex> -->
      <!--     </v-layout> -->
      <!--   </v-card> -->
      <!-- </v-timeline-item> -->
      <!-- <v-timeline-item -->
      <!--   color="blue" -->
      <!--   left -->
      <!-- > -->
      <!--   <template v-slot:opposite> -->
      <!--     <span>Total XP</span> -->
      <!--   </template> -->
      <!--   <v-card class="elevation-2" color="blue"> -->
      <!--     <v-layout justify-center align-center fill-height class="m-3"> -->
      <!--       <v-flex text-left class="m-3 mt-4 mb-4"> -->
      <!--         <h1 text-center> -->
      <!--           XP -->
      <!--         </h1> -->
      <!--       </v-flex> -->
      <!--       <v-flex grow text-center> -->
      <!--         <h1 text-center> -->
      <!--           {{user.xp}} -->
      <!--         </h1> -->
      <!--       </v-flex> -->
      <!--       <v-flex text-right> -->
      <!--           <v-icon -->
      <!--           size="4rem" -->
      <!--             > -->
      <!--             fal fa-hand-holding-magic -->
      <!--           </v-icon> -->
      <!--       </v-flex> -->
      <!--     </v-layout> -->
      <!--   </v-card> -->
      <!-- </v-timeline-item> -->
      <!-- <v-timeline-item -->
      <!--   color="orange" -->
      <!-- > -->
      <!--   <template v-slot:opposite> -->
      <!--     <span>Total GP</span> -->
      <!--   </template> -->
      <!--   <v-card class="elevation-2" color="orange"> -->
      <!--     <v-layout justify-center align-center fill-height class="m-3"> -->
      <!--       <v-flex text-left class="m-3 mt-4 mb-4"> -->
      <!--         <h1 text-center> -->
      <!--           GP -->
      <!--         </h1> -->
      <!--       </v-flex> -->
      <!--       <v-flex grow text-center> -->
      <!--         <h1 text-center> -->
      <!--           {{user.gp}} -->
      <!--         </h1> -->
      <!--       </v-flex> -->
      <!--       <v-flex text-right> -->
      <!--           <v-icon -->
      <!--           size="4rem" -->
      <!--             > -->
      <!--             fal fa-hand-holding-magic -->
      <!--           </v-icon> -->
      <!--       </v-flex> -->
      <!--     </v-layout> -->
      <!--   </v-card> -->
      <!-- </v-timeline-item> -->
      <v-timeline-item
        v-for="stamp in log"
        :key="stamp.time"
        color="test lighten-2"
        large
      >
        <template v-slot:icon>
          <v-avatar>
            <img :src="stamp.thumbnail">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <h2 class="headline">
            <span v-html="stamp.title">
              {{ stamp.title }}
            </span>
            <br>
            <small class="small--text grey--text">
              {{ stamp.time|moment('MMMM DD YYYY hh:mm') }}
            </small>
          </h2>
          <span />
        </template>
        <v-card class="elevation-2">
          <v-card-text>
            <v-layout
              justify-center
              align-center
              text-center
            >
              <v-flex class="blue--text">
                <v-icon>
                  fa fa-hand-holding-magic
                </v-icon>
                <br>
                {{ stamp.xp }}
              </v-flex>
              <v-flex class="red--text">
                <v-icon>
                  fa fa-hand-holding-heart
                </v-icon>
                <br>
                {{ stamp.ap }}
              </v-flex>
              <v-flex class="orange--text">
                <v-icon>
                  fa fa-hand-holding-usd
                </v-icon>
                <br>
                {{ stamp.gp }}
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-dialog
      width="30vw"
      v-model="birthdateDialog"
    >
      <v-card>
        <v-toolbar
          color="grey darken-4"
          class="elevation-5"
          dark
        >
          <v-toolbar-title>
            When is your birthdate?
          </v-toolbar-title>
        </v-toolbar>
        <v-layout>
          <!-- <v-flex -->
          <!--   xs10 -->
          <!--   text-center -->
          <!-- > -->
          <!--   <v-card-title> -->
          <!--     {{ plugin.Name }} -->
          <!--   </v-card-title> -->
          <!--   {{ plugin.Description }} -->
          <!-- </v-flex> -->
          <!-- <v-flex xs2> -->
          <!--   <v-img -->
          <!--     class="ma-5" -->
          <!--     :src="plugin.icon" -->
          <!--   /> -->
          <!-- </v-flex> -->
          <v-flex
            shrink
            text-center
          >
            <v-date-picker
              landscape
              class="elevation-0"
              elevation="0"
              v-model="birthdate"
            />
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-btn
            @click="birthdateDialog = false"
            color="red"
            text
          >
            Nevermind
          </v-btn>
          <v-spacer />
          <v-btn
            @click="saveBirthdate"
            color="primary"
          >
            {{ birthdate|moment("ddd, MMM DD YYYY") }}
            <v-icon
              right
              small
            >
              fad fa-check
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script src="./xp-my-config-profile.controller.js"></script>
<!-- <style lang="scss" src="./_xp-my-config-profile.scss"></style> -->
