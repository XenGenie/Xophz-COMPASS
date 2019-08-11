<template>
  <v-container class="xp-my-achievements-index">
    <v-data-table
      :headers="headers"
      :items="achievements"
      class="elevation-1"
    >
      <template
        slot="headerCell"
        slot-scope="props"
      >
        <span>
          {{ props.header.text }}
          <v-icon
            v-if="props.header.icon"
          >
            {{ props.header.icon }}
          </v-icon>
        </span>
      </template>
      <template v-slot:items="props">
        <td
          class="text-xs-left"
          shrink
          xs2
        >
          <v-img
            :src="props.item.img"
            class="m-3"
          />
        </td>
        <td>
          <h4>
            {{ props.item.title }}
            <small v-html="props.item.the_content">
              {{ props.item.the_content }}
            </small>
          </h4>
        </td>
        <td>
          <v-icon v-if="~props.item.repeat_on.indexOf('sun')">
            fa fa-clock
          </v-icon>
          <v-icon v-else>
            fal fa-ellipsis-h
          </v-icon>
        </td>
        <td>
          <v-icon v-if="~props.item.repeat_on.indexOf('mon')">
            fa fa-clock
          </v-icon>
          <v-icon v-else>
            fal fa-ellipsis-h
          </v-icon>
        </td>
        <td>
          <v-icon v-if="~props.item.repeat_on.indexOf('tue')">
            fa fa-clock
          </v-icon>
          <v-icon v-else>
            fal fa-ellipsis-h
          </v-icon>
        </td>
        <td>
          <v-icon v-if="~props.item.repeat_on.indexOf('wed')">
            fa fa-clock
          </v-icon>
          <v-icon v-else>
            fal fa-ellipsis-h
          </v-icon>
        </td>
        <td>
          <v-icon v-if="~props.item.repeat_on.indexOf('thu')">
            fa fa-clock
          </v-icon>
          <v-icon v-else>
            fal fa-ellipsis-h
          </v-icon>
        </td>
        <td>
          <v-icon v-if="~props.item.repeat_on.indexOf('fri')">
            fa fa-clock
          </v-icon>
          <v-icon v-else>
            fal fa-ellipsis-h
          </v-icon>
        </td>
        <td>
          <v-icon v-if="~props.item.repeat_on.indexOf('sat')">
            fa fa-clock
          </v-icon>
          <v-icon v-else>
            fal fa-ellipsis-h
          </v-icon>
        </td>

        <td class="text-xs-right blue--text headline">
          {{ props.item.xp }}
        </td>
        <td class="text-xs-right red--text headline">
          {{ props.item.ap }}
        </td>
        <td class="text-xs-right orange--text headline">
          {{ props.item.gp }}
        </td>
        <td class="text-xs-center">
          <v-btn
            color="green"
            @click="checkoffAchievement(props.item)"
          >
            <v-icon>
              fal fa-check
            </v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>
<script src="./xp-my-achievements-index.controller.js"></script>
<style lang="scss" src="./_xp-my-achievements-index.scss"></style>
