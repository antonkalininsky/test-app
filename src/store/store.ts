import { defineStore } from "pinia";
import { ref } from "vue";
import type { Deal } from "@/common/types";

export const generalStore = defineStore(
    "store",
    () => {
        // переменные
        const mode = ref<number>(0);
        const filter = ref<number>(0);
        const favItems = ref<Array<number>>(new Array());
        const dealItems = ref<Array<Deal>>(new Array<Deal>());
        const dealCount = ref<number>(0);
        const searchWord = ref<string>("");

        function toggleFavourite(id: number): void {
            if (favItems.value.includes(id)) { 
                favItems.value.splice(favItems.value.indexOf(id), 1);
            } else {
                favItems.value.push(id);
            }
        }

        function checkFavourite(id: number): boolean {
            return favItems.value.includes(id);
        }

        function addDeal(id: number): void {
            dealItems.value.push({
                dealID: dealCount.value,
                itemID: id,
                isPaied: false,
            });
            dealCount.value++;
        }

        function payDeal(id?: number): void {
            if (id !== undefined) {
                dealItems.value.find((item) => id === item.dealID)!.isPaied =
                    true;
            }
        }


        return {
            mode,
            filter,
            favItems,
            dealItems,
            dealCount,
            searchWord,
            addDeal,
            payDeal,
            toggleFavourite,
            checkFavourite
        };
    },
    {
        persist: true
    }
);
