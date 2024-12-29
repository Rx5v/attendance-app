<script setup>
import { FingerPrintIcon } from '@heroicons/vue/24/outline';
</script>
<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
            <div class="p-1 bg-accent rounded-full">
                <FingerPrintIcon class="h-6 w-6 text-dark2" />
            </div>
            <p class="text-xl font-medium">Click!</p>
        </div>
    </div>
</template>
