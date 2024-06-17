import i18n from '../langurage'
import storage  from './storage.js'
import { setVantLangurage } from './vantLangurage'

let locale = ''
if (storage.storageGet('locale')) {
    locale = storage.storageGet('locale')
} else {
    locale = 'en-US'
    storage.storageSet('locale', 'en-US')
}

i18n.global.locale.value = locale
setVantLangurage(locale)

