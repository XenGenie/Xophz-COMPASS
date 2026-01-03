<template>
  <div class="index">
    <v-data-table
      :headers="headers"
      :items="categories"
      class="bg-transparent"
    >
      <template #item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td class="text-end">
            {{ item.description }}
          </td>
          <td class="text-end">
            {{ item.slug }}
          </td>
          <td class="text-end">
            {{ item.count }}
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" src="./_index.scss"></style>
