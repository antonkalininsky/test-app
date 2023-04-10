<script setup lang="ts">
import Navigation from "./Navigation.vue";
import SearchBar from "./SearchBar.vue";
</script>

<template lang="">
    <div class="wrapper-box">
        <Navigation />
        <SearchBar />
        <router-view></router-view>
    </div>
</template>

<style scoped>
.wrapper-box {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
}
</style>
