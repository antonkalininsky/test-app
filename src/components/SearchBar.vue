<script setup lang="ts">
import { watch, ref } from "vue";
import { generalStore } from "@/store/store";
import { debounce } from "@/funs/debounce"
import { FilterState } from "@/common/types";
const store = generalStore();

const searchWord = ref<string>("");
searchWord.value = store.searchWord;

const searchDebouncer = debounce((word: string) => {
    store.searchWord = word;
}, 300);
watch(searchWord, () => {
    searchDebouncer(searchWord.value);
});

function setSearchFilter(num: FilterState): void {
    store.filter = num;
}
</script>

<template>
    <div class="search text">
        <div class="search__filter">
            <button
                class="search__option text text--light"
                :class="{ 'search__option--active': store.filter === 0 }"
                @click="setSearchFilter(FilterState.No)"
            >
                Все типы
            </button>
            <button
                class="search__option text text--light"
                :class="{ 'search__option--active': store.filter === 1 }"
                @click="setSearchFilter(FilterState.Direct)"
            >
                Прямые продажи
            </button>
            <button
                class="search__option text text--light"
                :class="{ 'search__option--active': store.filter === 2 }"
                @click="setSearchFilter(FilterState.Auction)"
            >
                Аукцион
            </button>
        </div>
        <div class="search__box">
            <input
                type="search"
                name=""
                id=""
                class="search__input text"
                v-model="searchWord"
            />
            <button class="search__btn text">
                <span class="search__btn-text">Search</span>
                <img
                    src="@/assets/img/search/search.svg"
                    alt=""
                    srcset=""
                    class="search__btn-img"
                />
            </button>
        </div>
    </div>
</template>

<style scoped>
.search {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 44px;
}

.search__filter {
    padding: 12px 0;
    background-color: #f4f5f9;
    border: 1px solid #e0e3ee;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.search__option {
    background-color: unset;
    border: unset;
    margin: 0 12px;

    cursor: pointer;

    font-size: 15px;
}

.search__option:hover {
    text-decoration: underline 1px solid;
    text-underline-offset: 2px;
}

.search__option--active {
    color: #2d3b87;
}

.search__box {
    position: relative;
}

.search__input {
    padding: 20px 4px 20px 20px;
    width: 274px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #e0e3ee;

    font-size: 15px;
}

.search__btn {
    position: absolute;
    right: 4px;
    top: 4px;

    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: #2d3b87;
    border: unset;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}

.search__btn:hover {
    background-color: #4f60c0;
}

.search__btn:active {
    background-color: #2d3b87;
    border-top: 2px solid #0f1956;
}

.search__btn-text {
    display: none;
}

@media screen and (max-width: 700px) {
    .search {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: center;
    }
    .search__box {
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 400px) {
    .search__option {
        font-size: 12px;
    }
}
</style>
