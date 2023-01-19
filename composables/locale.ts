import { useI18n } from 'vue-i18n'
import { computed, unref } from 'vue'

import { locales } from '~/locale/config'

export const useLocale = () => {
  const i18n = useI18n()

  const tx = (key: string, params = null): string | null => {
    const translation = params ? i18n.t(key, unref(params)) : i18n.t(key)
    return translation !== key ? translation : null
  }

  const availableLocales = computed(() => (locales || []).map((locale) => ({ ...locale, value: locale.code, label: locale.name })))

  return { tx, ...i18n, availableLocales }
}
