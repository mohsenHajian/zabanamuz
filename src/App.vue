<script setup></script>

<template>
    <router-view />
    <loading-spinner :isLoading="$store.state.isLoadingSpinner"></loading-spinner>
    <div class="loading-spinner-overlay" v-show="$store.state.isLoadingSpinner"></div>
</template>

<style scoped></style>
