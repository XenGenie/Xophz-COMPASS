<template>
  <x-compass-layout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import XCompassLayout from "@/components/organisms/layouts/x-compass-layout/x-compass-layout.organism.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    XCompassLayout,
  },
});
</script>
