import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getOptions } from "../utils/conf";

export const useCountryStore = defineStore('country', () => {
    const country = ref([]);

    async function getCountry(id) {
        country.value = [];

        try {
            const url = `${import.meta.env.VITE_API_URL}/countries/${id}`;

            const response = await fetch(url, getOptions);

            const data = await response.json();

            if (id === data.id) {
                country.value = data;
            }

            // if (!response.ok) {
            //     throw new Error('Ошибка');
            // } else {
            //     country.value = data;
            // }
        }
        catch (e) {
            console.log(e);
        }
    }

    return {
        country,
        getCountry
    }
})