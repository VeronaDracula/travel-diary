<script setup>
import Actions from '../components/Actions.vue';
import CardList from '../components/CardList.vue';
import PopupAddCountry from '../components/popups/PopupAddCountry.vue';
import { useCountriesStore } from '@/stores/countriesList.js';

const countriesStore = useCountriesStore();
countriesStore.getCountries();

</script>

<template>
    <Actions />
    <CardList />

    <Teleport defer to="#popups">
        <PopupAddCountry />
    </Teleport>
</template>

<style scoped></style>