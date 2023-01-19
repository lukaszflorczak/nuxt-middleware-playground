export default defineNuxtRouteMiddleware((to) => {
  if ((to.name as string).startsWith('one__')) {
    // return navigateTo('/two')
  }
})
