import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Absence from '@/views/Absence.vue';
import Profile from '@/views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/absence',
    name: 'Absence',
    component: Absence
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
];
export default routes
