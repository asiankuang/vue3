import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import { LanguageType } from './constants'
import messages from './index'
const language = (navigator.language || LanguageType.zh).toLowerCase()
const i18n = createI18n({
  fallbackLocale: LanguageType.zh,
  globalInjection: true,
  legacy: false, // you must specify 'legacy: false' option
  locale: language.split('-')[0] || LanguageType.zh,
  messages,
})

export default i18n
