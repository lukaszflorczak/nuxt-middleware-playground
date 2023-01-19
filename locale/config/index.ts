import type { NuxtI18nOptions } from '@nuxtjs/i18n/dist/module'

export const locales = [
  { code: 'en', flag: 'us', iso: 'en-US', file: 'en.json', name: 'English' },
  { code: 'pl', flag: 'pl', iso: 'pl-PL', file: 'pl.json', name: 'Polski' },
]

export default {
  baseUrl: '',
  locales,
  seo: false,
  defaultLocale: 'en',
  strategy: 'prefix_except_default',
  lazy: true,
  langDir: 'locale/combined/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'locale',
    fallbackLocale: 'en',
    alwaysRedirect: true,
    redirectOn: 'root',
  },
  vueI18n: 'locale/config/vue-i18n',
} as NuxtI18nOptions
