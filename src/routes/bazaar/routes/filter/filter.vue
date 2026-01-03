<template>
  <v-dialog
    width="50vw"
    v-model="isActive"
  >
    <v-card theme="dark">
      <v-card-title>Search Products</v-card-title>
      <form
        novalidate
        @submit.prevent="findProducts"
      >
        <v-card-text>
          <v-row dense>
            <!-- Original had commented code for sku_by select, keeping commented or removing? Removed for cleanliness if unused, or restore logic if needed. Original comment had v-select. -->

            <v-col cols="12">
              <v-text-field
                label="SKU"
                name="sku"
                id="sku"
                v-model="form.sku"
                :disabled="isSaving"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Title"
                name="title"
                id="title"
                v-model="form.title"
                :disabled="isSaving"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="secondary"
            @click="isActive = false"
          >
            Cancel
          </v-btn>
          <v-btn
            type="submit"
            color="primary"
          >
            Find Products
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" src="./filter.controller.ts"></script>
