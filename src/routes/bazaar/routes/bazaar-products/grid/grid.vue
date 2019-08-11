<template>
  <div class="products-grid">
    <v-layout
      row
      wrap
    >
      <v-flex>
        <v-card
          v-for="(product, p) in products"
          :key="p"
        >
          <v-sheet
            class="v-sheet--offset mx-auto product-img"
            :color="color"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-img :src="product.thumb" />
          </v-sheet>

          <v-card-header>
            {{ product.title }}
          </v-card-header>
          <div class="md-title">
            ${{ product.price }}
          </div>

          <v-card-expand>
            <v-card-actions md-alignment="space-between" />

            <v-card-expand-content>
              <v-card-content />
            </v-card-expand-content>
          </v-card-expand>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src="./grid.controller.js"></script>
<style lang="scss" src="./_grid.scss"></style>
