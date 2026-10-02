<script setup>
import { usePopupsStore } from '@/stores/popups.js';
import IconButton from './buttons/IconButton.vue';
import Select from './Select.vue';

const popupsStore = usePopupsStore();

</script>

<template>
    <div class="actions">
        <Select />
        <IconButton action="add" @:click="popupsStore.openPopupAddCountry"/>
    </div>
</template>

<style scoped>
.actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;
    padding: 0 0 30px 0;
}
</style>
