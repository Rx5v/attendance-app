<script setup>
// import { HomeIcon } from '@heroicons/vue/24/outline';
import { shallowRef } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps({
    menu: {
        type: Array,
        default: []
    }
});
const loadIcon = (iconName) => {
    try {
        return shallowRef(defineAsyncComponent(() => import(`@heroicons/vue/24/outline/${iconName}.vue`)));
    } catch (e) {
        console.error(`Icon ${iconName} not found`);
        return null;
    }
};
</script>

<template>
    <div class="flex flex-col mt-8 gap-2" v-for="(item, key) in props.menu">
        <p :key="key" class="text-slate-500">{{ item.title }}</p>
        <div class="flex flex-col gap-y-2" v-for="sub in item.children">
            <RouterLink :to="sub.to" class="flex gap-4 items-center p-4 rounded-lg hover:bg-dark2 transition-all ease-in-out" active-class="bg-dark2 text-accent font-medium">
                <component :is="loadIcon(sub.icon)" class="w-6 h-6 text-gray-500" />
                {{ sub.title }}
            </RouterLink>
        </div>
    </div>
</template>
