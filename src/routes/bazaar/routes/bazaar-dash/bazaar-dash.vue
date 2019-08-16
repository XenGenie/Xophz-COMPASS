<template>
  <v-content
    :id="$options.name"
    :class="$options.name"
  >
    <v-app-bar
      app
      clipped-left
      color="#4874CC"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      &nbsp;
      <!-- <v-avatar> -->
      <!--   <v-icon class="m-1"> -->
      <!--     fa fa-store -->
      <!--   </v-icon> -->
      <!-- </v-avatar> -->
      <v-toolbar-title>
        Bazaar
      </v-toolbar-title>
      &nbsp;
      &nbsp;
      <v-img :src="plugin.icon" />
      <v-spacer />
      <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      <!-- </v-toolbar-items> -->
    </v-app-bar>
    <v-container
      fluid
      fill-height
      grid-list-sm
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-flex>
          <div class="dash-cards">
            <v-layout
              row
              wrap
            >
              <v-flex
                md3
                sm6
                xs12
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
                  :plug-spark="Math.ceil(totalSales / totalViews)|currency"
                />
              </v-flex>
              <v-flex
                md3
                sm6
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
                  :plug-spark="Math.ceil(totalSales / totalUsers)|currency"
                />
              </v-flex>
              <v-flex
                sm6
                md3
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
                  :plug-spark="(
                    Math.ceil(totalSales / totalOrders)
                      -
                      Math.ceil( totalShipping / totalOrders)
                  )|currency"
                />
              </v-flex>
              <v-flex
                md3
                sm6
              >
                <x-sparkplug
                  color="green"
                  :labels="totalSalesSparkline.labels"
                  :value="totalSalesSparkline.value"
                  icon="fad fa-cash-register"
                  subheader="Total Sales"
                  :header="totalSales|currency"
                  plug="Net"
                  plug-icon="
                    fa fa-hands-usd
                  "
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
                  :plug-spark="totalSales - totalShipping|currency"
                />
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script src="./bazaar-dash.controller.js"></script>
<style lang="scss" src="./_bazaar-dash.scss"></style>
