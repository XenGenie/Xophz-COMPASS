<template>
  <div class="products-index">
    <v-data-table
      theme="dark"
      :loading="loading"
      :items="products"
      :headers="headers"
      class="elevation-1"
      :server-items-length="parseInt(total)"
      :items-per-page="limit"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-avatar>
              <v-img :src="item.thumb" />
            </v-avatar>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.sku }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.stock }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" src="./_index.scss"></style>
