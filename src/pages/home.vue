<script setup>
import CardList from '../components/CardList.vue';
import { useCountriesStore } from '@/stores/countriesList.js';

const countriesStore = useCountriesStore();
countriesStore.getCountries();

</script>

<template>
    <CardList />
</template>

<style scoped></style>