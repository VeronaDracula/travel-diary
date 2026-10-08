import router from '../utils/router.js';

import { postOptions, deleteOptions } from "../utils/conf.js";


export async function addCountry(newData) {

    try {
        const url = `${import.meta.env.VITE_API_URL}/countries`;
        const response = await fetch(url, postOptions(JSON.stringify(newData)));
        const data = await response.json();

        return data
    }
    catch (e) {
        console.log(e);
    }
}

export async function removeCountry(id) {

    try {
        const url = `${import.meta.env.VITE_API_URL}/countries/${id}`;
        const response = await fetch(url, deleteOptions());

        if (!response.ok) {
            throw new Error(`Ошибка удаления: ${response.status}`);
        }

        const text = await response.text();
        const data = text ? JSON.parse(text) : true;

        router.push('/'); // редирект на главную только при успехе

        return data;
    }
    catch (e) {
        console.log(e);
    }
}
