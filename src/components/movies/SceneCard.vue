<template>
    <div class="scene-card card" @click="$router.push(`/movies/scene/${scene.id}`)">
        <img :src="scene.image_thumbnail || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VSvMdbuHvlt2eomHHicXOfMpfROKY0wykw&s'" alt="" />
        <div class="flex justify-between items-center w-full">
            <div class="flex items-center scene-level whitespace-nowrap">
                <Icon icon="mdi:cards" width="14px" height="14px" :style="{ fill: 'var(--surface-600)' }" /><span class="text-xs"> {{ scene.cards_count || 0 }} کارت </span>
            </div>
            <div class="flex items-center scene-level whitespace-nowrap">
                <Icon icon="mdi:youtube-subscription" width="14px" height="14px" :style="{ fill: 'var(--surface-600)' }" /><span class="text-xs"> سکانس {{ scene.order || index + 1 }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

// <<----------------------- props ----------------------->>

const props = defineProps({
    scene: {
        type: Object,
        default: {}
    },
    index: {
        type: Number,
        default: 0
    }
});

// <<----------------------- refs ----------------------->>

const stars = ref(0);

// <<----------------------- method ----------------------->>

const levelHandler = (level) => {
    switch (level) {
        case 'beginner':
            stars.value = 1;
            return 'مبتدی';
        case 'intermediate':
            stars.value = 2;
            return 'متوسط';
        case 'expert':
            stars.value = 3;
            return 'حرفه ای';
        default:
            return '-';
    }
};

// <<----------------------- computed ----------------------->>

const level = computed(() => {
    return levelHandler(props.scene.level);
});
</script>

<style lang="scss" scoped>
.scene-card {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: fit-content;
    position: relative;
    width: calc((100% / 5) - 14px);
    padding: 16px;
    background-color: var(--surface-100);
    cursor: pointer;
    .scene-level {
        background-color: var(--surface-50);
        border: 1px solid var(--surface-300);
        border-radius: 50px;
        padding: 6px 10px;
        gap: 4px;
    }
    img {
        border-radius: 10px;
    }
    .scene-card-footer {
        overflow-x: auto;
    }
}
@media only screen and (max-width: 1470px) {
    .scene-card {
        width: calc((100% / 4) - 14px);
    }
}
@media only screen and (max-width: 1200px) {
    .scene-card {
        width: calc((100% / 3) - 14px);
    }
}
@media only screen and (max-width: 768px) {
    .scene-card {
        width: calc((100% / 2) - 14px);
    }
}
@media only screen and (max-width: 576px) {
    .scene-card {
        width: 100%;
    }
}
</style>
