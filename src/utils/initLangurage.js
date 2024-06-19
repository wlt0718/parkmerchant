import i18n from '../langurage'
import storage  from './storage.js'
import { setVantLangurage } from './vantLangurage'

let locale = ''
if (storage.storageGet('locale')) {
  locale = storage.storageGet('locale')
} else {
  locale = navigator.language
  storage.storageSet('locale', locale)
}

i18n.global.locale.value = locale
setVantLangurage(locale)

