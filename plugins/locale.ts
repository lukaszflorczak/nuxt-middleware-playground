import { addRouteMiddleware, defineNuxtPlugin } from '#app'

import i18nConfig from '~/locale/config'

const isLocalizedRoute = (path: string) => /^\/[a-zA-Z]{2}\/|\/[a-zA-Z]{2}$/.test(path)

export default defineNuxtPlugin(async (_nuxtApp) => {
  // Redirect to localized path
  // addRouteMiddleware(async ({ path }) => {
  //   const locale = useCookie('locale')
  //
  //   if (!isLocalizedRoute(path) && path !== '/' && locale.value && locale.value !== i18nConfig.defaultLocale) {
  //     return navigateTo(`/${locale.value}${path}`.replace(/\/$/, ''))
  //   }
  // })
})
