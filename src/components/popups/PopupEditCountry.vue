<script setup>
import { ref } from 'vue';
import StarRatingModule from 'vue-star-rating';
import { addCountry } from './../../utils/api';
import { useCountriesStore } from '@/stores/countriesList.js';
import { usePopupsStore } from '@/stores/popups.js';
import TextButton from '../buttons/TextButton.vue';
import PopupWithForm from '../popups/PopupWithForm.vue';

// в сборке компонент может лежать внутри default
const StarRating = StarRatingModule.default || StarRatingModule;

const countriesStore = useCountriesStore();
const popupsStore = usePopupsStore();
const visit = ref('');

const newCountryData = ref({
    // id: Date.now(),
    name: '',
    flag: '',
    visits: [],
    rating: 0,
})

function addVisit() {
    newCountryData.value.visits.push(visit.value);
    visit.value = '';
}

function clearForm() {
    newCountryData.value.name = '';
    newCountryData.value.flag = '';
    newCountryData.value.visits = [];
    newCountryData.value.rating = 0;
}

async function saveCard() {
    await addCountry(newCountryData.value);
    await countriesStore.getCountries();

    popupsStore.closePopupAddCountry();
    clearForm();
}

</script>

<template>
    <PopupWithForm :isOpened="popupsStore.isPopupEditCountryOpen" title="Изменить информацию о стране"
        :close="popupsStore.closePopupEditCountry">
        <form class="form">
            <div class="form__inputs">
                <div class="form__inputs-inner">
                    <div class="form__section">
                        <label htmlFor="country-name" class="form__label">Название страны</label>
                        <input class="form__input" type="text" id="country-name" name="name" placeholder="" required
                            v-model="newCountryData.name" />
                        <span class="form__input-error" id="country-name-error">error text</span>
                    </div>

                    <div class="form__section">
                        <label htmlFor="flag-link" class="form__label">Флаг</label>
                        <input type="url" class="form__input" id="flag-link" name="link"
                            placeholder="Ссылка на картинку" required v-model="newCountryData.flag" />
                        <span class="form__input-error" id="flag-link-error">error text</span>
                    </div>

                    <div class="form__section">
                        <p class="form__rating">Оценка: {{ newCountryData.rating }}</p>
                        <StarRating v-model:rating="newCountryData.rating" :increment="0.5" :star-size="30"
                            :show-rating="false" active-color="$dark-base" inactive-color="#d8d8d8" />
                    </div>
                </div>

                <div class="form__section form__section--add-list">
                    <label htmlFor="visits" class="form__label">Время посещения</label>
                    <input class="form__input" type="url" id="visits" name="link" placeholder="Любой формат" required
                        v-model="visit" />
                    <span class="form__input-error" id="visits-error">error text</span>
                    <button class="form__input-btn" @click="addVisit" type="button">+</button>
                    <ul class="form__list">
                        <li class="form__list-item" v-for="visit in newCountryData.visits">
                            {{ visit }}
                        </li>
                    </ul>
                </div>
            </div>

            <TextButton type="submit" text="Сохранить"
                @click.prevent="saveCard(); popupsStore.closePopupEditCountry()" />
        </form>
    </PopupWithForm>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;

.form__inputs {
    display: flex;
    gap: 20px;
}

.form__inputs-inner {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.form__section {
    position: relative;

    &--add-list {
        .form__input {
            padding-right: 30px;
        }

        .form__input-error {
            top: 20px;
        }
    }
}

.form__label {
    @include font-14px;
    font-weight: 600;
    display: block;
    margin-bottom: 2px;
}

.form__input {
    @include font-14px;
    border: 1px solid rgba($dark-base, 20%);
    width: 100%;
    box-sizing: border-box;
    border-radius: 2px;

    font-style: normal;
    font-weight: normal;
    color: #000000;

    &:focus {
        outline-color: rgba(0, 0, 0, 0.2);
    }
}

.form__input-error {
    position: absolute;
    left: 0;
    top: 100%;

    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: $red;

    opacity: 1;
    transition: opacity 0.3s;

    // &.active {
    //     opacity: 1;
    // }
}

.form__input-btn {
    position: absolute;
    top: 30px;
    right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: $dark-base;
    color: $white;
    padding: 0;
    border: 0;
    border-radius: 2px;
}

.form__rating {
    @include font-14px;
    font-weight: 600;
    margin: 0 0 2px 0;
}

.form__list {
    margin: 4px 0 0 0;
    padding-left: 20px;
}

.form__list-item {
    @include font-14px;
    color: $dark-base;
    margin-bottom: 4px;

    &:last-child {
        margin-bottom: 0;
    }
}

@media screen and (min-width: $mobile-large) {
    .form__inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px 10px;
    }

    .form__section {
        width: 100%;
    }

    .form__input {
        height: 36px;
        padding: 6px 10px;
    }
}
</style>