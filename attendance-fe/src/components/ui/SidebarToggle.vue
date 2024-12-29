<script setup>
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/outline';
const emit = defineEmits(['open']);
const toggleSidebar = () => {
    emit('open');
};
</script>
<template>
    <button @click="toggleSidebar" class="w-fit">
        <ArrowLeftEndOnRectangleIcon class="h-6 w-6 text-white" />
    </button>
</template>
