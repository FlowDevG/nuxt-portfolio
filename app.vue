<template>
  <NuxtLayout>
    <NuxtPage :keepalive="{max: 10}" />
  </NuxtLayout>
</template>

<script setup>
import  { isLoggedIn } from '~/stores/global.js';

const { t } = useI18n();


useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ` + t("pageMeta.title") : t("pageMeta.title");
  },
  meta: [
    {
      name: 'description',
      content: "I'm a front end developer, making awesome user interfaces for my clients."
    }
  ]
});


const store = isLoggedIn();

onMounted(() => {
  if(localStorage.getItem("loggedIn")) {
    store.loggedIn();
  };
});

</script>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>