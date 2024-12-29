import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import routes from "./routes/index.js"
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStopwatch, faClock, faPencil, faArrowUpRightFromSquare, faBoxesStacked, faTableColumns} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-regular-svg-icons';
import VueCameraLib from 'vue-camera-lib'



library.add(faStopwatch, faClock, faPencil, faTableColumns, faUser, faArrowUpRightFromSquare)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(VueCameraLib)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");