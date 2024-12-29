<script setup>
import { ref } from 'vue';
import MainLayout from '../components/layouts/MainLayout.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const isEdit = ref(false);
const handleEdit = () => {
    isEdit.value = !isEdit.value;
};
</script>
<template>
    <MainLayout>
        <div class="p-4 flex flex-col gap-4">
            <div class="flex flex-col items-center gap-4">
                <div class="ring-primary ring-offset-base-100 lg:w-64 lg:h-64 md:w-24 w-20 h-20 rounded-full ring ring-offset-2 bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp')] bg-cover bg-center mx-auto"></div>
                <button class="bg-dark2 px-4 py-2 rounded-lg flex gap-3 items-center">change picture <FontAwesomeIcon icon="pencil" /></button>
            </div>
            <div class="flex flex-col gap-2">
                <label for="">Name :</label>
                <input type="text" value="John Doe" class="p-4 rounded-lg" :class="[isEdit ? 'ring-1 ring-dark2 bg-dark1' : 'bg-dark2']" :disabled="!isEdit" />
            </div>
            <div class="flex flex-col gap-2">
                <label for="">Role :</label>
                <input type="text" value="Web Dev" class="p-4 rounded-lg" :class="[isEdit ? 'ring-1 ring-dark2 bg-dark1' : 'bg-dark2']" :disabled="!isEdit" />
            </div>
            <div class="flex flex-col gap-2">
                <label for="">Phone Number :</label>
                <input type="text" value="08123456678" class="p-4 rounded-lg" :class="[isEdit ? 'ring-1 ring-dark2 bg-dark1' : 'bg-dark2']" :disabled="!isEdit" />
            </div>
            <div class="flex flex-col gap-2">
                <label for="">Email :</label>
                <input type="email" value="jhondoe@mail.com" class="p-4 rounded-lg" :class="[isEdit ? 'ring-1 ring-dark2 bg-dark1' : 'bg-dark2']" :disabled="!isEdit" />
            </div>
            <button class="px-4 py-2 rounded-lg w-fit bg-dark3" v-if="isEdit === false" @click="handleEdit">Edit</button>
            <button class="px-4 py-2 rounded-lg w-fit bg-dark3" v-if="isEdit === true" @click="handleEdit">Save</button>
        </div>
    </MainLayout>
</template>
