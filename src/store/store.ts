import { defineStore } from "pinia";
import { ref, computed } from 'vue';

// TODO прикрутить типы
export const generalStore = defineStore('store', () => {
    // переменные
    const mode = ref(0);
    const filter = ref(0);

    return {mode, filter};
})