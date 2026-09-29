import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getOptions } from "../utils/conf";

export const useCountriesStore = defineStore('countries', () => {
    const cards = ref([]);
   
    async function getCountries() {

        try {
            const url = `${import.meta.env.VITE_API_URL}/countries`;

            const response = await fetch(url, getOptions);

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Ошибка');
            } else {
                cards.value = data;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return {
        cards,
        getCountries
    }
})