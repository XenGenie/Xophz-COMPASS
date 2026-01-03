<template>
    <v-select v-bind="$attrs" class="x-select">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-select>
</template>

<script lang="ts" src="./x-select.controller.ts"></script>
<style lang="scss" src="./_x-select.scss"></style>
