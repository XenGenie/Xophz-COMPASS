<template>
    <v-avatar v-bind="$attrs" class="x-avatar">
        <slot />
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot v-if="slot !== 'default'" :name="slot" v-bind="scope || {}" />
        </template>
    </v-avatar>
</template>

<script lang="ts" src="./x-avatar.controller.ts"></script>
<style lang="scss" src="./_x-avatar.scss"></style>
