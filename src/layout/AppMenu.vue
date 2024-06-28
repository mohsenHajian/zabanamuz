<script setup>
import { computed, ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import AppTopbar from './AppTopbar.vue';
import { useLayout } from './composables/layout';

const { layoutState } = useLayout();
const model = ref([
    {
        items: [
            { label: 'داشبورد', icon: 'fluent:home-16-regular', to: '/' },
            { label: 'فیلم ها', icon: 'heroicons:video-camera', to: '/movies' }
        ]
    }
]);

const staticMenuMobileActive = computed(() => {
    return layoutState.staticMenuMobileActive.value
});
</script>

<template>
    <app-topbar :staticMenuMobileActive="staticMenuMobileActive"></app-topbar>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <!-- <li>
            <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
                <img src="/layout/images/banner-primeblocks.png" alt="Prime Blocks" class="w-full mt-3" />
            </a>
        </li> -->
    </ul>
</template>

<style lang="scss" scoped></style>
