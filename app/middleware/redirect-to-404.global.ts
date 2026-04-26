export default defineNuxtRouteMiddleware((to) => {
  if (to.path.includes('images')) {
    return;
  }
  if (!to.matched.length && to.path !== '/404') {
    return navigateTo('/404');
  }
});
