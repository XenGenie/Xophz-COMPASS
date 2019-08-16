<template>
  <v-content
    :id="$options.name"
    :class="$options.name"
  >
    <v-app-bar
      clipped-left
      app
      color="#DE3648"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <v-avatar>
        <v-icon>
          fa fa-shopping-bag
        </v-icon>
      </v-avatar>
      <v-toolbar-title>
        Product Inventory
      </v-toolbar-title>
      <v-spacer />
      <v-select
        v-model="category"
        small
        hide-details
        dense
        :items="categories"
        label="Select a Category"
        @input="selectedFilter"
        prepend-icon="fa-tags"
        single-line
      >
        <template
          slot="selection"
          slot-scope="data"
        >
          <span v-html="data.item.text" />
        </template>
        <template
          slot="item"
          slot-scope="data"
        >
          <span v-html="data.item.text" />
        </template>
      </v-select>
        &nbsp;
      <v-select
        v-model="productType"
        @input="selectedFilter"
        small
        :items="productTypes"
        dense
        hide-details
        label="Filter by product type"
        prepend-icon="fa-pallet"
        single-line
      />
        &nbsp;
      <v-select
        v-model="stock"
        @input="selectedFilter"
        clearable
        :items="stockStatus"
        small
        hide-details
        label="Filter by stock status"
        prepend-icon="fa-inventory"
        single-line
      />
      <v-spacer />
      <div class="md-toolbar-section-end">
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            icon
            @click="viewList = !viewList"
          >
            <i
              v-if="!viewList"
              class="fa fa-list"
            />
            <i
              v-else
              class="fa fa-th-large"
            />
          </v-btn>
        </v-toolbar-items>
      </div>
    </v-app-bar>
    <v-container
      fluid
      fill-height
    >
      <v-layout justify-center>
        <v-flex>
          <v-pagination
            dark
            v-model="page"
            :length="Math.ceil(total/limit)"
          />
          <router-view />
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
    <filter-dialog />
  </v-content>
</template>
<script src="./bazaar-products.controller.js"></script>
<style lang="scss" src="./_bazaar-products.scss"></style>
