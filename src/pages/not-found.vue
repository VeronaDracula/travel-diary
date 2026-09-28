<script setup>

</script>

<template>
    <div class="page not-found">
        <h1>404</h1>
        <p>Страница не найдена</p>
        <RouterLink to="/">На главную</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.not-found {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: $white;
}
</style>