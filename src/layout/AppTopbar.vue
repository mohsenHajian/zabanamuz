<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const isDarkMode = ref(false);
const router = useRouter();

const props = defineProps({
    staticMenuMobileActive: {
        type: Boolean,
        default: false
    }
});

onMounted(() => {
    if (localStorage.getItem('isDark') !== null) {
        isDarkMode.value = localStorage.getItem('isDark');
        changeThemeHandler();
    }
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.png`;
});

const darkModeHandler = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('isDark', isDarkMode.value);
    changeThemeHandler();
};

const changeThemeHandler = () => {
    let linkTag = document.querySelector('link[rel="stylesheet"]');
    if (linkTag) {
        linkTag.href = `/themes/aura-${isDarkMode.value ? 'dark' : 'light'}-green/theme.css`;
    }
};

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/documentation');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-topbar" :class="staticMenuMobileActive && 'pt-4 border-none'">
        <div class="flex align-items-center" :style="{ direction: staticMenuMobileActive ? 'ltr' : 'rtl', gap: '10px' }">
            <button class="p-link layout-topbar-button layout-menu-button" style="margin: 0" @click="onMenuToggle()">
                <Icon icon="gg:menu" :width="staticMenuMobileActive ? '20px' : '24px'" :height="staticMenuMobileActive ? '20px' : '24px'" :style="{ fill: 'var(--surface-0)' }" />
            </button>
            <div class="flex align-items-center layout-topbar-button-container" :style="{ display: staticMenuMobileActive && 'flex', direction: staticMenuMobileActive && 'rtl' }">
                <button class="p-link layout-topbar-button" @click="darkModeHandler">
                    <Icon :icon="!isDarkMode ? 'bi:moon-stars' : 'hugeicons:sun-03'" :width="staticMenuMobileActive ? '20px' : '24px'" :height="staticMenuMobileActive ? '20px' : '24px'" :style="{ fill: 'var(--surface-0)' }" />
                </button>

                <button class="p-link layout-topbar-button">
                    <Icon icon="lets-icons:user" :width="staticMenuMobileActive ? '20px' : '24px'" :height="staticMenuMobileActive ? '20px' : '24px'" :style="{ fill: 'var(--surface-0)' }" />
                </button>
                <button class="p-link layout-topbar-button">
                    <Icon icon="pajamas:power" :width="staticMenuMobileActive ? '20px' : '24px'" :height="staticMenuMobileActive ? '20px' : '24px'" style="color: #e50000" />
                </button>
            </div>
        </div>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-calendar"></i>
                <span>Calendar</span>
            </button>
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button>
            <button @click="onSettingsClick()" class="p-link layout-topbar-button">
                <i class="pi pi-cog"></i>
                <span>Settings</span>
            </button>
        </div>
        <router-link to="/" class="layout-topbar-logo" dir="ltr">
            <img :src="logoUrl" alt="logo" />
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.layout-topbar-button-container {
    gap: 10px;
}
</style>
