<script setup>
import { FingerPrintIcon, HomeIcon   } from "@heroicons/vue/24/outline";
import { ref } from "vue";

    const props = defineProps({
        isOpen: {
            type: Boolean,
            default: false
        }
    })

    const menu = ref([
        {
            title: 'Home',
            children: [
                {title: 'Dashboard'}
            ]
        }
    ])
    const open = ref(false)
    const toggle = () => {
        open.value = !open.value
    }
</script>
<template>
    <aside :class="[isOpen ? 'md:w-96 md:px-6 w-96 pl-4 pr-1' : 'w-0 px-0']" class="z-50 flex flex-col  py-8 transition-all duration-300 ease-in-out transform bg-dark1 h-screen text-white overflow-x-hidden">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
                <div class="p-1 bg-accent rounded-full">
                    <FingerPrintIcon class="h-6 w-6 text-dark2" />
                </div>
                <p class="text-xl font-medium">Click!</p>
            </div>
        </div>

        <div class="flex flex-col mt-8 gap-2" v-for="(item, key) in menu">
            <p :key="key" class="text-slate-500">{{ item.title }}</p>
            <div class="flex flex-col gap-y-2" v-for="sub in item.children">
                <div class="flex gap-4 items-center p-4 bg-dark2 rounded-lg text-accent font-medium">
                    <HomeIcon class="w-6 h-6 text-accent" />
                    {{ sub.title }}
                </div>
            </div>
        </div>

    </aside>
</template>