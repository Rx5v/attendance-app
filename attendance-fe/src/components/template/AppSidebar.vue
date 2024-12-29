<script setup>
import { ref } from 'vue';
import Sidebar from '../ui/Sidebar.vue';
import SidebarHeader from '../ui/SidebarHeader.vue';
import SidebarMenu from '../ui/SidebarMenu.vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: true
    }
});

const menu = ref([
    {
        title: 'Home',
        children: [
            { title: 'Dashboard', to: '/', icon: 'HomeIcon' },
            { title: 'Profiles', to: '/profiles', icon: 'UserIcon' }
        ]
    }
]);
</script>
<template>
    <Sidebar :open="props.isOpen">
        <SidebarHeader />
        <SidebarMenu :menu="menu" />
    </Sidebar>
</template>
