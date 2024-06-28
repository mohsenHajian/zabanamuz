<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col md:flex-row justify-between md:items-center w-full mb-4">
            <h4 class="text-xl font-bold mb-4 md:mb-0">فیلم ها</h4>
            <div class="movie-filters">
                <div class="movie-filters-item" :class="levelStatus === 'beginner' && 'movie-filters-item-active'" @click="levelStatusHandler('beginner')">مبتدی</div>
                <div class="movie-filters-item" :class="levelStatus === 'intermediate' && 'movie-filters-item-active'" @click="levelStatusHandler('intermediate')">متوسط</div>
                <div class="movie-filters-item" :class="levelStatus === 'expert' && 'movie-filters-item-active'" @click="levelStatusHandler('expert')">پیشرفته</div>
            </div>
            <h4 class="text-xl font-bold"></h4>
        </div>
        <div class="flex flex-wrap align-items-center w-full gap-x-5 gap-y-6">
            <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
            <p v-if="!movieList?.length">فیلمی یافت نشد</p>
            <div v-if="movieList?.length < totalRecords" class="flex justify-center w-full mt-5">
                <button @click="loadMoreHandler" class="btn load-more">نمایش بیشتر</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, inject, watch } from 'vue';
import MovieCard from '../../components/movies/MovieCard.vue';

const { proxy } = getCurrentInstance();
const repositories = inject('repositories');

// <<----------------------- refs ----------------------->>

const loading = ref(false);
const movieList = ref([]);
const totalRecords = ref(0);
const levelStatus = ref('intermediate');
const filters = ref({ level: 'intermediate' });
const page = ref(1);

// <<----------------------- method ----------------------->>

const loadMoreHandler = () => {
    if (movieList.value.length < totalRecords.value) {
        page.value += 10;
        fetchData(true);
    }
};
const levelStatusHandler = (value) => {
    if (levelStatus.value !== value) {
        levelStatus.value = value;
        filters.value.level = value;
        fetchData();
    }
};

// <<----------------------- api ----------------------->>

const fetchData = async (isLoadMore) => {
    loading.value = true;
    proxy.$store.commit('setIsLoadingSpinner', true);
    try {
        const response = await repositories.getMoviesApi.getMovies(filters.value, null, page.value);
        totalRecords.value = response.meta.total;
        if (isLoadMore) {
            movieList.value = movieList.value.concat(response.data);
        } else {
            movieList.value = response.data;
        }
    } catch (err) {
        console.error(err);
    }
    proxy.$store.commit('setIsLoadingSpinner', false);
    loading.value = false;
};
// <<----------------------- lifecycle  ----------------------->>

onMounted(async () => {
    fetchData();
});
</script>
<style lang="scss" scoped>
.movie-filters {
    background-color: var(--surface-0);
    border: 1px solid var(--surface-300);
    border-radius: 10px;
    display: flex;
    padding: 10px;
    align-items: center;
    color: var(--surface-600);
    font-size: 18px;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    .movie-filters-item {
        padding: 14px 24px;
        border-radius: 10px;
        cursor: pointer;
    }
    .movie-filters-item-active {
        background-color: var(--surface-200);
        color: var(--absolute-opposite-original);
    }
}
.load-more {
    color: var(--absolute-opposite-original);
    font-size: 16px;
    width: 288px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 1px solid var(--surface-300);
    background-color: var(--surface-100);
    border-radius: 7px;
    font-weight: 400;
}
@media only screen and (max-width: 576px) {
    .movie-filters {
        font-size: 14px;
        width: 100%;
        height: fit-content;
        .movie-filters-item {
            padding: 10px 18px;
            width: calc(100% / 3);
            text-align: center;
        }
        .movie-filters-item-active {
            background-color: var(--surface-200);
            color: var(--absolute-opposite-original);
        }
    }
}
</style>
