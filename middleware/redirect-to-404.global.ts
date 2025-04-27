export default defineNuxtRouteMiddleware((to, from) => {
  const route = useRoute();
  const matched = route.matched.length > 0;

  if (!matched && to.path !== '/404') {
    return navigateTo('/404');
  }
});
