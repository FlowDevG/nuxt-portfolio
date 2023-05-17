<template>
<BaseSectionWrapper :class="`text-gray-600 ${$colorMode.value == 'light' ? '' : 'light-mode-pattern'}`">
  <div class="container px-10 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-color dark:text-secondary-color lg:w-1/3 lg:mb-0 mb-4">My Portfolio Showcase</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <NuxtLink class="md:p-2 p-1 w-1/2 hover:cursor-pointer hover:drop-shadow-[0px_-10px_60px_rgba(3,201,136,0.50)] hover:scale-105 transition ease-in-out delay-100" to="https://ydraulikoskaterini.gr" target="_blank">
          <img alt="gallery" class="w-full object-fit h-full object-center block" src="~/assets/images/portfolioImages/ydraylikoskaterini.png">
        </NuxtLink>
        <NuxtLink class="md:p-2 p-1 w-1/2 hover:drop-shadow-[0px_-10px_60px_rgba(3,201,136,0.50)] hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://endisis.gr" target="_blank">
          <img alt="gallery" class="w-full object-fit h-full object-center block" src="~/assets/images/portfolioImages/endisis.png">
        </NuxtLink>
        <NuxtLink class="md:p-2 p-1 w-full hover:drop-shadow-[0px_-10px_60px_rgba(3,201,136,0.50)] hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://vg-orthopedics.gr" target="_blank">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="~/assets/images/portfolioImages/vg-orthopedics.png">
        </NuxtLink>
      </div>
      <div class="flex flex-wrap w-1/2">
        <NuxtLink class="md:p-2 p-1 w-full hover:drop-shadow-[0px_-10px_60px_rgba(3,201,136,0.50)] hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://goldenolympus.com" target="_blank">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="~/assets/images/portfolioImages/goldenolympus.png">
        </NuxtLink>
        <NuxtLink class="md:p-2 p-1 w-1/2 hover:drop-shadow-[0px_-10px_60px_rgba(3,201,136,0.50)] hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://olympusnektar.com" target="_blank">
          <img alt="gallery" class="w-full object-fit h-full object-center block" src="~/assets/images/portfolioImages/olympusnektar.png">
        </NuxtLink>
        <NuxtLink class="md:p-2 p-1 w-1/2 hover:drop-shadow-[0px_-10px_60px_rgba(3,201,136,0.50)] hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://papados.gr" target="_blank">
          <img alt="gallery" class="w-full object-fit h-full object-center block" src="~/assets/images/portfolioImages/papados.png">
        </NuxtLink>
      </div>
    </div>
  </div>
</BaseSectionWrapper>

<div :class="`justify-center bg-custom-black dark:bg-custom-white ${$colorMode.value == 'light' ? '' : 'light-mode-pattern'}`">
  <Newsletter />
</div>

</template>

<script setup>

const { t } = useI18n();

useHead({
  title: t("pageMeta.portfolio")
});

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