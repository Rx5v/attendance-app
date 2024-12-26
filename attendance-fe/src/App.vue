<script setup>
import { ref } from 'vue';
import Sidebar from './components/template/Sidebar.vue'
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/vue/24/outline";
const openSidebar = ref(false);
const toggleSidebar = () => {
  console.log('asd');
  
  openSidebar.value = !openSidebar.value;
}

</script>

<template>
  <div class="flex min-h-screen w-screen">
    <Sidebar :isOpen="openSidebar" />
    <div class="p-4 bg-dark1 w-full">
      <button @click="toggleSidebar" class="mt-4"> 
          <ArrowLeftEndOnRectangleIcon class="h-6 w-6 text-white"/>
      </button>
      <p>asdasd</p>
    </div>
  </div>
</template>