<template>
    <v-card v-bind="$attrs" class="x-card">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-card>
</template>

<script lang="ts" src="./x-card.controller.ts"></script>
<style lang="scss" src="./_x-card.scss"></style>
