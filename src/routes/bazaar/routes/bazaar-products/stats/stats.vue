<template>
  <div class="products-stats">
    <v-row>
      <v-col>
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="auto">
              <v-icon
                size="64"
                color="primary"
              >
                fal fa-binoculars
              </v-icon>
            </v-col>
            <v-col>
              <h6 class="text-subtitle-1 text-medium-emphasis">
                Searched
              </h6>
              <h2 class="text-h5 font-weight-bold">
                <template v-if="!filters.sku && !filters.title">
                  *
                </template>
                <template v-if="filters.sku">
                  SKU
                </template>
                <template v-if="filters.sku && filters.title">
                  &
                </template>
                <template v-if="filters.title">
                  Title
                </template>
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h6 class="text-subtitle-2 text-medium-emphasis">
                By SKU
              </h6>
              <h3 class="text-h6">
                <template v-if="!filters.sku">
                  *
                </template>
                <template v-else>
                  {{ filters.sku }}
                </template>
              </h3>
            </v-col>
            <v-col>
              <h6 class="text-subtitle-2 text-medium-emphasis">
                By Title
              </h6>
              <h3 class="text-h6">
                <template v-if="!filters.title">
                  *
                </template>
                <template v-else>
                  {{ filters.title }}
                </template>
              </h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="auto">
              <v-icon
                size="64"
                color="error"
              >
                fal fa-cubes
              </v-icon>
            </v-col>
            <v-col>
              <h6 class="text-subtitle-1 text-medium-emphasis">
                Products
              </h6>
              <h2 class="text-h5 font-weight-bold">
                {{ stats.unique_stock }}
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h6 class="text-subtitle-2 text-medium-emphasis">
                In Stock
              </h6>
              <h2 class="text-h6">
                {{ stats.unique_in_stock }}
              </h2>
            </v-col>
            <v-col>
              <h6 class="text-subtitle-2 text-medium-emphasis">
                All Stock
              </h6>
              <h2 class="text-h6">
                {{ stats.total_stock }}
              </h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="auto">
              <v-icon
                size="64"
                color="warning"
              >
                fal fa-box-usd
              </v-icon>
            </v-col>
            <v-col>
              <h6 class="text-subtitle-1 text-medium-emphasis">
                Stock Value
              </h6>
              <h2 class="text-success text-h5 font-weight-bold">
                ${{ stats.in_stock_value }}
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h6 class="text-subtitle-2 text-medium-emphasis">
                Avg. Discount %
              </h6>
              <h2 class="text-h6">
                {{ stats.avg_discount }}
              </h2>
            </v-col>
            <v-col>
              <h6 class="text-subtitle-2 text-medium-emphasis">
                Est. Discount $
              </h6>
              <h2 class="text-h6">
                {{ stats.est_discount }}
              </h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="auto">
              <v-icon
                size="64"
                color="success"
              >
                fal fa-hand-holding-usd
              </v-icon>
            </v-col>
            <v-col>
              <h6 class="text-subtitle-1 text-medium-emphasis">
                Total Sales
              </h6>
              <h2 class="text-h5 font-weight-bold">
                {{ stats.total_sales }}
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h6 class="text-subtitle-2 text-medium-emphasis">
                Est. Sales
              </h6>
              <h2 class="text-h6">
                {{ stats.est_sales }}
              </h2>
            </v-col>
            <v-col>
              <h6 class="text-subtitle-2 text-medium-emphasis">
                50% of Sales
              </h6>
              <h2 class="text-h6">
                {{ stats.est_sales/2 }}
              </h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts" src="./stats.controller.ts"></script>
