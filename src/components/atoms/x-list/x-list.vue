<template>
    <v-list v-bind="$attrs" class="x-list">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-list>
</template>

<script lang="ts" src="./x-list.controller.ts"></script>
<style lang="scss" src="./_x-list.scss"></style>
