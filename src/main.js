import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import router from './router'
import pinia from './stores'
import VueQrcode from 'vue-qrcode'
import { GlobalComponents } from './components'
import i18n from './langurage'

// 初始化语言
import './utils/initLangurage'

const app = createApp(App)
app.component('vue-qrcode', VueQrcode)
app.use(router)
app.use(pinia)
app.use(GlobalComponents)
app.use(i18n)
app.mount('#app')
