import { createI18n } from 'vue-i18n'
import ar from './locales/ar.json'
import en from './locales/en.json'

export default createI18n({
  legacy: false, // Use Composition API
  locale: 'ar', // Default language
  fallbackLocale: 'en',
  messages: {
    ar,
    en
  }
})