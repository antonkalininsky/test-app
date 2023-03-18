import { defineStore } from "pinia";
import { ref, computed } from 'vue';

interface Deal {
    dealID: number,
    itemID: number,
    isPaied: boolean
}

export const generalStore = defineStore('store', () => {
    // переменные
    const mode = ref<number>(0);
    const filter = ref<number>(0);
    const favItems = ref<Set<number>>(new Set());
    const dealItems = ref<Array<Deal>>(new Array<Deal>());
    const dealCount = ref<number>(0);

    function dealIncrement(): void {
        dealCount.value++;
    }

    return {mode, filter, favItems, dealItems, dealCount, dealIncrement};
})