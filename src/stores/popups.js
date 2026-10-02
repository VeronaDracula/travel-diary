import { defineStore } from 'pinia';
import { ref } from 'vue'

export const usePopupsStore = defineStore('popups', () => {
    const isPopupAddCountryOpen = ref(false);

    function openPopupAddCountry() {
        isPopupAddCountryOpen.value = true;
    }

    function closePopupAddCountry() {
        isPopupAddCountryOpen.value = false;
    }

  return {
        isPopupAddCountryOpen,
        openPopupAddCountry,
        closePopupAddCountry
    }
})