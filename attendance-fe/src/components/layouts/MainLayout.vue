<script setup>
import { ref } from 'vue';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/outline';
import Sidebar from '../template/AppSidebar.vue';
import AppTopBar from '../template/AppTopBar.vue';
const openSidebar = ref(true);
const toggleSidebar = () => {
    console.log('asd');

    openSidebar.value = !openSidebar.value;
};
</script>
<template>
    <div class="flex h-screen w-screen overflow-y-hidden">
        <Sidebar :isOpen="openSidebar">
            <div class="p-4 bg-dark1 w-full transition-all ease-in-out overflow-y-hidden">
                <div class="mt-4 overflow-y-hidden h-full transition-all ease-in-out text-white">
                    <slot />
                </div>
            </div>
        </Sidebar>
    </div>
</template>
