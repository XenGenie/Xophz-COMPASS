<template>
    <v-main v-bind="$attrs" class="x-main">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-main>
</template>

<script lang="ts" src="./x-main.controller.ts"></script>
<style lang="scss" src="./_x-main.scss"></style>
