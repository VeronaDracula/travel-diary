<script setup>
const props = defineProps(['img', 'title', 'id']);

const path = `/country/${props.id}`;

</script>

<template>
    <li class="card">
        <RouterLink class="card__link" :to="path">
            <div class="card__main">
                <img class="card__flag" :src="img" alt="">
                <h2 class="card__title">{{ title }}</h2>
            </div>
            <ul class="card__info">
                <li class="card__info-item">
                    Количество посещений: 2
                </li>
                <li class="card__info-item">
                    Оценка: 4.5
                </li>
            </ul>
        </RouterLink>
    </li>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.card {
    background: $bg-card;
    border-radius: 10px;
    width: 100%;
    list-style: none;
    box-sizing: border-box;
}

.card__link {
    display: block;
    text-decoration: none;
    color: $dark-base;
    padding: 20px;
    box-sizing: border-box;
}

.card__main {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 14px
}

.card__title {
    @include font-20px;
    margin: 0;
}

.card__flag {
    height: 40px;
    width: auto;
}

.card__info {
    padding: 0;
    margin: 0;
}

.card__info-item {
    @include font-16px;
    list-style: none;
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }
}
</style>