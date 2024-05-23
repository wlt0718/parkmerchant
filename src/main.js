import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import router from './router'
import pinia from './stores'
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
