import { createI18n } from 'vue-i18n'
import enUS from './en-US.js'
import zhCN from './zh-CN.js'
import idID from './id-ID.js'

const messages = {
    'en-US': enUS,
    'zh-CN': zhCN,
    'id-ID': idID
}


const i18n = createI18n({
    legacy: false,
    locale: 'en-US',
    messages
})
export default i18n