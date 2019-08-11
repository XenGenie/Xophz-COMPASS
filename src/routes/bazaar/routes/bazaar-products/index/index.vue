<template>
  <div class="products-index">
    <v-data-table
      fluid
      fill-height
      dark
      :loading="loading"
      :items="products"
      :headers="headers"
      class="elevation-1"
      :total-items="parseInt(total)"
    >
      <template v-slot:items="props">
        <td>
          <v-avatar>
            <img :src="props.item.thumb">
          </v-avatar>
        </td>
        <td>{{ props.item.title }}</td>
        <td>{{ props.item.sku }}</td>
        <td>{{ props.item.price }}</td>
        <td>{{ props.item.stock }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<script src="./index.controller.js"></script>
<style lang="scss" src="./_index.scss"></style>
