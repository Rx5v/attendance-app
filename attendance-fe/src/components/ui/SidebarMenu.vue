<script setup>
// import { HomeIcon } from '@heroicons/vue/24/outline';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { shallowRef } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps({
    menu: {
        type: Array,
        default: []
    }
});
const getIcon = (val) => {
    const arr = val.split(' ');
    return arr;
};
</script>

<template>
    <div class="flex flex-col mt-8 gap-2" v-for="(item, key) in props.menu">
        <p :key="key" class="text-slate-500">{{ item.title }}</p>
        <div class="flex flex-col gap-y-2" v-for="sub in item.children">
            <RouterLink :to="sub.to" class="flex gap-4 items-center p-4 rounded-lg hover:bg-dark2 transition-all ease-in-out" active-class="bg-dark2 text-accent font-medium">
                <FontAwesomeIcon :icon="getIcon(sub.icon)" />
                {{ sub.title }}
            </RouterLink>
        </div>
    </div>
</template>
