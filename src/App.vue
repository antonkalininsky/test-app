<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import SearchBar from "./components/SearchBar.vue";
import Card from "./components/Card.vue";
import cards from "@/data/items.json";
import { computed } from "vue";
import { generalStore } from "@/store/store";
const store = generalStore();

interface Item {
    id: string;
    state: string;
    pic: string;
    title: string;
    location: string;
    seller: string;
    type: string;
    description: string;
    amount: string;
    price: string;
}

interface ItemPlus {
    data: Item;
    dealID?: number;
}

function getModeCards(): ItemPlus[] {
    switch (store.mode) {
        case 0:
            return cards
                .filter((x) => store.favItems.has(parseInt(x.id)))
                .map((x) => {
                    return {
                        data: x,
                    };
                });
        case 1:
            return cards.map((x) => {
                return {
                    data: x,
                };
            });
        case 2:
            return store.dealItems.map((x) => {
                return {
                    data: cards.find((y) => parseInt(y.id) === x.itemID),
                    dealID: x.dealID,
                } as ItemPlus;
            }) as ItemPlus[];
        default:
            return [];
    }
}

const filteredCards = computed(() => {
    if (store.filter === 0) {
        return getModeCards();
    }
    return getModeCards().filter(
        (x) => parseInt(x.data.state) === store.filter
    );
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
