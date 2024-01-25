import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import common from './en/common.json'

import { IS_DEV } from '#constants'

type Resource = {
  common: Record<string, string>
}

type i18nResources = {
  en: Resource
}

const resources: i18nResources = {
  en: {
    common,
  },
}

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    fallbackLng: 'en',
    debug: IS_DEV,
    interpolation: {
      escapeValue: false,
    },
  })
