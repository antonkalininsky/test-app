import { defineStore } from "pinia";
import { ref, computed } from 'vue';

// TODO прикрутить типы
export const generalStore = defineStore('store', () => {
    const test = ref(69);
    const getTest = computed(() => test);

    return {test, getTest};
})