<template>
  <v-content
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <v-app-bar
      app
      clipped-left
      color="green"
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      &nbsp;
      <!-- <v-img :src="plugin.icon"></v-img>&nbsp; -->
      <v-avatar>
        <v-icon class="m-1">
          fa fa-money-bill-wave
        </v-icon>
      </v-avatar>
      &nbsp;
      <v-toolbar-title>
        Sales Reports
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-toolbar-items > -->
      <!--   <v-btn block @click="modal = true"> -->
      <!--     <v-icon -->
      <!--       left -->
      <!--     > -->
      <!--       fal fa-calendar-check -->
      <!--     </v-icon> -->
      <!--     Open Calendar  -->
      <!--   </v-btn> -->
      <!--   <v-btn icon @click="showSearchDialog"> -->
      <!--     <v-icon>fal fa-cog</v-icon> -->
      <!--   </v-btn> -->
      <!-- </v-toolbar-items> -->
      <!-- <template v-slot:extension> -->
      <!--   <v-tabs -->
      <!--      centered -->
      <!--     color="#212121" -->
      <!--     slider-color="red" -->
      <!--   > -->
      <!--     <v-tab -->
      <!--       :to="{ name : 'Daily Sales' }" -->
      <!--       :href="''" -->
      <!--     > -->
      <!--     Daily  -->
      <!--     </v-tab> -->
      <!--     <v-tab -->
      <!--       :to="{ name : 'Monthly Sales' }" -->
      <!--       @click="$router.push()" -->
      <!--     > -->
      <!--     Monthly -->
      <!--     </v-tab> -->
      <!--     <v-tab -->
      <!--       :to="{ name : 'Yearly Sales' }" -->
      <!--       :href="''" -->
      <!--     > -->
      <!--     Yearly -->
      <!--     </v-tab> -->
      <!--   </v-tabs> -->
      <!-- </template> -->
    </v-app-bar>
    <v-container
      fluid
      grid-list-md
    >
      <router-view />
    </v-container>
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="date"
      width="300px"
    >
      <v-date-picker
        v-model="date"
        multiple
        type="month"
        class="mt-3"
      >
        <v-spacer />
        <v-btn
          text
          color="primary"
          @click="modal = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.dialog.save(date)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>

    <filter-dialog />
  </v-content>
</template>
<script src="./bazaar-sales.controller.js"></script>
<style lang="scss" src="./_bazaar-sales.scss" scoped></style>
