<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia'
import { useCountriesStore } from '@/stores/countriesList.js';

const countriesStore = useCountriesStore();
const { cards } = storeToRefs(countriesStore);

const selectRef = ref(null);
const isOpen = ref(false);
const selectedText = ref('Отсортировать');

const items = [
    {
        id: 1,
        text: 'По алфавиту',
    },
    {
        id: 2,
        text: 'По количеству посещений',
    },
    {
        id: 3,
        text: 'По рейтингу',
    },
]

function openDropdown() {
    if (isOpen.value === false) {
        isOpen.value = true;
    } else {
        isOpen.value = false;
    }
}

function closeDropdown() {
    isOpen.value = false;
}

function selectItem(item) {
    selectedText.value = item.text;

    if (item.id === 1) {
        cards.value.sort((a, b) => a.name.localeCompare(b.name));
    } else if (item.id === 2) {

        cards.value.sort((a, b) => b.visits.length - a.visits.length);

    } else if (item.id === 3) {
        cards.value.sort((a, b) => b.rating - a.rating);

    }
}

function onDocumentClick(evt) {
    const target = evt.target;

    if (selectRef.value && !selectRef.value.contains(target)) {
        closeDropdown();
    }
}

onMounted(() => {
    document.addEventListener('click', onDocumentClick);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onDocumentClick);
});

</script>

<template>
    <div class="select-box">
        <div class="select" tabindex="0" role="combobox" aria-controls="goal-list" aria-haspopup="true"
            aria-expanded="false" @click="openDropdown" ref="selectRef">
            <!-- <p class="select__label"></p> -->
            <p class="select__text">{{ selectedText }}</p>
            <div class="select__icon"></div>
        </div>

        <!-- <span class="select-box__error">Выберите требу из списка</span> -->

        <div class="dropdown-overlay">
            <div class="dropdown" :class="{ opened: isOpen }">
                <ul class="dropdown-list" role="listbox" id="goal-list">
                    <li class="dropdown-list__item" role="option" tabindex="0" v-for="item in items"
                        @click="closeDropdown(); selectItem(item);">
                        {{ item.text }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.select-box {
    position: relative;
    width: 260px;
}

.select {
    display: flex;
    align-items: center;
    position: relative;

    height: 44px;
    padding: 8px 40px 8px 8px;
    border: 2px solid white;
    width: 100%;
    border-radius: 4px;
    box-sizing: border-box;


    &.inactive {
        .select__text {
            display: block;
        }
    }

    &.active {
        border: 1px solid white;
    }

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
        }
    }
}

.select__text {
    overflow: hidden;
    margin: 0;

    max-width: 100%;
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.select__icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);

    width: 24px;
    height: 24px;

    &::after {
        content: "";

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-25%);

        border: 5px solid transparent;
        border-top: 5px solid white;
    }
}

.dropdown-overlay {
    position: relative;

    // &.active {
    //     .dropdown {
    //         display: block;
    //     }
    // }
}

.dropdown {
    position: absolute;
    z-index: 10;

    display: none;

    width: 100%;
    border-radius: 2px;
    background-color: $dark-base;

    &.opened {
        display: block;
    }
}

.dropdown-list {
    scroll-behavior: smooth;
    scrollbar-width: none;

    overflow-y: scroll;

    max-height: 60vh;
    margin: 0;
    padding: 0;

    -webkit-overflow-scrolling: touch;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
}

.dropdown-list__item {
    @include font-14px;
    position: relative;

    margin: 0;
    padding: 11px 16px;


    color: white;
    list-style: none;

    &.active {
        font-weight: 700;
    }

    &:active {
        color: white;
    }

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            color: $gray;
        }
    }
}
</style>
