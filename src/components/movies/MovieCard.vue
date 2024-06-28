<template>
    <div class="movie-card card" ref="movieCard" :style="{ minHeight: movieCardHeight }" @click="goToSceneHandler">
        <img :src="movie.image_thumbnail" alt="" />
        <div class="flex justify-between items-center w-full">
            <div class="flex items-center movie-level whitespace-nowrap">
                <span class="text-xs">سطح {{ level }}</span
                ><Icon v-for="star in stars" icon="material-symbols:kid-star-sharp" width="14px" height="14px" style="color: #e50000" />
            </div>
            <div class="flex items-center movie-level whitespace-nowrap">
                <Icon icon="mdi:youtube-subscription" width="14px" height="14px" :style="{ fill: 'var(--surface-600)' }" /><span class="text-xs">{{ movie.sequences_count || 0 }} سکانس </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// <<----------------------- props ----------------------->>

const props = defineProps({
    movie: {
        type: Object,
        default: {}
    }
});

// <<----------------------- refs ----------------------->>

const movieCard = ref(null);
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
            return 'پیشرفته';
        default:
            return '-';
    }
};
const goToSceneHandler = async () => {
    await proxy.$store.commit('setSelectedMovie', { name: props.movie.translated_name });
    proxy.$router.push(`/movies/scene/${props.movie.id}`);
};

// <<----------------------- computed ----------------------->>

const level = computed(() => {
    return levelHandler(props.movie.level);
});
const movieCardHeight = computed(() => {
    return movieCard.value ? movieCard.value.offsetWidth * 1.42 + 'px' : 'fit-content';
});
</script>

<style lang="scss" scoped>
.movie-card {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: calc(calc(100% / 5) - 14px);
    padding: 16px;
    background-color: var(--surface-100);
    justify-content: space-between;
    margin: 0;
    cursor: pointer;
    .movie-level {
        background-color: var(--surface-50);
        border: 1px solid var(--surface-300);
        border-radius: 50px;
        padding: 6px 10px;
        gap: 4px;
        color: var(--gray-600);
    }
    img {
        border-radius: 10px;
        flex-grow: 1;
    }
}
@media only screen and (max-width: 1782px) {
    .movie-card {
        width: calc((100% / 4) - 14px);
    }
}
@media only screen and (max-width: 1514px) {
    .movie-card {
        width: calc((100% / 3) - 14px);
    }
}
@media only screen and (max-width: 1204px) {
    .movie-card {
        width: calc((100% / 2) - 14px);
    }
}
@media only screen and (max-width: 992px) {
    .movie-card {
        width: calc((100% / 3) - 14px);
    }
}
@media only screen and (max-width: 838px) {
    .movie-card {
        width: calc((100% / 2) - 14px);
    }
}
@media only screen and (max-width: 576px) {
    .movie-card {
        width: 100%;
    }
}
</style>
