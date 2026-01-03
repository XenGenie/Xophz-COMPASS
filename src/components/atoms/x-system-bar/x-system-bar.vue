<template>
    <v-system-bar v-bind="$attrs" class="x-system-bar">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-system-bar>
</template>

<script lang="ts" src="./x-system-bar.controller.ts"></script>
<style lang="scss" src="./_x-system-bar.scss"></style>
