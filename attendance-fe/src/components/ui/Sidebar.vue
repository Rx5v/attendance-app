<script setup>
import { ref } from 'vue';
const props = defineProps({
    open: {
        type: Boolean,
        default: true
    }
});
</script>
<template>
    <aside :class="[props.open ? 'md:w-96 md:px-6 w-96 pl-4 pr-1' : 'w-0 px-0']" class="z-50 flex flex-col py-8 transition-all duration-300 ease-in-out transform bg-dark1 h-screen text-white overflow-x-hidden">
        <slot />
    </aside>
</template>
