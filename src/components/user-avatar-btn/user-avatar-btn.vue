<template>
  <div class="$options.name">
    <v-menu
      offset-y
      left
      attach=".breadcrumbs"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          small
          id="user-avatar-btn"
          class="user-avatar-btn mx-1"
          v-on="on"
        >
          {{ user.data.user_login }}
            &nbsp;
          <v-avatar
            small
            size="24px"
            right
          >
            <v-img :src="user.avatar" />
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-layout
          justify-center
          align-center
          m-2
          p-2
        >
          <v-flex
            grow
            p-3
            text-right
          >
            <h6>
              {{ user.data.display_name }}
              <br>
              <small>
                {{ user.data.user_email }}
              </small>
            </h6>
          </v-flex>
          <v-flex
            shrink
            text-center
          >
            <v-avatar size="96px">
              <v-img :src="user.avatar" />
            </v-avatar>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <!-- <v-btn -->
          <!--   small -->
          <!--   icon -->
          <!-- > -->
          <!--   <v-icon> -->
          <!--     fa fa-palette -->
          <!--   </v-icon> -->
          <!-- </v-btn> -->
          <v-spacer />
          <v-btn
            small
            icon
            @click="confirmLogout"
          >
            <v-icon color="red">
              fa fa-unlock
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
    <v-dialog
      v-model="logoutDialog"
      width="500"
    >
      <v-card>
        <v-toolbar
          class="headline grey darken-4"
        >
          <v-card-title
            primary-title
          >
            Locking Up? Click Log Off.
          </v-card-title>
        </v-toolbar>
        <v-layout
          justify-center
          align-center
          wrap
        >
          <v-flex
            xs7
            ma-5
          >
            <v-img
              src="/wp-content/plugins/xophz-compass/assets/logout.svg"
            />
          </v-flex>
        </v-layout>

        <v-card-actions>
          <v-btn
            color="green"
            @click="logoutDialog = false"
          >
            <v-icon left>
              fad fa-unlock
            </v-icon>
            Stay Logged In
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            @click="logout"
          >
            Log Off
            <v-icon right>
              fad fa-lock
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script src="./user-avatar-btn.controller.js"></script>
<style lang="scss" src="./_user-avatar-btn.scss"></style>
