<template>
    <x-app-bar density="compact" flat class="x-app-bar-molecule">
        <x-btn icon variant="text" class="ml-2" @click="toggleNav">
            <x-icon color="primary">fad fa-bars</x-icon>
        </x-btn>

        <x-avatar v-if="pluginIcon" size="28" class="mx-3 rounded-lg border border-white/10">
            <v-img :src="pluginIcon" cover />
        </x-avatar>

        <v-toolbar-title class="text-sm font-black tracking-widest text-white/90 uppercase">
            {{ title }}
        </v-toolbar-title>

        <v-spacer />

        <slot name="actions" />
    </x-app-bar>
</template>

<script lang="ts" src="./x-app-bar.molecule.controller.ts"></script>
<style lang="scss" src="./_x-app-bar.molecule.scss"></style>
