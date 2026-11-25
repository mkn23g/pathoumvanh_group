import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import lo from './locales/lo'
import th from './locales/th'
import zh from './locales/zh'

export type SupportedLang = 'en' | 'lo' | 'th' | 'zh'

export const languages: { code: SupportedLang; label: string; native: string }[] = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'lo', label: 'LA', native: 'ລາວ' },
  { code: 'th', label: 'TH', native: 'ไทย' },
  { code: 'zh', label: 'CN', native: '中文' },
]

const saved = (typeof window !== 'undefined' && localStorage.getItem('pg_lang')) as SupportedLang | null
const initialLang: SupportedLang = saved && ['en', 'lo', 'th', 'zh'].includes(saved) ? saved : 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    lo: { translation: lo },
    th: { translation: th },
    zh: { translation: zh },
  },
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLang
  i18n.on('languageChanged', (lng: string) => {
    document.documentElement.lang = lng
    localStorage.setItem('pg_lang', lng)
  })
}

export default i18n
