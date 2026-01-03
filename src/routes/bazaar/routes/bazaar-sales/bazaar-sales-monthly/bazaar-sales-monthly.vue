<template>
  <div class="bazaar-sales-monthly">
    <v-card>
      <v-tabs
        v-model="stepper"
        bg-color="primary"
      >
        <v-tab :value="1">
          Refine Report
        </v-tab>
        <v-tab
          :value="2"
          :disabled="stepper < 2"
        >
          Report Results
        </v-tab>
        <v-tab
          :value="3"
          :disabled="stepper < 3"
        >
          Export Results
        </v-tab>
      </v-tabs>

      <v-window v-model="stepper">
        <v-window-item :value="1">
          <v-container fluid>
            <v-row v-if="loading">
              <v-col cols="12">
                <v-progress-linear
                  indeterminate
                  color="blue darken-2"
                />
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                cols="12"
                md="2"
                sm="3"
                class="hidden-xs"
              >
                <img
                  class="splash-img"
                  src="/wp-content/plugins/xophz-compass-bazaar/assets/statistics.svg"
                  style="max-width: 100%;"
                >
              </v-col>
              <v-col
                cols="12"
                sm="9"
                md="10"
              >
                <v-alert
                  border="start"
                  variant="outlined"
                  type="info"
                  class="mb-4"
                >
                  This tool is designed to generate and export any given
                  month's product sales report by using the controls below.
                  Click <v-icon
                    icon="fas fa-play"
                    size="small"
                  /> when you're ready.
                </v-alert>
                <v-alert
                  v-if="error && error.status"
                  closable
                  density="compact"
                  border="start"
                  type="error"
                  class="mb-4"
                >
                  <b>{{ error.msg }}</b>
                </v-alert>

                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col
                    cols="12"
                    sm="3"
                    md="4"
                  >
                    <v-text-field
                      v-model="date"
                      label="Pick a Month"
                      prepend-icon="fas fa-calendar-alt"
                      variant="underlined"
                      readonly
                      @click="menu = true"
                    />
                    <v-dialog
                      v-model="menu"
                      width="290px"
                    >
                      <v-date-picker
                        v-model="date"
                        view-mode="month"
                        @update:model-value="menu = false"
                      />
                    </v-dialog>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      v-model="sku"
                      label="Search All Product SKUs"
                      prepend-icon="fas fa-barcode"
                      variant="underlined"
                      @keyup.enter="runReport"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="5"
                    md="4"
                  >
                    <v-select
                      v-model="skuScope"
                      :items="skuScopeOptions"
                      label="Scope SKU"
                      prepend-icon="fas fa-search"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="selectStatus"
                      :items="status"
                      label="Order Status"
                      chips
                      multiple
                      prepend-icon="fas fa-cash-register"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col class="text-right">
                    <v-switch
                      v-model="gmt"
                      label="Use GMT"
                      color="primary"
                    />
                  </v-col>
                  <v-col class="text-center">
                    <v-btn
                      color="primary"
                      elevation="5"
                      size="large"
                      :loading="loading"
                      class="mr-2"
                      @click="runReport"
                    >
                      <v-icon
                        start
                        icon="fas fa-play"
                      />
                      Run Report
                    </v-btn>
                    <v-btn
                      :disabled="!loading"
                      elevation="5"
                      color="secondary"
                      size="large"
                      @click="abortXhr = true"
                    >
                      <v-icon
                        start
                        icon="fas fa-stop"
                        color="red"
                      />
                      Stop
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item :value="2">
          <v-container
            v-if="sales.unique_products > 0"
            fluid
          >
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="p-3 h-full">
                  <div class="flex items-center justify-center mb-2">
                    <v-icon
                      color="blue"
                      size="64"
                      icon="fas fa-search-dollar"
                      class="mr-4"
                    />
                    <div>
                      <div class="text-caption">
                        Sales Reported for
                      </div>
                      <h2 class="text-h5">
                        {{ date }}
                      </h2>
                    </div>
                  </div>
                  <v-divider class="mb-2" />
                  <v-row>
                    <v-col
                      v-if="sku"
                      cols="4"
                    >
                      <div class="text-caption">
                        SKU
                      </div>
                      <h2 class="text-h6">
                        {{ sku }}
                      </h2>
                    </v-col>
                    <v-col>
                      <div class="text-caption">
                        Order Status
                      </div>
                      <v-chip
                        v-for="(stat, s) in selectStatus"
                        :key="s"
                        density="compact"
                        size="small"
                        variant="outlined"
                        class="mr-1 mb-1"
                      >
                        {{ stat }}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="p-3 h-full">
                  <div class="flex items-center justify-center mb-2">
                    <v-icon
                      color="success"
                      size="64"
                      icon="fas fa-cash-register"
                      class="mr-4"
                    />
                    <div>
                      <div class="text-caption text-success">
                        Total Net Sales
                      </div>
                      <h2 class="text-h5 text-success">
                        {{ sales.total_sales }}
                      </h2>
                    </div>
                  </div>
                  <v-row>
                    <v-col cols="5">
                      <div class="text-caption text-success">
                        Gross Sales
                      </div>
                      <h2 class="text-h6">
                        {{ sales.gross }}
                      </h2>
                    </v-col>
                    <v-col
                      cols="2"
                      class="text-center"
                    >
                      <div class="text-caption text-success">
                        -
                      </div>
                    </v-col>
                    <v-col cols="5">
                      <div class="text-caption text-success">
                        Discounts
                      </div>
                      <h2 class="text-h6">
                        {{ sales.discounts }}
                      </h2>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="p-3 h-full">
                  <div class="flex items-center justify-center mb-2">
                    <v-icon
                      color="success"
                      size="64"
                      icon="fas fa-hand-holding-usd"
                      class="mr-4"
                    />
                    <div>
                      <div class="text-caption text-success">
                        50% Total Net Sales
                      </div>
                      <h2 class="text-h5 text-success">
                        {{ sales.total_sales / 2 }}
                      </h2>
                    </div>
                  </div>
                  <v-row>
                    <v-col cols="6">
                      <div class="text-caption text-success">
                        50% of Est. Revenue
                      </div>
                      <h2 class="text-h6">
                        {{ sales.est_revenue / 2 }}
                      </h2>
                    </v-col>
                    <v-col cols="6">
                      <div class="text-caption text-success">
                        Est. Cash Out Value
                      </div>
                      <h2 class="text-h6">
                        {{ (sales.est_revenue / 2) + (sales.total_sales / 2) }}
                      </h2>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="p-3 h-full">
                  <div class="flex items-center justify-center mb-2">
                    <v-icon
                      color="red"
                      size="64"
                      icon="fas fa-cubes"
                      class="mr-4"
                    />
                    <div>
                      <div class="text-caption">
                        # Products Sold (Qty)
                      </div>
                      <h2 class="text-h5">
                        {{ sales.unique_products }} ({{ sales.total_items_sold }})
                      </h2>
                    </div>
                  </div>
                  <v-row>
                    <v-col cols="6">
                      <div class="text-caption">
                        Current Stock
                      </div>
                      <h2 class="text-h6">
                        {{ sales.unique_in_stock }} / {{ sales.unique_products }}
                      </h2>
                    </v-col>
                    <v-col cols="6">
                      <div class="text-caption">
                        Qty. Remaining
                      </div>
                      <h2 class="text-h6 text-red">
                        {{ sales.remaining_stock }}
                      </h2>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="p-3 h-full">
                  <div class="flex items-center justify-center mb-2">
                    <v-icon
                      color="warning"
                      size="64"
                      icon="fas fa-box-open"
                      class="mr-4"
                    />
                    <div>
                      <div class="text-caption">
                        Remaining Stock Value
                      </div>
                      <h2 class="text-h5">
                        <span v-if="sales.in_stock_value">{{ sales.in_stock_value }}</span>
                        <span v-else>Out of Stock</span>
                      </h2>
                    </div>
                  </div>
                  <v-row>
                    <v-col>
                      <div class="text-caption">
                        {{ date }}'s Discount
                      </div>
                      <h2 class="text-h6">
                        {{ sales.discount_percentage }}%
                      </h2>
                    </v-col>
                    <v-col>
                      <div class="text-caption">
                        Projected Discount
                      </div>
                      <h2 class="text-h6">
                        {{ sales.projected_discount }}
                      </h2>
                    </v-col>
                    <v-col>
                      <div class="text-caption">
                        Est. Revenue
                      </div>
                      <h2 class="text-h6 text-warning">
                        {{ sales.est_revenue }}
                      </h2>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-card
                  v-ripple
                  :color="loading ? 'success' : ''"
                  class="flex items-center justify-center h-full pointer"
                  theme="dark"
                  @click="exportReport"
                >
                  <div
                    v-if="loading"
                    class="text-center"
                  >
                    <div class="text-h4">
                      Loading...
                    </div>
                    <v-icon
                      size="64"
                      icon="fas fa-spinner fa-spin"
                    />
                  </div>
                  <div
                    v-else
                    class="text-center"
                  >
                    <h2 class="text-h5">
                      Download Report
                    </h2>
                    <v-icon
                      size="64"
                      color="success"
                      icon="fas fa-file-export"
                    />
                    <div class="text-caption">
                      {{ filename }}
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-btn
                  size="large"
                  color="secondary"
                  @click="stepper = 1"
                >
                  <v-icon
                    start
                    icon="fas fa-stop"
                    color="red"
                  />
                  Go Back
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          <v-container
            v-else
            fluid
            class="h-full"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col class="text-center">
                <v-icon
                  size="128"
                  color="orange-lighten-2"
                  icon="fas fa-search-dollar"
                  class="mb-4"
                />
                <h2 class="text-h4">
                  Nothing Here
                </h2>
                <div class="text-subtitle-1 mb-4">
                  Adjust your search settings and try again.
                </div>
                <v-btn
                  color="primary"
                  @click="stepper = 1"
                >
                  <v-icon
                    start
                    icon="fas fa-backward"
                  />
                  Go Back
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item :value="3">
          <v-container
            fluid
            class="h-full"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col class="text-center">
                <v-icon
                  size="128"
                  color="green"
                  icon="fas fa-file-csv"
                  class="mb-4"
                />
                <h2 class="text-h4">
                  Report Downloaded
                </h2>
                <div class="text-h6 mb-4">
                  {{ filename }}
                </div>

                <div v-if="!sheet">
                  <v-btn
                    size="large"
                    color="primary"
                    elevation="3"
                    class="mr-2"
                    @click="stepper = 2"
                  >
                    <v-icon icon="fas fa-play" />
                  </v-btn>
                  <v-btn
                    size="large"
                    color="success"
                    elevation="3"
                    :loading="loading"
                    class="mr-2"
                    @click="exportReport"
                  >
                    <v-icon icon="fas fa-file-export" />
                  </v-btn>
                  <v-btn
                    size="large"
                    color="secondary"
                    elevation="3"
                    @click="stepper = 1"
                  >
                    <v-icon
                      icon="fas fa-stop"
                      color="red"
                    />
                  </v-btn>
                </div>
                <div v-else>
                  <div class="mb-4">
                    Close this window or click the button to download the report again.
                  </div>
                  <v-btn
                    size="large"
                    color="success"
                    elevation="3"
                    :loading="loading"
                    @click="exportReport"
                  >
                    <v-icon icon="fas fa-file-export" />
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>
<script lang="ts" src="./bazaar-sales-monthly.controller.ts"></script>
<style lang="scss" src="./_bazaar-sales-monthly.scss"></style>
