<template>
  <div class="products-grid">
    <v-row>
      <v-col
        v-for="(product, p) in products"
        :key="p"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          theme="dark"
          class="h-100"
        >
          <v-sheet
            class="v-sheet--offset mx-auto product-img flex items-center justify-center mt-4"
            color="grey-darken-3"
            elevation="4"
            max-width="calc(100% - 32px)"
            height="150"
            rounded
          >
            <v-img
              :src="product.thumb"
              max-height="150"
              contain
            />
          </v-sheet>

          <v-card-title class="text-h6 mt-2">
            {{ product.title }}
          </v-card-title>
          <v-card-subtitle class="text-xl font-bold text-success">
            ${{ product.price }}
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              variant="text"
              color="primary"
            >Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts" src="./grid.controller.ts"></script>
<style lang="scss" src="./_grid.scss"></style>
