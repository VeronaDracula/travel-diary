<script setup>
import { removeCountry } from './../../utils/api';
import { usePopupsStore } from '@/stores/popups.js';
import TextButton from '../buttons/TextButton.vue';
import { useRoute } from 'vue-router'

const popupsStore = usePopupsStore();
const route = useRoute()
const id = route.params.id;

function deleteCountry() {
    removeCountry(id);

    popupsStore.closePopupRemoveCountry();
}

function getCountryName() {
    // const card = cards.value.find((i) => i.id === id);
    // if (card) {
    //     return card.name
    // }
}


</script>

<template>
    <section class="popup" :class="{ opened: popupsStore.isPopupRemoveCountryOpen }">
        <div class="popup__container">
            <button class="popup__close page__button" @click="popupsStore.closePopupRemoveCountry"
                type="button"></button>
            <div class="popup__content">
                <div class="popup__title">Вы уверены, что хотите удалить эту страну?</div>

                <div class="popup__btns">
                    <TextButton type="submit" text="Да" width="small" @click="deleteCountry" />
                    <TextButton type="submit" text="Нет" width="small" @click="popupsStore.closePopupRemoveCountry" />
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;

.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba($dark-base, 50%);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 0.5s linear;

    &:hover {
        cursor: pointer;
    }

    &.opened {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, opacity 0.5s linear;
    }
}

.popup__container {
    max-width: 282px;
    width: 100%;
    background: $white;
    box-shadow: 0 0 25px rgba($dark-base, 15%);
    border-radius: 10px;
    position: relative;
}

.popup__close {
    position: absolute;
    height: 26px;
    width: 26px;
    top: -45px;
    right: 5px;
    background: transparent center no-repeat url("../../assets/images/icons/close-icon.svg");
    background-size: auto;
    border: none;
}

.popup__content {
    padding: 27px 22px 25px 22px;
}

.popup__title {
    @include font-20px;
    color: $dark-base;
    font-weight: 600;
    text-align: center;
}

.popup__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

@media screen and (min-width: $mobile-large) {
    .popup__container {
        max-width: 400px;
        width: 100%;
    }

    .popup__close {
        height: 40px;
        width: 40px;
        right: -40px;
    }

    .popup__content {
        padding: 34px;
    }
}
</style>