<template>
<section class="text-gray-600 bg-custom-black dark:bg-custom-white">
  <div class="container px-10 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-color dark:text-secondary-color lg:w-1/3 lg:mb-0 mb-4">My Portfolio Showcase</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <NuxtLink class="md:p-2 p-1 w-1/2 hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://ydraulikoskaterini.gr" target="_blank">
          <img alt="gallery" class="w-full object-fit h-full object-center block" src="~/assets/images/portfolioImages/ydraylikoskaterini.png">
        </NuxtLink>
        <NuxtLink class="md:p-2 p-1 w-1/2 hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://endisis.gr" target="_blank">
          <img alt="gallery" class="w-full object-fit h-full object-center block" src="~/assets/images/portfolioImages/endisis.png">
        </NuxtLink>
        <NuxtLink class="md:p-2 p-1 w-full hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://vg-orthopedics.gr" target="_blank">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="~/assets/images/portfolioImages/vg-orthopedics.png">
        </NuxtLink>
      </div>
      <div class="flex flex-wrap w-1/2">
        <NuxtLink class="md:p-2 p-1 w-full hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://goldenolympus.com" target="_blank">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="~/assets/images/portfolioImages/goldenolympus.png">
        </NuxtLink>
        <NuxtLink class="md:p-2 p-1 w-1/2 hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://olympusnektar.com" target="_blank">
          <img alt="gallery" class="w-full object-fit h-full object-center block" src="~/assets/images/portfolioImages/olympusnektar.png">
        </NuxtLink>
        <NuxtLink class="md:p-2 p-1 w-1/2 hover:cursor-pointer hover:scale-105 transition ease-in-out delay-100" to="https://papados.gr" target="_blank">
          <img alt="gallery" class="w-full object-fit h-full object-center block" src="~/assets/images/portfolioImages/papados.png">
        </NuxtLink>
      </div>
    </div>
  </div>
</section>

<section class="bg-custom-black dark:bg-custom-white">
  <Newsletter />
</section>

</template>

<script setup>

const { t } = useI18n();

useHead({
  title: t("pageMeta.portfolio")
});

</script>

<style lang="scss" scoped>

</style>