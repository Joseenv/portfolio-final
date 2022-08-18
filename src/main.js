import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueWriter from "vue-writer";

import './assets/base.css'

const app = createApp(App)

app.use(router)
app.use(VueWriter)
app.mount('#app')
