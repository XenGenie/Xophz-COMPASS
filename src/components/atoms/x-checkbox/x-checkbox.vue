<template>
    <v-checkbox v-bind="$attrs" class="x-checkbox">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-checkbox>
</template>

<script lang="ts" src="./x-checkbox.controller.ts"></script>
<style lang="scss" src="./_x-checkbox.scss"></style>
