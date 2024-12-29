<script setup>
import { ref } from 'vue';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/outline';
import Sidebar from '../template/AppSidebar.vue';
import AppTopBar from '../template/AppTopBar.vue';
const openSidebar = ref(true);
const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value;
};
</script>
<template>
    <div class="flex min-h-screen w-screen">
        <Sidebar :isOpen="openSidebar" />
        <div class="p-4 bg-dark1 w-full">
            <AppTopBar @openSidebar="toggleSidebar" />
            <div class="mt-4">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
