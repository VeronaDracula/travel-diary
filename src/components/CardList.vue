<script setup>
import { storeToRefs } from 'pinia'
import Card from './Card.vue';
import { useCountriesStore } from '@/stores/countriesList.js';


const countriesStore = useCountriesStore();
const { cards } = storeToRefs(countriesStore);

</script>

<template>
    <ul class="cards">
        <Card v-for="card in cards" :key="card.id" :id="card.id" :flag="card.flag" :name="card.name"
            :visits="card.visits" :rating="card.rating" />
    </ul>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

@media (min-width: $mobile-large) {
    .cards {
        grid-template-columns: 1fr 1fr;
    }
}
</style>