<script setup>
import Logo from '../assets/images/logo.png'
</script>

<template>
    <header class="header">
        <RouterLink class="header__box" to="/">
            <img class="header__logo" :src="Logo" alt="логотип" />
            <h1 class="header__title">Дневник путешествий</h1>
        </RouterLink>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
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
    width: 70px;
    height: auto;
}

.header__title {
    @include font-24px;
    margin: 0;
    color: $white;
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
}
</style>
