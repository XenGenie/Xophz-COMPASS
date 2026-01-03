<template>
  <v-main
    :id="$options.name"
    :class="$options.name"
  >
    <v-app-bar
      app
      color="#4874CC"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      <v-toolbar-title>
        Bazaar
      </v-toolbar-title>
      <v-spacer />
      <v-img
        :src="plugin.icon"
        max-height="40"
        max-width="40"
        contain
      />
    </v-app-bar>
    <v-container fluid>
      <v-row justify="center">
        <v-col>
          <div class="dash-cards">
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="3"
              >
                <x-sparkplug
                  color="blue"
                  :labels="totalViewsSparkline.labels"
                  :value="totalViewsSparkline.value"
                  icon="fad fa-globe"
                  subheader="Total Views"
                  :header="totalViews"
                  plug="per View"
                  plug-icon="fa fa-eye"
                  :items="[
                    {
                      line: 'Viewed Pages',
                      icon : 'fa fa-copy',
                      opposite: totalPosts,
                    },
                    {
                      line: 'Avg Views per Page',
                      icon : 'fa fa-eye',
                      opposite: Math.ceil(totalViews / totalPosts)
                    },
                  ]"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="3"
              >
                <x-sparkplug
                  color="red"
                  :labels="totalUsersSparkline.labels"
                  :value="totalUsersSparkline.value"
                  icon="fad fa-users"
                  subheader="Active Users"
                  :header="totalUsers"
                  plug="per View"
                  plug-icon="fa fa-walking"
                  :items="[
                    {
                      line: 'Avg. Visits per User',
                      icon : 'fa fa-walking',
                      opposite: Math.ceil(( totalViews / totalUsers)),
                    },
                    {
                      line: 'Avg Orders per User',
                      icon : 'fa fa-hand-holding-box',
                      opposite: Math.ceil(( totalOrders / totalUsers))
                    },
                  ]"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="3"
              >
                <x-sparkplug
                  color="orange"
                  :labels="totalOrdersSparkline.labels"
                  :value="totalOrdersSparkline.value"
                  icon="fad fa-truck"
                  subheader="Total Orders"
                  :header="totalOrders"
                  plug="per Order"
                  plug-icon="fa fa-box-usd"
                  :items="[
                    {
                      line: 'Shipping Costs',
                      icon : 'fa fa-shipping-fast',
                      opposite: totalShipping,
                      currency: true
                    },
                    {
                      line: 'Avg Cost per Order',
                      icon : 'fa fa-usd-circle',
                      opposite: Math.ceil(( totalShipping / totalOrders)),
                      currency: true
                    },
                  ]"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="3"
              >
                <x-sparkplug
                  color="green"
                  :labels="totalSalesSparkline.labels"
                  :value="totalSalesSparkline.value"
                  icon="fad fa-cash-register"
                  subheader="Total Sales"
                  :header="formatCurrency(totalSales)"
                  plug="Net"
                  plug-icon="fa fa-hands-usd"
                  :items="[
                    {
                      icon : 'fa-eye',
                      line : 'Views'
                    },
                    {
                      icon : 'fa-walking',
                      line : 'to User',
                      opposite : (totalUsers / totalViews).toFixed(2)
                    },
                    {
                      icon : 'fa-box-usd',
                      line : 'User to Order',
                      opposite : (totalOrders / totalUsers).toFixed(2)
                    },
                    {
                      icon : '',
                    },
                    {
                      icon : 'fa fa-cash-register',
                      label : 'Views to Order',
                      opposite: (totalOrders / totalViews).toFixed(2)
                    },
                  ]"
                  :plug-spark="formatCurrency(totalSales - totalShipping)"
                />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script lang="ts" src="./bazaar-dash.controller.ts"></script>
<style lang="scss" src="./_bazaar-dash.scss"></style>
