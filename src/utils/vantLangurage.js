import { Locale } from 'vant';
// 引入 vant 语言包
import idID from 'vant/es/locale/lang/id-ID'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
const vantLangurage = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'id-ID': idID
}

function setVantLangurage(locale){
  Locale.use(locale, vantLangurage[locale])
}
export {
  setVantLangurage
}