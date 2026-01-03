<template>
  <v-main
    :id="$options.name"
    :class="$options.name"
  >
    <v-app-bar color="#DE3648">
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
        class="mx-2"
        v-model="category"
        density="compact"
        hide-details
        :items="categories"
        label="Select a Category"
        @update:model-value="selectedFilter"
        prepend-inner-icon="fa-tags"
        single-line
        item-title="text"
        item-value="id"
      />

      <v-select
        class="mx-2"
        v-model="productType"
        @update:model-value="selectedFilter"
        density="compact"
        :items="productTypes"
        hide-details
        label="Filter by product type"
        prepend-inner-icon="fa-pallet"
        single-line
      />

      <v-select
        class="mx-2"
        v-model="stock"
        @update:model-value="selectedFilter"
        clearable
        :items="stockStatus"
        density="compact"
        hide-details
        label="Filter by stock status"
        prepend-inner-icon="fa-inventory"
        single-line
      />
      <v-spacer />
      <div class="flex items-center">
        <v-toolbar-items class="hidden sm:inline-flex">
          <v-btn
            icon
            @click="viewList = !viewList"
          >
            <v-icon v-if="!viewList">fa fa-list</v-icon>
            <v-icon v-else>fa fa-th-large</v-icon>
          </v-btn>
        </v-toolbar-items>
      </div>
    </v-app-bar>
    <v-container fluid>
      <v-row justify="center">
        <v-col>
          <v-pagination
            v-if="total && limit"
            theme="dark"
            v-model="page"
            :length="Math.ceil(total/limit)"
          />
          <router-view />
        </v-col>
      </v-row>
    </v-container>
    <filter-dialog />
  </v-main>
</template>
<script lang="ts" src="./bazaar-products.controller.ts"></script>
<style lang="scss" src="./_bazaar-products.scss"></style>
