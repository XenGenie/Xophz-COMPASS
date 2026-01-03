<template>
    <v-bottom-sheet v-bind="$attrs" class="x-bottom-sheet">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-bottom-sheet>
</template>

<script lang="ts" src="./x-bottom-sheet.controller.ts"></script>
<style lang="scss" src="./_x-bottom-sheet.scss"></style>
