<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
import { CursorArrowRippleIcon, ArrowDownOnSquareIcon, ArrowUpOnSquareIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline';
import DateTimeCounter from '../components/ui/DateTimeCounter.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MyModal from '../components/modals/AbsenceModal.vue';
import { ref } from 'vue';
import MyCam from '../components/MyCam.vue';

const openModal = ref(false);
const toggleModal = () => {
    openModal.value = !openModal.value;
};
</script>

<template>
    <MainLayout>
        <div class="flex flex-col gap-8">
            <div class="py-4 px-8 w-full bg-dark2 rounded-xl text-white flex flex-col gap-8">
                <div class="flex gap-3 items-center">
                    <div class="w-2 h-8 rounded bg-accent">&nbsp;</div>
                    <div class=""><p class="text-lg font-semibold">Employee Detail</p></div>
                </div>
                <div class="flex flex-col md:flex-row gap-8 items-center md:items-left">
                    <div class="ring-primary ring-offset-base-100 lg:w-24 lg:h-24 md:w-24 w-20 h-20 rounded-full ring ring-offset-2 bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp')] bg-cover bg-center"></div>
                    <div class="flex flex-col gap-4 w-full text-center md:text-left">
                        <p class="text-2xl">John Doe</p>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 w-full text-center md:text-left">
                            <div class="flex flex-col w-full">
                                <p class="text-slate-400 text-sm">Role</p>
                                <p class="font-medium text-base">Web Dev</p>
                            </div>
                            <div class="flex flex-col w-full">
                                <p class="text-slate-400 text-sm">Phone Number</p>
                                <p class="font-medium">+6282345678</p>
                            </div>
                            <div class="flex flex-col w-full">
                                <p class="text-slate-400 text-sm">Email</p>
                                <p class="font-medium">johndoe@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
                        <div class="flex gap-6 px-6 py-6 w-full bg-dark3 rounded-lg items-center">
                            <div class="p-3 bg-dark4 rounded-full">
                                <CursorArrowRippleIcon class="h-10 w-10" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-xl font-semibold">365</p>
                                <p class="text-slate-400">Total Attendance</p>
                            </div>
                        </div>
                        <div class="flex gap-6 px-6 py-6 w-full bg-dark3 rounded-lg items-center">
                            <div class="p-3 bg-dark4 rounded-full">
                                <ArrowDownOnSquareIcon class="h-10 w-10" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-xl font-semibold">365</p>
                                <p class="text-slate-400">Avg Checkin Time</p>
                            </div>
                        </div>
                        <div class="flex gap-6 px-6 py-6 w-full bg-dark3 rounded-lg items-center">
                            <div class="p-3 bg-dark4 rounded-full">
                                <ArrowUpOnSquareIcon class="h-10 w-10" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-xl font-semibold">365</p>
                                <p class="text-slate-400">Avg Checkout Time</p>
                            </div>
                        </div>
                        <div class="flex gap-6 px-6 py-6 w-full bg-dark3 rounded-lg items-center">
                            <div class="p-3 bg-dark4 rounded-full">
                                <ExclamationCircleIcon class="h-10 w-10" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-xl font-semibold">365</p>
                                <p class="text-slate-400">Total Late Checkins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4 px-8 w-full bg-dark2 rounded-xl text-white flex flex-col gap-8">
                <div class="flex gap-3 items-center">
                    <div class="w-2 h-8 rounded bg-accent">&nbsp;</div>
                    <div class=""><p class="text-lg font-semibold">Today's Attendance</p></div>
                </div>
                <div class="flex flex-col gap-8 w-full">
                    <div class="ml-auto">
                        <DateTimeCounter />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="flex flex-col gap-6 px-6 py-6 w-full bg-dark3 rounded-lg">
                            <div class="flex gap-2 items-center">
                                <ExclamationCircleIcon class="h-6 w-6" />
                                <p>Attendance Status</p>
                            </div>
                            <div class="text-center flex flex-col gap-4">
                                <FontAwesomeIcon icon="clock" class="text-slate-400 text-6xl opacity-25" />
                                <p class="text-white text-2xl font-light text-slate-200">Awaiting check-in</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-6 px-6 py-6 w-full bg-dark3 rounded-lg">
                            <div class="flex gap-2 items-center">
                                <ExclamationCircleIcon class="h-6 w-6" />
                                <p>Attendance Detail</p>
                            </div>
                            <div class="flex flex-col gap-4">
                                <p>Clock in : -</p>
                                <p>Clock out : -</p>
                                <p>Location : -</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-6 px-6 py-6 w-full bg-dark3 rounded-lg cursor-pointer">
                            <button class="m-auto" @click="toggleModal">
                                <div class="m-auto flex flex-col items-center gap-4">
                                    <div class="p-3 bg-dark4 rounded-full w-fit">
                                        <ArrowDownOnSquareIcon class="h-10 w-10" />
                                    </div>
                                    click here to checkin!
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
