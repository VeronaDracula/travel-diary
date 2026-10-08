import { defineStore } from 'pinia';
import { ref } from 'vue'

export const usePopupsStore = defineStore('popups', () => {
    const isPopupAddCountryOpen = ref(false);
    const isPopupRemoveCountryOpen = ref(false);
    const isPopupEditCountryOpen = ref(false);

    function openPopupAddCountry() {
        isPopupAddCountryOpen.value = true;
    }

    function closePopupAddCountry() {
        isPopupAddCountryOpen.value = false;
    }

    function openPopupRemoveCountry() {
        isPopupRemoveCountryOpen.value = true;
    }

    function closePopupRemoveCountry() {
        isPopupRemoveCountryOpen.value = false;
    }

    function openPopupEditCountry() {
        isPopupEditCountryOpen.value = true;
    }

    function closePopupEditCountry() {
        isPopupEditCountryOpen.value = false;
    }

  return {
        isPopupAddCountryOpen,
        isPopupRemoveCountryOpen,
        isPopupEditCountryOpen,
        openPopupAddCountry,
        closePopupAddCountry,
        openPopupRemoveCountry,
        closePopupRemoveCountry,
        openPopupEditCountry,
        closePopupEditCountry
    }
})