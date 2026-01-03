<template>
    <v-menu v-bind="$attrs" class="x-menu">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-menu>
</template>

<script lang="ts" src="./x-menu.controller.ts"></script>
<style lang="scss" src="./_x-menu.scss"></style>
