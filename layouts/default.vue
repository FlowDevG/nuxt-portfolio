<template>
  <div class="flex flex-col h-screen justify-between">
    <Navigation/>
    <main class="mb-auto pt-10 mt-5">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '~/components/Navigation.vue';
import Footer from '~/components/Footer.vue';

// definePageMeta({
//   middleware: ['isLoggedIn']
// })

// const colorMode = useColorMode();

// const changeTheme = () => {
//   if (colorMode.preference == 'light') {
//     colorMode.preference = 'dark'
//   } else {
//     colorMode.preference = 'light'
//   }
// }

</script>

<style scoped>
</style>