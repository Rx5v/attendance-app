<template>
    <div class="absolute w-screen h-screen bg-slate-800 bg-opacity-50 top-0 left-0">
        <div class="bg-dark2 h-full p-3">
            <WebCam ref="webcamRef" @photoTaken="photoTakenEvent" @init="webcamInit" :fullscreenState="true" />
            <div class="p-4">
                <div class="">
                    <label for="">Select Device</label>
                    <select @change="setCamera" v-model="deviceId" class="bg-dark2 w-fit p-4">
                        <option value="">-</option>
                        <option v-for="camera in cameras" :key="camera.deviceId" :value="camera.deviceId">
                            {{ camera.label }}
                        </option>
                    </select>
                </div>
                <button @click="takePhoto" class="px-4 py-2 bg-dark3 rounded-lg">Take a photo</button>
            </div>
        </div>
        <!-- the ref attribute is very important -->
    </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { WebCam } from 'vue-camera-lib';

const cameras = ref([]);
const deviceId = ref('');
const emit = defineEmits();

const takePhoto = async () => {
    try {
        await webcamRef.value.takePhoto();
    } catch (err) {
        console.log(err);
    }
};

const webcamRef = ref(null);

const loadCameras = () => {
    webcamRef.value.loadCameras();
    cameras.value = webcamRef.value.cameras;
};

const webcamInit = (deviceId) => {
    deviceId.value = deviceId;
    emit('init', deviceId);
};

const setCamera = () => {
    webcamRef.value.changeCamera(deviceId.value === '' ? null : deviceId.value);
};

const photoTakenEvent = ({ blob, image_data_url }) => {
    webcamRef.value.stop();
    emit('photoTaken', { blob, image_data_url });
};

onMounted(() => {
    cameras.value = webcamRef.value.cameras;
    if (cameras.value.length === 0) {
        let reloadCamInterval = setInterval(() => {
            loadCameras();
            if (cameras.value.length > 0) {
                clearInterval(reloadCamInterval);
            }
        }, 1000);
    }
});
</script>
