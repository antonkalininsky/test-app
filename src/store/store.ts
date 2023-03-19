import { defineStore } from "pinia";
import { ref } from "vue";
import type { Deal } from "@/common/types";


export const generalStore = defineStore("store", () => {
    // переменные
    const mode = ref<number>(0);
    const filter = ref<number>(0);
    const favItems = ref<Set<number>>(new Set());
    const dealItems = ref<Array<Deal>>(new Array<Deal>());
    const dealCount = ref<number>(0);
    const searchWord = ref<string>("");

    function dealIncrement(): void {
        dealCount.value++;
    }

    function updateLocalStorage(): void {
        localStorage.setItem("filter", String(filter.value));
        localStorage.setItem("searchWord", String(searchWord.value));
        localStorage.setItem("favItems", JSON.stringify([...favItems.value]));
        localStorage.setItem("dealCount", String(dealCount.value));
        localStorage.setItem("dealItems", JSON.stringify(dealItems.value));
    }

    function readLocalStorage(): void {
        if (localStorage.getItem("filter") !== null) {
            filter.value = parseInt(localStorage.getItem("filter")!);
        }
        if (localStorage.getItem("searchWord") !== null) {
            searchWord.value = localStorage.getItem("searchWord")!;
        }
        if (localStorage.getItem("favItems") !== null) {
            favItems.value = new Set<number>(
                JSON.parse(localStorage.getItem("favItems")!)
            );
        }
        if (localStorage.getItem("dealCount") !== null) {
            dealCount.value = parseInt(localStorage.getItem("dealCount")!);
        }
        if (localStorage.getItem("dealItems") !== null) {
            dealItems.value = JSON.parse(localStorage.getItem("dealItems")!);
        }
    }

    return {
        mode,
        filter,
        favItems,
        dealItems,
        dealCount,
        dealIncrement,
        searchWord,
        updateLocalStorage,
        readLocalStorage,
    };
});
