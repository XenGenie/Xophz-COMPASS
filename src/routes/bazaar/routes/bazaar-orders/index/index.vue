<template>
  <div class="index">
    <v-alert
      v-if="!orders || orders.length === 0"
      type="info"
      title="No Data Found"
      text="Your site's orders will show up here."
    >
      <v-btn
        color="primary"
        class="mt-2"
      >
        Add New
      </v-btn>
    </v-alert>
    <v-data-table
      v-else
      theme="dark"
      :items="orders"
      :headers="headers"
      class="elevation-1"
      :items-per-page="limit"
      :server-items-length="total"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            {{ item.order }}
          </td>
          <td>
            {{ item.date_created.date }}
          </td>
          <td class="text-success">
            {{ item.status }}
          </td>
          <td>
            <div v-if="item.billing">
              {{ item.billing.first_name }}
              {{ item.billing.last_name }},
              {{ item.billing.address_1 }}
              {{ item.billing.address_2 }},
              {{ item.billing.city }},
              {{ item.billing.state }}
              {{ item.billing.postcode }}
            </div>
            {{ item.payment_method_title }}
          </td>
          <td>
            {{ item.total }}
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts" src="./index.controller.ts"></script>
<!-- <style lang="scss" src="./_index.scss"></style> -->
