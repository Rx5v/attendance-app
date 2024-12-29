<script setup>
import { ref, onMounted, computed } from 'vue';

const dateTime = ref(new Date());

const formattedDateTime = computed(() => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return dateTime.value.toLocaleString('id-ID', options);
});

onMounted(() => {
    setInterval(() => {
        dateTime.value = new Date();
    }, 1000);
});
</script>
<template>
    <p class="font-semibold">
        {{ formattedDateTime }}
    </p>
</template>
