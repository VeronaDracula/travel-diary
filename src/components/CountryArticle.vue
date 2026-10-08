<script setup>
import { ref, reactive, watch } from 'vue';
import { storeToRefs } from 'pinia'
import { useCountryStore } from '@/stores/country.js';
import { useRoute } from 'vue-router'


const route = useRoute()
const id = route.params.id

const countryStore = useCountryStore();
countryStore.getCountry(id);
const { country } = storeToRefs(countryStore);

</script>

<template>
    <section class="country">
        <div class="country__main-box">
            <h2 class="country__name">{{ country.name }}</h2>

            <div class="country__section" v-if="country?.cities?.length > 0">
                <h3 class="country__title">Города</h3>
                <ul class="country__list">
                    <li v-for="city in country.cities" class="country__list-item">
                        {{ city }}
                    </li>
                </ul>
            </div>

            <div class="country__section">
                <h3 class="country__title">Посещения</h3>
                <ul class="country__list">
                    <li v-for="visit in country.visits" class="country__list-item">
                        {{ visit }}
                    </li>
                </ul>
            </div>

            <div class="country__section" v-if="country?.text && country?.text !== ''">
                <h3 class="country__title">Впечатления</h3>
                <p class="country__text">
                    {{ country.text }}
                </p>
            </div>

            <div class="country__section" v-if="country?.photos?.length > 0">
                <h3 class="country__title">Галерея</h3>
                <div class="country__gallery">
                    <img class="country__photo" alt="">
                    <img class="country__photo" alt="">
                    <img class="country__photo" alt="">
                </div>
            </div>
        </div>

        <div class="country__side-box">
            <img class="country__flag" :src="country.flag" alt="">
            <div class="country__rating">{{ country.rating }}</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.country {
    color: $white;
    position: relative;
}

.country__name {
    @include font-18px;
    margin: 0 0 20px 0;
    padding-right: 100px;
}

.country__section {
    margin-bottom: 20px
}

.country__title {
    @include font-16px;
    margin: 0 0 14px 0;
}

.country__list {
    margin: 0;
}

.country__list-item {
    @include font-16px;
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }
}

.country__text {
    @include font-16px;
}

.country__gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}

.country__photo {
    width: 100%;
}

.country__side-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    position: absolute;
    top: -0;
    right: 0;
}

.country__flag {
    height: 40px;
}

.country__rating {
    @include font-18px;

    &::before {
        content: '★';
        @include font-24px;
        margin-right: 4px;
    }
}

@media (min-width: $mobile-large) {
    .country {
        padding-top: 10px;
    }

    .country__name {
        @include font-24px;
        margin: 0 0 26px 0;
        padding-right: 300px;
    }

    .country__flag {
        height: 100px;
    }

    .country__title {
        @include font-18px;
        margin: 0 0 16px 0;
    }

    .country__rating {
        @include font-20px;

        &::before {
            @include font-28px;
        }
    }
}
</style>