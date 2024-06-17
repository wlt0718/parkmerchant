import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import router from './router'
import pinia from './stores'
import VueQrcode from 'vue-qrcode'
import { GlobalComponents } from './components'
import { Locale } from 'vant';
// 引入英文语言包
import idID from 'vant/es/locale/lang/id-ID';

Locale.use('id-ID', idID);
const app = createApp(App)
app.component('vue-qrcode', VueQrcode)
app.use(router)
app.use(pinia)
app.use(GlobalComponents)
app.mount('#app')
