import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import axios from "axios";

const app = createApp(App)
const pinia = createPinia()

axios.defaults.baseURL='http://localhost:8080'
// axios.defaults.baseURL='http://121.199.20.42:8080'

app.use(router)
app.use(pinia)

app.mount('#app')
