<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import SearchBar from "./components/SearchBar.vue";
import Card from "./components/Card.vue";
import { reactive, computed } from "vue";
import { generalStore } from "@/store/store";
import type { Item, ItemPlus } from "./common/types";
const store = generalStore();

// SETUP
store.readLocalStorage();
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

// METHODS
function getModeCards(): ItemPlus[] {
    switch (store.mode) {
        case 0:
            return state.Cards.filter((x) =>
                store.favItems.has(parseInt(x.id))
            ).map((x) => {
                return {
                    data: x,
                };
            });
        case 1:
            return state.Cards.map((x) => {
                return {
                    data: x,
                };
            });
        case 2:
            return store.dealItems.map((x) => {
                return {
                    data: state.Cards.find((y) => parseInt(y.id) === x.itemID),
                    dealID: x.dealID,
                } as ItemPlus;
            }) as ItemPlus[];
        default:
            return [];
    }
}

function searchCards() {
    const cards = getModeCards();
    if (store.searchWord === "") {
        return cards;
    }
    return cards.filter((x) =>
        x.data.title.toLowerCase().includes(store.searchWord.toLowerCase())
    );
}

// COMPUTED
const filteredCards = computed(() => {
    if (store.filter === 0) {
        return searchCards();
    }
    return searchCards().filter((x) => parseInt(x.data.state) === store.filter);
});
</script>

<template>
    <div class="wrapper-box">
        <Navigation />
        <SearchBar />
        <div class="results">
            <Card
                v-for="card in filteredCards"
                :data="card.data"
                :dealID="card.dealID"
                class="results__item"
            />
            <div class="results__empty text" v-if="filteredCards.length === 0">
                Ничего не найдено!
            </div>
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

.results__empty {
    width: fit-content;
    margin: 0 auto;

    font-weight: bold;
    font-size: 20px;
}
</style>
