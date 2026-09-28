<script setup>
import { storeToRefs } from 'pinia'
import Card from './Card.vue';

import Flag1 from '../assets/images/ba.png'
import Flag2 from '../assets/images/cy.png'
import Flag3 from '../assets/images/np.png'
import Flag4 from '../assets/images/tz.png'

</script>

<template>
    <ul class="cards">
        <Card :img="Flag1" title="Босния и Герцеговина" id="1"/>
        <Card :img="Flag2" title="Кипр" id="2"/>
        <Card :img="Flag3" title="Непал" id="3"/>
        <Card :img="Flag4" title="Танзания" id="4"/>
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