<template>
    <v-navigation-drawer v-bind="$attrs" class="x-navigation-drawer">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-navigation-drawer>
</template>

<script lang="ts" src="./x-navigation-drawer.controller.ts"></script>
<style lang="scss" src="./_x-navigation-drawer.scss"></style>
