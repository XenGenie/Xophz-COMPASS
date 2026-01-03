<template>
    <v-app-bar v-bind="$attrs">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-app-bar>
</template>

<script lang="ts" src="./x-app-bar.controller.ts"></script>
<style lang="scss" src="./_x-app-bar.scss"></style>
