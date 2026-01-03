<template>
    <v-list-item v-bind="$attrs" class="x-list-item">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-list-item>
</template>

<script lang="ts" src="./x-list-item.controller.ts"></script>
<style lang="scss" src="./_x-list-item.scss"></style>
