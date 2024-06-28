<template>
    <div class="flex flex-wrap align-items-center gap-x-5">
        <div class="flex items-center w-full mb-4">
            <h4 class="text-xl font-bold">سکانس ها</h4>
        </div>
        <div class="flex items-center w-full mb-4">
            <p class="scene-breadcrumb text-sm"><span>لیست فیلم ها ></span><span>مبتدی ></span><p v-if="$store.state.selectedMovie">{{ $store.state.selectedMovie.name }}</p></p>
        </div>
        <p v-if="!sequenceList?.length">سکانسی یافت نشد</p>
        <SceneCard v-for="(scene, index) in sequenceList" :key="scene.id" :index="index" :scene="scene" />
    </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, inject, watch } from 'vue';
import SceneCard from '../../components/movies/SceneCard.vue';

const { proxy } = getCurrentInstance();
const repositories = inject('repositories');

// <<----------------------- refs ----------------------->>

const loading = ref(false);
const sequenceList = ref([]);

// <<----------------------- api ----------------------->>

const fetchData = async () => {
    loading.value = true;
    proxy.$store.commit('setIsLoadingSpinner', true);
    try {
        if (proxy.$route.params.id) {
            const response = await repositories.getMoviesApi.getMovieSequence(proxy.$route.params.id);
            sequenceList.value = response.data;
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
.scene-breadcrumb {
    display: flex;
    align-items: center;
    gap: 5px;
    p {
        position: relative;
        bottom: 1px;
    }
    span {
        opacity: 0.5;
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
</style>
