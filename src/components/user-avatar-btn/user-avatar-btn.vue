<template>
  <div
    :class="$options.name"
    v-if="user"
  >
    <v-menu
      :close-on-content-click="false"
      location="bottom end"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          size="small"
          id="user-avatar-btn"
          class="header-btn user-avatar-btn mx-1"
          variant="flat"
          rounded="pill"
          v-bind="props"
        >
          {{ user.data.user_login }}
          &nbsp;
          <v-avatar
            size="24px"
            end
          >
            <v-img :src="user.avatar" />
          </v-avatar>
        </v-btn>
      </template>
      <v-card min-width="300">
        <v-row
          justify="center"
          align="center"
          class="ma-2 pa-2"
        >
          <v-col class="text-right pa-3 flex-grow-1">
            <h6>
              {{ user.data.display_name }}
              <br>
              <small>
                {{ user.data.user_email }}
              </small>
            </h6>
          </v-col>
          <v-col
            cols="auto"
            class="text-center"
          >
            <v-avatar size="96px">
              <v-img :src="user.avatar" />
            </v-avatar>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer />
          <v-btn
            size="small"
            icon
            @click="confirmLogout"
          >
            <v-icon
              color="red"
              icon="fas fa-unlock"
            />
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
          class="headline grey-darken-4"
          title="Locking Up?"
        />
        <v-row
          justify="center"
          align="center"
          class="ma-5"
        >
          <v-col cols="7">
            <v-img src="/wp-content/plugins/xophz-compass/assets/logout.svg" />
          </v-col>
        </v-row>

        <v-card-actions>
          <v-btn
            color="green"
            @click="logoutDialog = false"
            variant="text"
          >
            <v-icon
              start
              icon="fad fa-unlock"
            />
            Stay Logged In
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            @click="logout"
            variant="elevated"
          >
            Log Off
            <v-icon
              end
              icon="fad fa-lock"
            />
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts" src="./user-avatar-btn.controller.ts"></script>
<style lang="scss" src="./_user-avatar-btn.scss"></style>
