<template>
  <div class="bazaar-sales-monthly">
    <v-stepper
      v-model="stepper"
      flat
    >
      <v-stepper-header>
        <v-stepper-step
          :complete="stepper > 1"
          step="1"
        >
          Refine Report
        </v-stepper-step>

        <v-divider />

        <v-stepper-step
          :complete="stepper > 2"
          step="2"
        >
          Report Results
        </v-stepper-step>

        <v-divider />

        <v-stepper-step step="3">
          Export Results
        </v-stepper-step>
      </v-stepper-header>
      <v-progress-linear
        v-if="loading"
        indeterminate
        color="blue darken-2"
      />
      <v-stepper-items>
        <v-stepper-content
          step="1"
          class="p-0"
        >
          <v-layout
            fill-height
            row
            wrap
            justify-center
            align-center
          >
            <v-flex
              md2
              sm3
              hidden-xs-only
              class="splash-img-container"
            >
              <img
                class="splash-img"
                src="/wp-content/plugins/xophz-compass-bazaar/assets/statistics.svg"
              >
            </v-flex>
            <v-flex
              md10
              sm9
              xs12
              pa-5
            >
              <v-alert
                border="left"
                outlined
                type="info"
              >
                This tool is designed to generate and export any given
                month's product sales report by using the controls below.
                Click <i class="fad fa-play" /> when you're ready.
              </v-alert>
              <v-alert
                v-if="error.status"
                dismissible
                dense
                border="left"
                :value="error.status"
                type="error"
              >
                <!-- {{error.statusText}}: -->
                <b>
                  {{ error.msg }}
                </b>
              </v-alert>
              <v-layout
                justify-center
                align-center
                ma-2
                row
                wrap
              >
                <v-flex
                  xs12
                  sm3
                  md4
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Pick a Month"
                        prepend-icon="fa-calendar-star"
                        class="mt-0 pt-0"

                        readonly
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="date"
                      @change="$refs.menu.save(date)"
                      type="month"
                      no-title
                      scrollable
                    />
                  </v-menu>
                </v-flex>
                <v-flex
                  xs12
                  sm4
                >
                  <v-text-field
                    dark
                    v-model="sku"
                    label="Search All Product SKUs"
                    prepend-icon="fa-barcode-alt"
                    @keyup.enter="runReport"
                    class="mt-0 pt-0"
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm5
                  md4
                >
                  <v-select
                    :items="skuScopeOptions"
                    v-model="skuScope"
                    label="Scope SKU"
                    dark
                    prepend-icon="fa-scanner"
                    class="mt-0 pt-0"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-select

                    v-model="selectStatus"
                    :items="status"
                    label="Order Status"
                    chips
                    dark
                    multiple
                    prepend-icon="fal fa-cash-register"
                  >
                    <template v-slot:selection="{ attrs, item, select, selected }">
                      <v-chip
                        v-bind="attrs"
                        :input-value="selected"
                        close
                        @click:close="removeStatus(item)"
                      >
                        <strong>{{ item }}</strong>&nbsp;
                      </v-chip>
                    </template>
                  </v-select>
                </v-flex>
                <v-flex
                  shrink
                  text-right
                >
                  <v-switch
                    v-model="gmt"
                    label="Use GMT"
                  />
                </v-flex>
                <v-flex
                  grow
                  text-center
                >
                  <v-btn
                    color="primary"
                    elevation="5"
                    large
                    @click="runReport"
                    :loading="loading"
                  >
                    <!-- Run Report -->
                    <v-icon small>
                      fa fa-play
                    </v-icon>
                    <!-- <v-icon right> -->
                    <!--   fa fa-file-spreadsheet -->
                    <!-- </v-icon> -->
                  </v-btn>
                  &nbsp;
                  <v-btn
                    :disabled="!loading"
                    elevation="5"
                    color="secondary"
                    large
                    @click="abortXhr = true"
                  >
                    <v-icon
                      small
                      color="red"
                    >
                      fa fa-stop
                    </v-icon>
                    <!-- <v-icon right> -->
                    <!--   fa fa-file-spreadsheet -->
                    <!-- </v-icon> -->
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-layout
            v-if="sales.unique_products > 0"
            row
            wrap
            justify-center
            align-center
            text-center
          >
            <v-flex
              md4
              sm6
            >
              <v-card class="pa-3">
                <v-layout
                  justify-center
                  align-center
                >
                  <v-flex>
                    <v-icon
                      color="blue"
                      size="4rem"
                    >
                      fal fa-search-dollar
                    </v-icon>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>
                      Sales Reported for
                    </v-subheader>
                    <h2>
                      {{ date|moment('MMMM') }}
                    </h2>
                  </v-flex>
                </v-layout>
                <v-layout
                  justify-center
                  align-top
                >
                  <v-flex
                    xs4
                    v-if="sku"
                  >
                    <v-subheader>
                      SKU
                    </v-subheader>
                    <h2>
                      {{ sku }}
                    </h2>
                  </v-flex>
                  <v-flex>
                    <v-subheader>
                      Order Status
                    </v-subheader>
                    <v-chip
                      v-for="(stat, s) in selectStatus"
                      :key="s"
                      dense
                      small
                      square
                      outlined
                    >
                      {{ stat }}
                    </v-chip>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex
              md4
              sm6
            >
              <v-card class="pa-3">
                <v-layout
                  justify-center
                  align-center
                >
                  <v-flex>
                    <i class="fal fa-cash-register fa-4x text-success" />
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader class="text-success">
                      Total Net Sales
                    </v-subheader>

                    <h2 class="text-success">
                      {{ sales.total_sales|currency }}
                    </h2>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs5>
                    <v-subheader class="text-success">
                      Gross Sales
                    </v-subheader>
                    <h2>
                      {{ sales.gross|kFormatter|currency(0) }}
                    </h2>
                  </v-flex>
                  <v-flex xs2>
                    <v-subheader class="text-success">
                      -
                    </v-subheader>
                  </v-flex>
                  <v-flex xs5>
                    <v-subheader class="text-success">
                      Discounts
                    </v-subheader>
                    <h2>
                      {{ sales.discounts|kFormatter|currency(0) }}
                    </h2>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex
              md4
              sm6
            >
              <v-card class="pa-3">
                <v-layout
                  justify-center
                  align-center
                >
                  <v-flex>
                    <i class="fal fa-hand-holding-usd fa-4x text-success" />
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader class="text-success">
                      50% Total Net Sales
                    </v-subheader>

                    <h2 class="text-success">
                      {{ sales.total_sales/2|currency }}
                    </h2>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs6>
                    <v-subheader class="text-success">
                      50% of Est. Revenue
                    </v-subheader>
                    <h2>
                      {{ sales.est_revenue/2|currency }}
                    </h2>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader class="text-success">
                      Est. Cash Out Value
                    </v-subheader>
                    <h2>
                      {{
                        sales.est_revenue/2
                          +
                          sales.total_sales/2
                          |currency
                      }}
                    </h2>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex
              md4
              sm6
            >
              <v-card class="pa-3">
                <v-layout
                  justify-center
                  align-center
                >
                  <v-flex>
                    <v-icon
                      color="red"
                      size="4rem"
                    >
                      fal fa-cubes
                    </v-icon>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>
                      # Products Sold (Qty)
                    </v-subheader>
                    <h2>
                      {{ sales.unique_products|kFormatter }}
                      ({{ sales.total_items_sold|kFormatter }})
                    </h2>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs6>
                    <v-subheader>
                      Current Stock
                    </v-subheader>
                    <h2>
                      {{ sales.unique_in_stock }}
                      /
                      {{ sales.unique_products }}
                    </h2>
                  </v-flex>
                  <v-flex>
                    <v-subheader>
                      Qty. Remaining
                    </v-subheader>
                    <h2 class="red--text">
                      {{ sales.remaining_stock }}
                    </h2>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex
              md4
              sm6
              class=""
            >
              <v-card class="pa-3">
                <v-layout
                  justify-center
                  align-center
                >
                  <v-flex>
                    <i class="fal fa-box-usd fa-4x text-warning" />
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>
                      Remaining Stock Value
                    </v-subheader>
                    <h2>
                      <span v-if="sales.in_stock_value">
                        {{ sales.in_stock_value|kFormatter|currency }}
                      </span>
                      <span v-else>
                        Out of Stock
                      </span>
                    </h2>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-subheader>
                      {{ date|moment('MMMM') }}'s Discount
                    </v-subheader>
                    <h2>
                      {{ sales.discount_percentage }}%
                    </h2>
                  </v-flex>
                  <v-flex>
                    <v-subheader>
                      Projected Discount
                    </v-subheader>
                    <h2>
                      {{ sales.projected_discount|kFormatter|currency }}
                    </h2>
                  </v-flex>
                  <v-flex>
                    <v-subheader>
                      Est. Revenue
                    </v-subheader>
                    <h2 class="text-warning">
                      {{ (
                        sales.est_revenue
                      )|kFormatter|currency
                      }}
                    </h2>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex
              md4
              sm6
              fill-height
            >
              <v-card
                :color="loading ? 'success' : ''"
                class="d-flex align-center"
                dark
                @click="exportReport"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="loading"
                    class="display-2 flex-grow-1 text-center"
                  >
                    Loading...
                    <br>
                    <v-icon size="4rem">
                      fal fa-tire fa-spin
                    </v-icon>
                  </div>
                </v-scroll-y-transition>
                <v-layout
                  row
                  v-if="!loading"
                  justify-center
                  align-center
                  fill-height
                >
                  <v-flex shrink>
                    <h2>
                      Download Report
                    </h2>
                    <v-icon
                      size="4rem"
                      color="success"
                    >
                      fa fa-eject
                    </v-icon>
                    <v-subheader>
                      {{ filename }}
                    </v-subheader>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex md4>
              <v-btn
                large
                color="secondary"
                @click="stepper = 1"
              >
                <v-icon
                  small
                  color="red"
                >
                  fa fa-stop
                </v-icon>
                <!-- Go Back -->
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout
            v-else
            justify-center
            align-center
          >
            <v-flex
              shrink
              text-center
            >
              <v-icon
                class="ma-3"
                color="orange lighten-2"
                size="8rem"
              >
                fal fa-search-dollar
              </v-icon>
              <h2 class="headline">
                Nothing Here
                <v-subheader>
                  Adjust your search settings and try again.
                </v-subheader>
              </h2>
              <v-btn
                color="primary"
                @click="stepper = 1"
              >
                <v-icon
                  left
                  small
                >
                  fal fa-backward
                </v-icon>
                Go Back
              </v-btn>
            </v-flex>
          </v-layout>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-layout
            v-if="!sheet"
            justify-center
            align-center
          >
            <v-flex
              shrink
              text-center
            >
              <v-icon
                class="ma-3"
                color="green"
                size="8rem"
              >
                fal fa-file-spreadsheet
              </v-icon>
              <h2 class="headline">
                Report Downloaded
                <br>
                <small>
                  {{ filename }}
                </small>
              </h2>
              <v-btn
                large
                color="primary"
                elevation="3"
                @click="stepper = 2"
              >
                <v-icon small>
                  fa fa-play
                </v-icon>
              </v-btn>
                &nbsp;
              <v-btn
                large
                color="success"
                elevation="3"
                :loading="loading"
                @click="exportReport"
              >
                <v-icon small>
                  fa fa-eject
                </v-icon>
              </v-btn>
                &nbsp;
              <v-btn
                large
                color="secondary"
                elevation="3"
                @click="stepper = 1"
              >
                <v-icon
                  small
                  color="red"
                >
                  fa fa-stop
                </v-icon>
              </v-btn>
              <!-- <Br/> -->
              <!-- <v-subheader> -->
              <!--  Review Summary, Download, or Start New Report -->
              <!-- </v-subheader> -->
            </v-flex>
          </v-layout>
          <v-layout
            v-else
            justify-center
            align-center
          >
            <v-flex
              shrink
              text-center
            >
              <v-icon
                class="ma-3"
                color="green"
                size="8rem"
              >
                fal fa-cloud-download
              </v-icon>
              <h2 class="headline">
                Report Downloaded
                <br>
                <small>
                  {{ filename }}
                </small>
                <Br />
              </h2>
              <Br />
              Close this window or click the button to download the report again.
              <Br />
                &nbsp;
              <v-btn
                large
                color="success"
                elevation="3"
                :loading="loading"
                @click="exportReport"
              >
                <v-icon small>
                  fa fa-eject
                </v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script src="./bazaar-sales-monthly.controller.js"></script>
<style lang="scss" src="./_bazaar-sales-monthly.scss"></style>
