<script setup>

const props = defineProps({
    isOpened: Boolean,
    title: String,
    close: Function
});

</script>

<template>
    <section class="popup" :class="{ opened: isOpened }">
        <div class="popup__container">
            <button class="popup__close page__button" type="button" @click.prevent="close"></button>
            <div class="popup__content">
                <h2 class="popup__title">{{ title }}</h2>
                <slot></slot>
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
    @include font-18px;
    font-style: normal;
    font-weight: 900;
    color: $dark-base;
    margin: 0 0 30px 0;
}



@media screen and (min-width: $mobile-large) {
    .popup__container {
        max-width: 500px;
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

    .popup__title {
        @include font-20px;
    }
}
</style>