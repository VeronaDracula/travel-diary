import { ref } from 'vue'

import { postOptions } from "../utils/conf.js";


export async function addCountry(newData) {

    try {
        const url = `${import.meta.env.VITE_API_URL}/countries`;

        const response = await fetch(url, postOptions(JSON.stringify(newData)));

        const data = await response.json();

        // if (!response.ok) {
        //     throw new Error('Ошибка');
        // } else {
        //     cards.value = data;
        // }

        return data
    }
    catch (e) {
        console.log(e);
    }
}
