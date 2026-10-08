<script setup>
import IconButton from './buttons/IconButton.vue';
import { usePopupsStore } from '@/stores/popups.js';

const popupsStore = usePopupsStore();


</script>

<template>
    <div class="actions">
        <IconButton action="edit" @click="popupsStore.openPopupEditCountry"/>
        <IconButton action="delete" @click="popupsStore.openPopupRemoveCountry"/>
    </div>
</template>

<style scoped>
.actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    padding: 0 0 30px 0;
}
</style>
