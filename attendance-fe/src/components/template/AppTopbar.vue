<script setup>
import SidebarToggle from '../ui/SidebarToggle.vue';
const emit = defineEmits(['openSidebar']);
const openSidebar = () => {
    emit('openSidebar');
};
</script>
<template>
    <div class="w-full bg-dark1 px-4 py-2">
        <SidebarToggle @open="openSidebar" />
    </div>
</template>
