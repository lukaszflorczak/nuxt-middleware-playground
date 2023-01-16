export default defineNuxtRouteMiddleware((to) => {
  console.log(to.path)

  if (to.path === '/one') {
    return navigateTo('/two')
  }
}) 