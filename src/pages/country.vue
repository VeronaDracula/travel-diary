<script setup>
import ActionsCountry from '../components/ActionsCountry.vue';
import CountryArticle from '../components/CountryArticle.vue';
import PopupDelete from '../components/popups/PopupDelete.vue';
import PopupEditCountry from '../components/popups/PopupEditCountry.vue';

</script>

<template>
    <CountryArticle />
    <ActionsCountry />

    <Teleport defer to="#popups">
        <PopupDelete />
        <PopupEditCountry />
    </Teleport>
</template>

<style lang="scss" scoped></style>