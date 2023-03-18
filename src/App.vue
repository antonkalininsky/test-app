<script setup lang="ts">
import Navigation from "./components/Navigation.vue"
import SearchBar from "./components/SearchBar.vue"
import Card from "./components/Card.vue"
import cards from "@/data/items.json";
import { reactive, computed } from "vue";

const cardsIDs: string[] = ['1', '2'];

const shownCards = computed(() => cards.filter((x) => cardsIDs.includes(x.id)));

</script>

<template>
    <div class="wrapper-box">
        <Navigation />
        <SearchBar />
        <div class="results">
            <Card v-for="card in shownCards" :data="card" class="results__item"/>
        </div>
    </div>
</template>

<style scoped>
.wrapper-box {
    max-width: 1200px;
    margin: 0 auto;
}

.results__item {
    margin-bottom: 40px;
}
</style>
