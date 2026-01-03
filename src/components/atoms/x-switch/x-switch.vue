<template>
    <v-switch v-bind="$attrs" class="x-switch">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-switch>
</template>

<script lang="ts" src="./x-switch.controller.ts"></script>
<style lang="scss" src="./_x-switch.scss"></style>
