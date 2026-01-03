<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">{{ post.post_title }}</span>
    </md-app-toolbar>

    <md-app-drawer md-permanent="full">
      <md-toolbar
        class="md-transparent"
        md-elevation="0"
      >
        <router-link :to="{name: 'posts.index'}">
          <md-button>
            <md-icon>arrow_left</md-icon>
            Back to Posts
          </md-button>
        </router-link>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>

          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <vue-friendly-iframe :src="'/wp-admin/post.php?post='+post_id+'&action=edit'" />
    <md-app-content>
      <md-content />
    </md-app-content>
  </md-app>
</template>

<script lang="ts" src="./createUpdatePost.controller.ts"></script>

<style lang="scss" scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  iframe{
      width: 100%;
      height: 100vw;
  }

  iframe{
    width: 100%;
    height: 500%;
  }
</style>
