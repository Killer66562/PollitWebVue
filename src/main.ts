import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import { router } from './scripts/router'
import { createPinia } from 'pinia'

export const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
