<script setup>
import Logo from '../assets/images/logo.png'
</script>

<template>
    <header class="header">
        <RouterLink class="header__box" to="/">
            <img class="header__logo" :src="Logo" alt="логотип" />
            <h1 class="header__title">Дневник путешествий</h1>
        </RouterLink>
        <button class="header__add-btn" type="button"></button>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(84, 84, 84, 0.7);
    min-height: 56px;
    box-sizing: border-box;
}

.header__box {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
}

.header__logo {
    width: 50px;
    height: auto;
}

.header__title {
    @include font-20px;
    margin: 0;
    color: $white;
}

.header__add-btn {
    min-width: 44px;
    width: 44px;
    height: 44px;

    border: 2px solid $white;
    position: relative;
    background: transparent;
    padding: 0;

    &:before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        background: transparent center no-repeat url("../assets/images/icons/plus.svg");
        background-size: 20px;
        transform: rotate(45deg);
        width: 20px;
        height: 20px;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
}

@media (min-width: 360px) {
    .header {
        padding: 20px;
    }

    .header__logo {
        width: 70px;
    }

    .header__title {
        @include font-24px;
    }
}

@media (min-width: $mobile-large) {
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        padding: 20px;
        border-bottom: 1px solid rgba(84, 84, 84, 0.7);
        min-height: 56px;
        box-sizing: border-box;
    }

    .header__box {
        gap: 40px;
    }

    .header__title {
        @include font-28px;
    }

    .header__add-btn {
        min-width: 150px;
        width: 150px;
        height: 50px;

        background: transparent center url("../assets/images/icons/add-btn-desktop.svg");
        background-size: auto;
        border: none;

        &:before {
            display: none;
        }

        &:hover {
            cursor: pointer;
            opacity: 0.6;
        }
    }
}
</style>
