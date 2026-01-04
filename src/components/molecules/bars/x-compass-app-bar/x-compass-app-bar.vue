<template>
  <x-app-bar
    density="compact"
    flat
    :order="appBarOrder"
  >
    <x-btn
      icon
      variant="text"
      class="ml-2"
      @click="isAppNavDrawerOpen = !isAppNavDrawerOpen"
    >
      <x-icon color="primary">fad fa-bars</x-icon>
    </x-btn>

    <x-avatar
      v-if="activePlugin && activePlugin.icon"
      size="28"
      class="mx-3"
    >
      <v-img
        :src="activePlugin.icon"
        cover
      />
    </x-avatar>

    <v-toolbar-title>
      {{ $route.name }}
    </v-toolbar-title>

    <v-spacer />

    <x-switch
      v-model="appBarOrder"
      class="me-2"
      :false-value="0"
      :true-value="-1"
      label="Toggle order"
      hide-details
      inset
    />
  </x-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";

export default defineComponent({
  name: "XCompassAppBar",
  computed: {
    ...mapStores(useCompassStore),
    appBarOrder: {
      get() {
        return this.compassStore.appBarOrder;
      },
      set() {
        this.compassStore.toggleAppBarOrder();
      },
    },
    activePlugin() {
      return this.compassStore.activePlugin as any;
    },
    isAppNavDrawerOpen: {
      get() {
        return this.compassStore.isAppNavDrawerOpen;
      },
      set(val: boolean) {
        this.compassStore.setIsAppNavDrawerOpen(val);
      },
    },
  },
});
</script>
