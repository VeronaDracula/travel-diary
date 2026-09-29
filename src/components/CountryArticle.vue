<script setup>

import Flag1 from '../assets/images/ba.png';
import imgV from '../assets/images/img-v.jpg';
import imgG from '../assets/images/img-g.jpg';

</script>

<template>
    <section class="country">
        <div class="country__main-box">
            <h2 class="country__name">Босния и Герцеговина</h2>

            <div class="country__section">
                <h3 class="country__title">Города</h3>
                <ul class="country__list">
                    <li class="country__list-item">
                        Вызима
                    </li>
                </ul>
            </div>

            <div class="country__section">
                <h3 class="country__title">Посещения</h3>
                <ul class="country__list">
                    <li class="country__list-item">
                        март 2020
                    </li>
                    <li class="country__list-item">
                        апрель 2025
                    </li>
                </ul>
            </div>

            <div class="country__section">
                <h3 class="country__title">Впечатления</h3>
                <p class="country__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>

            <div class="country__section">
                <h3 class="country__title">Галерея</h3>
                <div class="country__gallery">
                    <img class="country__photo" :src="imgV" alt="">
                    <img class="country__photo" :src="imgG" alt="">
                    <img class="country__photo" :src="imgV" alt="">
                </div>
            </div>
        </div>

        <div class="country__side-box">
            <img class="country__flag" :src="Flag1" alt="">
            <div class="country__rating"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.country {
    color: $white;
    position: relative;
    padding-top: 10px;
}

.country__name {
    @include font-24px;
    margin: 0 0 26px 0;
    padding-right: 300px;
}

.country__section {
    margin-bottom: 20px
}

.country__title {
    @include font-18px;
    margin: 0 0 16px 0;
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
    position: absolute;
    top: -0;
    right: 0;
}

.country__flag {
    height: 100px;
}

.country__rating {}
</style>