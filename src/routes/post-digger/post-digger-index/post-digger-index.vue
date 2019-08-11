<template v-slot="{posts}">
  <div class="post-digger md-layout">
    <trinity-rings-spinner v-if="loadingPosts" />
    <md-table
      v-else
      v-model="searched"
      md-sort="post_date"
      md-sort-order="asc"
      md-card
      md-fixed-header
      class="md-layout-item"
      @md-selected="onSelect"
    >
      <md-table-toolbar
        slot="md-table-alternate-header"
        slot-scope="{ count }"
      >
        <div class="md-toolbar-section-start">
          {{ getAlternateLabel(count) }}
        </div>
        <!-- BULK EDIT -->
        <div
          v-if="count > 1"
          class="md-toolbar-section-end"
        >
          <md-button
            class="md-icon-button"
            @click="openEditor"
          >
            <md-icon>ballot</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>delete_sweep</md-icon>
          </md-button>
        </div>
        <!-- SINGLE EDIT -->
        <div
          v-else
          class="md-toolbar-section-end"
        >
          <md-button
            class="md-icon-button"
            @click="openEditor"
          >
            <md-icon>create</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">
            Posts
          </h1>
        </div>
        <md-field
          md-clearable
          class="md-toolbar-section-end"
        >
          <md-input
            placeholder="Search by name..."
            v-model="search"
          />
        </md-field>
        <div class="md-toolbar-section-end">
          <md-button class="md-raised md-accent">
            Add New Post
          </md-button>
        </div>
      </md-table-toolbar>
      <md-table-empty-state
        md-rounded
        :md-icon="plugin.icon"
        md-label="Not  Found"
        :md-description="
          `No user found for this '${search}' query.
          Try a different search term or create a new user.`
        "
      >
        <md-button
          class="md-primary md-raised"
          @click="showDialog = true"
          v-ripple
        >
          Create New User
        </md-button>
      </md-table-empty-state>
      <md-table-row
        slot="md-table-row"
        slot-scope="post"
        md-selectable="multiple"
        md-auto-select
      >
        <md-table-cell md-label="Edit">
          <router-link :to="{ name: 'posts.createupdate', params: { post_id: post.item.ID }}">
            <md-button class="md-icon-button">
              <md-icon>create</md-icon>
            </md-button>
          </router-link>
        </md-table-cell>
        <md-table-cell
          md-label="ID"
          md-numeric
          md-sort-by="ID"
        >
          {{ post.item.ID }}
        </md-table-cell>
        <md-table-cell
          md-label="Post Title"
          md-sort-by="post_title"
        >
          {{ post.item.post_title }}
        </md-table-cell>
        <md-table-cell
          md-label="Date"
          md-sort-by="post_date"
        >
          {{ post.item.post_date | moment("MMMM Do YYYY, dddd, h:mm:ss a") }}
        </md-table-cell>
        <md-table-cell
          md-label="Dialog"
          md-sort-by="comment_status"
        >
          <i
            class="fas fa-comment-smile fa-2x"
            v-if="post.item.comment_status =='open'"
          />
          <i
            class="fas fa-comment-slash fa-2x"
            v-else
          />
        </md-table-cell>
        <md-table-cell
          md-label="Comments"
          md-sort-by="comment_count"
        >
          <md-badge
            :md-content="post.item.comment_count"
            md-dense
          >
            <md-button class="md-icon-button">
              <md-icon>comment</md-icon>
            </md-button>
          </md-badge>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>
        Editing Post
        <small>
          {{ selected.post_title }}
        </small>
      </md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab
          md-label="Post"
          v-html="selected.post_content"
        />

        <md-tab md-label="Activity">
          <pre>
            {{ selected }}
          </pre>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button
          class="md-primary"
          @click="showDialog = false"
        >
          Close
        </md-button>
        <md-button
          class="md-primary"
          @click="showDialog = false"
        >
          Save
        </md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script src="./post-digger-index.controller.js"></script>
