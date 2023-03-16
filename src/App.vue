<script setup lang="ts">
import Navigation from "./components/Navigation.vue"
import SearchBar from "./components/SearchBar.vue"
import Card from "./components/Card.vue"


</script>

<template>
    <div class="wrapper-box">

        <Navigation />
        <SearchBar />

        <div class="results">
            <Card class="results__item"/>
        </div>
        <!-- /results -->
    </div>
    <!-- /wrapper-box -->
</template>

<style scoped>
.wrapper-box {
    max-width: 1200px;
    margin: 0 auto;
}


</style>
