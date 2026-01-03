<template>
    <x-application-layout-template>
        <template #system-bar>
            <x-system-bar-molecule />
        </template>

        <template #navigation-drawer>
            <nav-drawer v-model="isAppNavDrawerOpen" :app-bar-order="appBarOrder" @toggle-order="toggleAppBarOrder" />
        </template>

        <template #app-bar>
            <x-app-bar density="compact" flat :order="appBarOrder">
                <x-btn icon variant="text" class="ml-2" @click="isAppNavDrawerOpen = !isAppNavDrawerOpen">
                    <x-icon color="primary">fad fa-bars</x-icon>
                </x-btn>

                <x-avatar v-if="activePlugin && activePlugin.icon" size="28" class="mx-3">
                    <v-img :src="activePlugin.icon" cover />
                </x-avatar>

                <v-toolbar-title>
                    {{ $route.name }}
                </v-toolbar-title>

                <v-spacer />

                <x-switch v-model="appBarOrder" class="me-2" :false-value="0" :true-value="-1" label="Toggle order"
                    hide-details inset />
            </x-app-bar>
        </template>

        <template #default>
            <trinity-rings-spinner v-if="spinner" />
            <Billboard v-if="!isBillboardOff" fluid :plugin="activePlugin" id="v-main-billboard" />
            <router-view />
        </template>

        <template #footer>
            <x-footer app class="pa-2 text-body-2 copyright" theme="dark" absolute>
                <v-row justify="center" align="center" class="ma-0">
                    <v-col class="text-center">
                        <v-btn-toggle />
                        &nbsp;
                        <x-btn variant="outlined" color="#E151AA" size="small">
                            Support COMPASS&nbsp;
                            <x-icon size="small" icon="fa fa-heart" />
                        </x-btn>
                    </v-col>
                </v-row>
            </x-footer>
        </template>

        <template #overlays>
            <x-bottom-sheet v-model="bottomSheet" :scrim="false">
                <v-toolbar color="#212121" theme="dark" density="compact">
                    <x-icon start class="ml-4" icon="fad fa-compass" />
                    <x-chip class="ml-4" color="green">
                        <span>Premium</span>
                        <x-icon end icon="fa fa-star" />
                    </x-chip>
                    <v-spacer />
                    <v-toolbar-title class="headline d-flex d-sm-none">
                        COMPASS
                        <x-avatar size="32" rounded="0" />
                        <x-chip color="green">
                            <x-icon icon="fa fa-star" />
                        </x-chip>
                    </v-toolbar-title>
                    <v-toolbar-title class="d-none d-sm-flex">
                        COMPASS
                    </v-toolbar-title>
                    &nbsp;
                    <v-spacer />
                    <x-btn icon variant="text" @click="bottomSheet = false">
                        <x-icon icon="fa fa-times" />
                    </x-btn>
                </v-toolbar>
                <x-list>
                    <v-row class="ma-0">
                        <v-col v-for="plugin in plugins" :key="plugin.TextDomain" cols="3" lg="2">
                            <x-list-item @click="
                                bottomSheet = false;
                            $router.push({
                                path: getTextDomainPath(plugin.TextDomain),
                                hash: '#v-main-billboard'
                            });
                            ">
                                <template #prepend>
                                    <x-avatar size="64" class="d-none d-xl-flex">
                                        <v-img :src="plugin.icon" :alt="plugin.title" cover />
                                    </x-avatar>
                                    <x-avatar size="48" class="d-flex d-xl-none">
                                        <v-img :src="plugin.icon" :alt="plugin.title" cover />
                                    </x-avatar>
                                </template>
                                <v-list-item-title class="text-right">
                                    {{ plugin.Name }}
                                </v-list-item-title>
                            </x-list-item>
                        </v-col>
                    </v-row>
                </x-list>
            </x-bottom-sheet>
        </template>
    </x-application-layout-template>
</template>

<script lang="ts" src="./x-compass-layout.controller.ts"></script>
