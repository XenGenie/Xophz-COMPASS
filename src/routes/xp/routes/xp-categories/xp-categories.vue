<template>
  <div class="xp-categories">
    <v-app
      dark
      fixed
    >
      <v-navigation-drawer
        v-model="showAddNewForm"
        app
        absolute
        clipped
      >
        <v-list class="p-1">
          <v-list-item
            tag="div"
            title="Add New Job Category"
          >
            <template #prepend>
              <v-icon>fal fa-hat-wizard</v-icon>
            </template>
            <template #append>
              <v-btn
                icon
                @click.stop="showAddNewForm = !showAddNewForm"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-form
          v-model="valid"
          dark
          @submit.prevent="addNewCategory"
        >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  variant="filled"
                  :counter="10"
                  label="Name"
                  required
                />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="slug"
                  :rules="slugRules"
                  variant="filled"
                  :counter="10"
                  label="Slug"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="description"
                  variant="filled"
                  rows="3"
                  label="Description"
                />
              </v-col>
              <v-col cols="12">
                <v-col
                  cols="12"
                  sm="6"
                  class="flex"
                >
                  <v-select
                    v-model="parentCategory"
                    :items="listParentCategories"
                    variant="filled"
                    label="Parent Category"
                  />
                </v-col>
              </v-col>
              <v-col cols="12">
                <v-btn type="submit">
                  Add New Job Category
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-navigation-drawer>
      <v-app-bar clipped-left>
        <v-btn
          icon
          @click.stop="showAddNewForm = !showAddNewForm"
        >
          <i class="fa fa-hat-wizard fa-2x" />
        </v-btn>
        <v-toolbar-title>
          Job Categories
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="hidden sm:inline-flex">
          <v-btn
            icon
            @click="true"
          >
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="true"
          >
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-main>
        <v-container
          fluid
          class="h-full"
        >
          <v-row justify="center">
            <v-col cols="12">
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <!-- <v-footer> -->
      <!-- </v-footer> -->
    </v-app>
  </div>
</template>
<script lang="ts" src="./xp-categories.controller.ts"></script>
<style lang="scss" src="./_xp-categories.scss"></style>
