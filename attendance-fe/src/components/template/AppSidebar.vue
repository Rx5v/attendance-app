<script setup>
import { onMounted, ref, watch } from 'vue';
import Sidebar from '../ui/Sidebar.vue';
import SidebarHeader from '../ui/SidebarHeader.vue';
import SidebarMenu from '../ui/SidebarMenu.vue';
import AppTopBar from './AppTopBar.vue';
// import SidebarToggle from '../ui/SidebarToggle.vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: true
    }
});

const open = ref(true);
watch(props.isOpen, (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);

    open.value = newVal;
});
const onOpen = () => {
    console.log('asd');

    open.value = !open.value;
};
const menu = ref([
    {
        title: 'Home',
        children: [{ title: 'Dashboard', to: '/', icon: 'fas table-columns' }]
    },
    {
        title: 'Attendance',
        children: [{ title: 'Absence', to: '/absence', icon: 'fas fa-arrow-up-right-from-square' }]
    },
    {
        title: 'User',
        children: [{ title: 'Profile', to: '/profile', icon: 'far fa-user' }]
    }
]);
</script>
<template>
    <div class="flex gap-2">
        <Sidebar :open="open">
            <SidebarHeader @onOpen="onOpen" />
            <SidebarMenu :menu="menu" />
        </Sidebar>
    </div>
    <div class="w-full bg-dark1 overflow-y-scroll">
        <AppTopBar @openSidebar="onOpen" class="md:hidden block" />
        <div class="w-full overflow-y-hidden">
            <slot />
        </div>
    </div>
</template>
