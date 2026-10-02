<script setup>
const props = defineProps({
    text: String
});


</script>

<template>
    <button class="text-btn" type="button">{{ text }}</button>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;

.text-btn {
    @include font-14px;
    width: 100%;
    height: 44px;
    background: $dark-base;
    border-radius: 4px;
    margin-top: 45px;
    border: none;

    font-weight: normal;
    text-align: center;
    color: $white;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
}

@media screen and (min-width: $mobile-large) {
    .text-btn {
        @include font-18px;
        width: 180px;
        height: 46px;
    }
}
</style>
