import  { isLoggedIn } from '~/stores/global';

export default defineNuxtRouteMiddleware((to, from) => {

  // let authenticated = isLoggedIn();

  // if (authenticated.isAuthenticated) {
  //   navigateTo(to.fullPath);
  // } else {
  //   navigateTo("/login", {
  //     external: true
  //   });
  // }
});

