<script setup>
import { onMounted, watch, ref } from 'vue';
import MainLayout from '../components/layouts/MainLayout.vue';
import MyCam from '../components/MyCam.vue';
import DateTimeCounter from '../components/ui/DateTimeCounter.vue';
import { useGeolocation } from '@vueuse/core';

const { coords, locatedAt, error, resume, pause } = useGeolocation();
const latitude = ref('');
const longitude = ref('');
const takePhoto = ref(false);
const photo = ref();
const onPhotoTaken = (data) => {
    console.log(data);
    photo.value = data.image_data_url;
    takePhoto.value = false;
};

const toggleTakePhoto = () => {
    takePhoto.value = !takePhoto.value;
};

watch(coords, (val) => {
    latitude.value = val.latitude;
    longitude.value = val.longitude;
});
</script>
<template>
    <MainLayout>
        <div class="flex flex-col gap-4">
            <div class="p-4" v-if="takePhoto">
                <MyCam @photoTaken="onPhotoTaken" />
            </div>
            <div class="p-4 bg-dark2 rounded-lg">
                <DateTimeCounter />
                <p>Your Current Absence State: <span class="font-semibold">Check In</span></p>
            </div>
            <div class="p-4 bg-dark2 rounded-lg flex flex-col gap-2">
                <p class="font-semibold">Detail :</p>
                <table class="font-light w-1/3">
                    <thead>
                        <tr>
                            <td>Latitude</td>
                            <td>:</td>
                            <td>{{ latitude }}</td>
                        </tr>
                        <tr>
                            <td>Longitude</td>
                            <td>:</td>
                            <td>{{ longitude }}</td>
                        </tr>
                    </thead>
                </table>
                <div class="p-4" v-if="photo">
                    <img :src="photo" alt="" />
                </div>
                <button class="px-4 py-2 bg-slate-500 rounded-lg" @click="toggleTakePhoto">Take photo</button>
                <button class="px-4 py-2 bg-slate-500 rounded-lg">Upload photo</button>
                <button class="px-4 py-2 bg-slate-500 rounded-lg" v-if="photo">Submit</button>
            </div>
        </div>
    </MainLayout>
</template>
