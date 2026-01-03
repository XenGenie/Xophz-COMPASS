<template>
    <v-text-field v-bind="$attrs" class="x-text-field">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-text-field>
</template>

<script lang="ts" src="./x-text-field.controller.ts"></script>
<style lang="scss" src="./_x-text-field.scss"></style>
