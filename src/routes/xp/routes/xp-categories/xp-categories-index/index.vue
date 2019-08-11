<template>
  <div class="index">
    <v-data-table
      :headers="headers"
      :items="categories"
      pagination-sync-rows-per-page="-1"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">
          {{ props.item.description }}
        </td>
        <td class="text-xs-right">
          {{ props.item.slug }}
        </td>
        <td class="text-xs-right">
          {{ props.item.count }}
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script src="./index.controller.js"></script>
<style lang="scss" src="./_index.scss"></style>
