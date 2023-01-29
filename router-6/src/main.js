import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')


//before each
router.beforeEach((to, from) => {
    console.log("to : ",to);
    console.log("from : ",from);
    if(!to.meta.isAuthenticated && to.name !== 'login'){
        router.push({name:'login'})
    }
})