<script setup>
import SidebarToggle from '../ui/SidebarToggle.vue';
const emit = defineEmits(['openSidebar']);
const openSidebar = () => {
    emit('openSidebar');
};
</script>
<template>
    <SidebarToggle @open="openSidebar" />
</template>
