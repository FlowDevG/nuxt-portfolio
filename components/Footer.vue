<template>
<div :class="`${$colorMode.value != 'dark' ? '' : 'light-mode-pattern'}`">
 <div class="flex justify-center items-center bg-custom-black dark:bg-custom-white py-10">
  <NuxtLink :to="localePath('/privacy-policy')" class="text-white dark:text-black dark:hover:text-secondary-color font-thin dark:font-light hover:text-secondary-color hover:font-light">Privacy Policy</NuxtLink>
 </div>
 <div class="flex justify-center bg-custom-black dark:bg-custom-white">
  <div class="border-t-[1px] w-[60%] border-secondary-color dark:border-custom-black"></div>
 </div>
 <h1 class="text-center text-custom-white dark:text-black dark:bg-custom-white bg-custom-black dark:font-light py-10 text-2xl font-thin">{{ currentDate.toLocaleString("en-US", dateOptions) }}</h1>
</div>

<div class="bg-custom-black dark:bg-secondary-color pt-3 dark:pt-0">
  <div class="flex flex-col mx-auto container md:flex-row gap-3 md:gap-0 items-center justify-between py-5 dark:text-black text-white flex-wrap">
    <div class="flex items-center justify-start gap-3 flex-1 md:mb-0">
      <div class="dark:bg-[#4b4b4b] dark:p-1 dark:rounded-lg">
        <IconsCode
          :mode="$colorMode.preference"
        />
      </div>
      <NuxtLink :to="localePath('/')" class="text-xl font-bold">George K.</NuxtLink>
    </div>
    <div class="copyrights order-2 md:order-none">
      <h3 class="font-thin dark:font-light">Copyright &copy; {{ currentYear }} | All Rights Reserved | <a href="mailto:gkourtis55@gmail.com" class="hover:dark:text-white hover:text-secondary-color hover:font-light">FlowGeeZ</a></h3>
    </div>
    <div class="flex items-center justify-end gap-4 flex-1 md:b-0">
      <NuxtLink to="https://github.com/FlowDevG" target="_blank" class="hover:scale-125">
        <IconsGitHub :mode="$colorMode.preference" />
      </NuxtLink>
      <NuxtLink to="https://www.facebook.com/giwkourtis/" target="_blank" class="hover:scale-125">
        <IconsFacebook :mode="$colorMode.preference" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/george-kourtis/" target="_blank" class="hover:scale-125">
        <IconsLinkedIn :mode="$colorMode.preference" />
      </NuxtLink>
    </div>
  </div>
 </div>

</template>

<script setup>

const currentDate = ref('');

const dateOptions = ref({
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

currentDate.value = new Date();

const currentYear = ref("");

const date = new Date();


currentYear.value = date.getFullYear();

</script>

<style scoped>
.light-mode-pattern {
  position: relative;
}
.light-mode-pattern::before {
  position: absolute;
  /* z-index: 100 !important; */
  content: '';
  background: url('~/assets/images/light-pattern.svg');
  opacity: 0.05;
  top: 0;
  left: 0;
  width: 100%;
  background-size: fixed;
  height: 100%;
}
</style>