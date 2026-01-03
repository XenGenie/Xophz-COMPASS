<template>
  <v-container class="xp-my-achievements-index">
    <v-data-table
      :headers="headers"
      :items="achievements"
      hover
      class="bg-transparent"
    >
      <template v-slot:header.xp="{ column }">
        {{ column.title }}
        <v-icon
          :icon="column.icon"
          size="small"
          class="ml-1"
        />
      </template>
      <template v-slot:header.ap="{ column }">
        {{ column.title }}
        <v-icon
          :icon="column.icon"
          size="small"
          class="ml-1"
        />
      </template>
      <template v-slot:header.gp="{ column }">
        {{ column.title }}
        <v-icon
          :icon="column.icon"
          size="small"
          class="ml-1"
        />
      </template>

      <template v-slot:item.img="{ item }">
        <v-avatar
          rounded="lg"
          size="large"
          class="ma-2"
        >
          <v-img :src="item.img" />
        </v-avatar>
      </template>

      <template v-slot:item.title="{ item }">
        <div class="py-2">
          <div class="text-subtitle-1 font-weight-bold">{{ item.title }}</div>
          <div
            class="text-caption text-disabled"
            v-html="item.the_content"
          ></div>
        </div>
      </template>

      <template v-slot:item.sun="{ item }">
        <v-icon
          v-if="item.repeat_on.includes('sun')"
          color="primary"
          icon="fa fa-clock"
          size="small"
        />
        <v-icon
          v-else
          color="disabled"
          icon="fal fa-ellipsis-h"
          size="small"
        />
      </template>

      <template v-slot:item.mon="{ item }">
        <v-icon
          v-if="item.repeat_on.includes('mon')"
          color="primary"
          icon="fa fa-clock"
          size="small"
        />
        <v-icon
          v-else
          color="disabled"
          icon="fal fa-ellipsis-h"
          size="small"
        />
      </template>

      <template v-slot:item.tue="{ item }">
        <v-icon
          v-if="item.repeat_on.includes('tue')"
          color="primary"
          icon="fa fa-clock"
          size="small"
        />
        <v-icon
          v-else
          color="disabled"
          icon="fal fa-ellipsis-h"
          size="small"
        />
      </template>

      <template v-slot:item.wed="{ item }">
        <v-icon
          v-if="item.repeat_on.includes('wed')"
          color="primary"
          icon="fa fa-clock"
          size="small"
        />
        <v-icon
          v-else
          color="disabled"
          icon="fal fa-ellipsis-h"
          size="small"
        />
      </template>

      <template v-slot:item.thu="{ item }">
        <v-icon
          v-if="item.repeat_on.includes('thu')"
          color="primary"
          icon="fa fa-clock"
          size="small"
        />
        <v-icon
          v-else
          color="disabled"
          icon="fal fa-ellipsis-h"
          size="small"
        />
      </template>

      <template v-slot:item.fri="{ item }">
        <v-icon
          v-if="item.repeat_on.includes('fri')"
          color="primary"
          icon="fa fa-clock"
          size="small"
        />
        <v-icon
          v-else
          color="disabled"
          icon="fal fa-ellipsis-h"
          size="small"
        />
      </template>

      <template v-slot:item.sat="{ item }">
        <v-icon
          v-if="item.repeat_on.includes('sat')"
          color="primary"
          icon="fa fa-clock"
          size="small"
        />
        <v-icon
          v-else
          color="disabled"
          icon="fal fa-ellipsis-h"
          size="small"
        />
      </template>

      <template v-slot:item.xp="{ item }">
        <span class="text-blue text-h6 font-weight-bold">{{ item.xp }}</span>
      </template>

      <template v-slot:item.ap="{ item }">
        <span class="text-red text-h6 font-weight-bold">{{ item.ap }}</span>
      </template>

      <template v-slot:item.gp="{ item }">
        <span class="text-orange text-h6 font-weight-bold">{{ item.gp }}</span>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn
          color="success"
          icon="fal fa-check"
          variant="tonal"
          size="small"
          @click="checkoffAchievement(item)"
        />
      </template>
    </v-data-table>
  </v-container>
</template>
<script lang="ts" src="./xp-my-achievements-index.controller.ts"></script>
<style lang="scss" src="./_xp-my-achievements-index.scss"></style>
