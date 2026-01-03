<template>
    <v-layout class="x-application-layout-template">
        <slot name="system-bar" />
        <slot name="navigation-drawer" />
        <slot name="app-bar" />

        <x-main>
            <slot />
        </x-main>

        <slot name="footer" />
        <slot name="overlays" />
    </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'XApplicationLayoutTemplate',
});
</script>

<style lang="scss">
.x-application-layout-template {
    // Base layout styles
}
</style>
