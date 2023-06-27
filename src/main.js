import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";
import store from './store'
import './assets/css/tailwind.css';
import 'swiper/swiper-bundle.css';
// import Swiper from './swiper/bundle'


 createApp(App).use(store).use(router).mount('#app');

