<template>
  <v-menu
    offset-y
    left
    attach=".breadcrumbs"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        small
        id="user-avatar-btn"
        class="user-avatar-btn"
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
        <v-btn
          small
          icon
        >
          <v-icon>
            fa fa-palette
          </v-icon>
        </v-btn>
        <v-spacer />
        <v-btn
          v-if="currentUser.caps.administrator"
          small
          icon
          @click="toggleMask"
          :color="userMask ? 'green' : ''"
        >
          <v-icon>
            fa fa-mask
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script src="./user-avatar-btn.controller.js"></script>
<style lang="scss" src="./_user-avatar-btn.scss"></style>
