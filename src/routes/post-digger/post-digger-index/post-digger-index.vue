<template>
  <div class="post-digger">
    <v-card>
      <v-card-title class="d-flex align-center">
        Posts
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          prepend-inner-icon="fas fa-search"
          label="Search"
          single-line
          hide-details
          density="compact"
          variant="outlined"
          class="mr-4"
          style="max-width: 300px"
        ></v-text-field>
        <v-btn
          color="primary"
          @click="showDialog = true"
        >
          Add New Post
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="posts"
        :search="search"
        :loading="loadingPosts"
        show-select
        v-model="selected"
        item-value="ID"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn
            icon
            variant="text"
            :to="{ name: 'posts.createupdate', params: { post_id: item.ID }}"
          >
            <v-icon icon="fas fa-pen" />
          </v-btn>
        </template>

        <template v-slot:item.post_date="{ item }">
          {{ formatDate(item.post_date) }}
        </template>

        <template v-slot:item.comment_status="{ item }">
          <v-icon
            v-if="item.comment_status === 'open'"
            color="success"
            icon="fas fa-comment"
          />
          <v-icon
            v-else
            color="grey"
            icon="fas fa-comment-slash"
          />
        </template>

        <template v-slot:item.comment_count="{ item }">
          <v-badge
            :content="item.comment_count"
            color="primary"
          >
            <v-icon icon="fas fa-comments" />
          </v-badge>
        </template>

      </v-data-table>
    </v-card>

    <v-dialog
      v-model="showDialog"
      max-width="800px"
    >
      <v-card>
        <v-card-title>Edting Post: {{ selectedPost?.post_title }}</v-card-title>
        <v-card-text>
          <div v-html="selectedPost?.post_content"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="showDialog = false"
          >Close</v-btn>
          <v-btn
            color="primary"
            @click="showDialog = false"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts" src="./post-digger-index.controller.ts"></script>
<style scoped>
  /* Add any necessary styles here */
</style>
