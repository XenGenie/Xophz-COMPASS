<template>
  <div class="xp-categories">
    <v-app
      dark
      fixed
    >
      <v-navigation-drawer
        app
        absolute
        clipped
        v-model="showAddNewForm"
      >
        <v-list class="pa-1">
          <v-list-item
            avatar
            tag="div"
          >
            <v-list-item-avatar>
              <v-icon>fal fa-hat-wizard</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Add New Job Category</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                @click.stop="showAddNewForm = !showAddNewForm"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-form
          v-model="valid"
          @submit.prevent="addNewCategory"
          dark
        >
          <v-container>
            <v-layout
              row
              wrap
            >
              <v-flex
                xs12
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  box
                  :counter="10"
                  label="Name"
                  required
                  dark
                />
              </v-flex>

              <v-flex
                xs12
              >
                <v-text-field
                  v-model="slug"
                  :rules="slugRules"
                  box
                  :counter="10"
                  label="Slug"
                  required
                />
              </v-flex>
              <v-flex>
                <v-textarea
                  box
                  rows="3"
                  v-model="description"
                  label="Description"
                  value=""
                />
              </v-flex>
              <v-flex
                xs12
              >
                <v-flex
                  xs12
                  sm6
                  d-flex
                >
                  <v-select
                    v-model="parentCategory"
                    :items="listParentCategories"
                    box
                    label="Parent Category"
                  />
                </v-flex>
              </v-flex>
              <v-flex>
                <v-btn type="submit">
                  Add New Job Category
                </v-btn>
              </v-flex>
            </v-layout>
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
        <v-toolbar-items class="hidden-sm-and-down">
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
      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-layout justify-center>
            <v-flex>
              <router-view />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <!-- <v-footer> -->
      <!-- </v-footer> -->
    </v-app>
  </div>
</template>
<script src="./xp-categories.controller.js"></script>
<style lang="scss" src="./_xp-categories.scss"></style>
