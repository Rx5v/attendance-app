<script setup>
import { onMounted } from 'vue';
import MyCam from '../MyCam.vue';

const props = defineProps({
    open: {
        type: Boolean,
        default: true
    }
});
const emit = defineEmits(['onClose']);
const closeModal = () => {
    emit('onClose');
};

const onPhotoTaken = (data) => {
    console.log(data);
};
</script>
<template>
    <div id="modal" class="fixed transition-all ease-in-out min-w-screen inset-0 bg-black bg-opacity-50 items-center justify-center" :class="[props.open ? 'flex' : 'hidden']">
        <div class="bg-dark2 p-6 rounded shadow-lg text-wihte">
            <div class="p-4 w-full"></div>
            <div class="flex justify-end space-x-2">
                <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                <button class="px-4 py-2 bg-blue-500 text-white rounded">Confirm</button>
            </div>
        </div>
    </div>
</template>
