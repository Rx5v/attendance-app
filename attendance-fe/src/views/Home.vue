<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <div class="py-4 px-8 w-full bg-dark2 rounded-xl text-white flex flex-col gap-8">
            <div class="flex gap-3 items-center">
                <div class="w-2 h-8 rounded bg-accent">&nbsp;</div>
                <div class=""><p class="text-lg font-semibold">Employee Detail</p></div>
            </div>
            <div class="flex">
                <div class="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-2 bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp')] bg-cover bg-center"></div>
            </div>
        </div>
    </MainLayout>
</template>
