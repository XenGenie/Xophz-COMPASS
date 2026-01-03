<template>
    <v-table v-bind="$attrs" class="x-table">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-table>
</template>

<script lang="ts" src="./x-table.controller.ts"></script>
<style lang="scss" src="./_x-table.scss"></style>
