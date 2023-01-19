export default defineNuxtRouteMiddleware((to) => {
  if ((to.name as string).startsWith('index__')) {
    return navigateTo('/one')
  }
})
