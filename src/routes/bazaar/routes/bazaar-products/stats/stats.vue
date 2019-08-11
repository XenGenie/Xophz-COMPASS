<template>
  <div class="products-stats">
    <b-row>
      <b-col>
        <Widget>
          <b-row>
            <b-col>
              <i class="fal fa-binoculars fa-4x text-primary" />
            </b-col>
            <b-col>
              <h6>
                Searched
              </h6>
              <h2>
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
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h6>
                By SKU
              </h6>
              <h3>
                <template v-if="!filters.sku">
                  *
                </template>
                <template v-else>
                  {{ filters.sku }}
                </template>
              </h3>
            </b-col>
            <b-col>
              <h6>
                By Title
              </h6>
              <h3>
                <template v-if="!filters.title">
                  *
                </template>
                <template v-else>
                  {{ filters.title }}
                </template>
              </h3>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
      <b-col>
        <Widget>
          <b-row>
            <b-col>
              <i class="fal fa-cubes fa-4x text-danger" />
            </b-col>
            <b-col>
              <h6>
                Products
              </h6>
              <h2>
                {{ stats.unique_stock }}
              </h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h6>
                In Stock
              </h6>
              <h2>
                {{ stats.unique_in_stock }}
              </h2>
            </b-col>
            <b-col>
              <h6>
                All Stock
              </h6>
              <h2>
                {{ stats.total_stock }}
              </h2>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
      <b-col>
        <Widget>
          <b-row>
            <b-col>
              <i class="fal fa-box-usd fa-4x text-warning" />
            </b-col>
            <b-col>
              <h6>
                Stock Value
              </h6>
              <h2 class="text-success">
                ${{ stats.in_stock_value }}
              </h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h6>
                Avg. Discount %
              </h6>
              <h2>
                {{ stats.avg_discount }}
              </h2>
            </b-col>
            <b-col>
              <h6>
                Est. Discount $
              </h6>
              <h2>
                {{ stats.est_discount }}
              </h2>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
      <b-col>
        <Widget>
          <b-row>
            <b-col>
              <i class="fal fa-hand-holding-usd fa-4x text-success" />
            </b-col>
            <b-col>
              <h6>
                Total Sales
              </h6>
              <h2>
                {{ stats.total_sales }}
              </h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h6>
                Est. Sales
              </h6>
              <h2>
                {{ stats.est_sales }}
              </h2>
            </b-col>
            <b-col>
              <h6>
                50% of Sales
              </h6>
              <h2>
                {{ stats.est_sales/2 }}
              </h2>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>
<script src="./stats.controller.js"></script>
