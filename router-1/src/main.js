import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
/* 
  Bootstrap CSS, JS
*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
