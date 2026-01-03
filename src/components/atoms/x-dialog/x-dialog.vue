<template>
    <v-dialog v-bind="$attrs" class="x-dialog" content-class="x-dialog-content">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-dialog>
</template>

<script lang="ts" src="./x-dialog.controller.ts"></script>
<style lang="scss" src="./_x-dialog.scss"></style>
