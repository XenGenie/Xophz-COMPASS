<template>
    <v-footer v-bind="$attrs" class="x-footer">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </v-footer>
</template>

<script lang="ts" src="./x-footer.controller.ts"></script>
<style lang="scss" src="./_x-footer.scss"></style>
