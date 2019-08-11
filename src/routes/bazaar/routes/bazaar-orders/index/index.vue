<template>
  <div class="index">
    <md-empty-state
      v-if="!orders"
      class="md-accent"
      md-rounded
      md-icon=""
      md-label="No Data Found"
      md-description="Your site's  will show up here."
    >
      <md-button class="md-primary md-raised">
        Add New
      </md-button>
    </md-empty-state>
    <v-data-table
      fluid
      fill-height
      dark
      v-else
      :items="orders"
      :headers="headers"
      class="elevation-1"
      :pagination.sync="pagination"
      :total-items="total"
    >
      <template v-slot:items="props">
        <td>
          {{ props.item.order }}
        </td>
        <td>
          {{ props.item.date_created.date }}
        </td>
        <td color="badge-success">
          {{ props.item.status }}
        </td>
        <td>
          <div v-if="props.item.billing">
            {{ props.item.billing.first_name }}
            {{ props.item.billing.last_name }},
            {{ props.item.billing.address_1 }}
            {{ props.item.billing.address_2 }},
            {{ props.item.billing.city }},
            {{ props.item.billing.state }}
            {{ props.item.billing.postcode }}
          </div>
          {{ props.item.payment_method_title }}
        </td>
        <td>
          {{ props.item.total }}
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script src="./index.controller.js"></script>
<!-- <style lang="scss" src="./_index.scss"></style> -->
