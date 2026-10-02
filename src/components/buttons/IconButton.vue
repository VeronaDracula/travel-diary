<script setup>
const props = defineProps({
    action: String,
});

function btnClass() {
    return `icon-btn--${props.action}`;
}

</script>

<template>
    <button class="icon-btn" :class="btnClass()" type="button"></button>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;

.icon-btn {
    min-width: 44px;
    width: 44px;
    height: 44px;

    border: 2px solid $white;
    border-radius: 4px;
    position: relative;
    background: transparent;
    padding: 0;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }

    &--add {
        &:before {
            content: '';
            position: absolute;
            top: 10px;
            left: 11px;
            background: transparent center no-repeat url("../../assets/images/icons/plus.svg");
            background-size: 20px;
            transform: rotate(45deg);
            width: 20px;
            height: 20px;
        }
    }
}
</style>
