<template>
  <div class="post-digger">
    <v-card>
      <v-card-title class="d-flex align-center">
        Posts
        <v-spacer />
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
        />
        <v-btn
          color="primary"
          @click="showDialog = true"
        >
          Add New Post
        </v-btn>
      </v-card-title>

      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="posts"
        :search="search"
        :loading="loadingPosts"
        show-select
        item-value="ID"
      >
        <template #item.actions="{ item }">
          <v-btn
            icon
            variant="text"
            :to="{ name: 'posts.createupdate', params: { post_id: item.ID }}"
          >
            <v-icon icon="fas fa-pen" />
          </v-btn>
        </template>

        <template #item.post_date="{ item }">
          {{ formatDate(item.post_date) }}
        </template>

        <template #item.comment_status="{ item }">
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

        <template #item.comment_count="{ item }">
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
          <div v-html="selectedPost?.post_content" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="showDialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            @click="showDialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts" src="./post-digger-index.controller.ts"></script>
<style scoped>
  /* Add any necessary styles here */
</style>
