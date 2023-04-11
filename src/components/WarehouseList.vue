<script setup lang="ts">
import Card from "./Card.vue";
import { reactive, computed } from "vue";
import { generalStore } from "@/store/store";
import type { Item } from "@/common/types";
import { getModeCards } from "@/funs/getModeCards";
import { searchCards } from "@/funs/searchCards";
import { filterCards } from "@/funs/filterCards";
const store = generalStore();

// SETUP
const state = reactive({
    Cards: new Array<Item>(),
});
fetch("./items.json", {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})
    .then((response) => response.json())
    .then((data) => (state.Cards = data));

// COMPUTED
const shownCards = computed(() => {
    return filterCards(
        searchCards(getModeCards(state.Cards, 1), store.searchWord),
        store.filter
    );
});
</script>

<template lang="">
    <div class="results">
        <Card
            v-for="card in shownCards"
            :data="card.data"
            :dealID="card.dealID"
            class="results__item"
        />
        <div class="results__empty text" v-if="shownCards.length === 0">
            Ничего не найдено!
        </div>
    </div>
</template>

<style scoped>
.results__item {
    margin-bottom: 40px;
}

.results__empty {
    width: fit-content;
    margin: 0 auto;

    font-weight: bold;
    font-size: 20px;
}
</style>
