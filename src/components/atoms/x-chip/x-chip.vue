<template>
    <v-chip v-bind="$attrs" class="x-chip">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-chip>
</template>

<script lang="ts" src="./x-chip.controller.ts"></script>
<style lang="scss" src="./_x-chip.scss"></style>
