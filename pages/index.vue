<template>
  <BaseSectionWrapper class="bg-custom-black dark:bg-custom-white px-10 flex gap-10 relative-pos">
    
    <div class="flex-1 hidden lg:block">
    </div>
    
    <div class="flex-auto">
      <div class="pt-10 flex flex-col items-center text-center">
        <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-color lg:text-[4.5rem] xl:text-[6.5rem] md:text-[3.5rem] dark:bg-gradient-to-r dark:from-secondary-color dark:to-custom-black text-5xl font-extrabold tracking-[0.05em]">Hello, I'm</h1>
        <br/>
        <div class="w-max">
          <h1 class="bg-clip-text text-transparent bg-gradient-to-r pb-5 from-white to-secondary-color lg:text-[4.5rem] xl:text-[6.5rem] md:text-[3.5rem] md:pt-5 dark:bg-gradient-to-r dark:from-secondary-color dark:to-custom-black text-4xl font-extrabold tracking-[0.05em] animate-typing overflow-hidden whitespace-nowrap border-r-[1px] dark:border-r-black border-r-white pr-5">{{ $t('home.bannerName') }}</h1>
        </div>
      <p class="mt-10 text-gray-400 dark:text-custom-black dark:font-light text-xl leading-8 md:text-xl xl:text-2xl">{{ $t('home.bannerText') }}</p>
    </div>
    <div class="flex items-center justify-center mt-10 rounded drop-shadow-[0px_-10px_200px_rgba(119,197,227,0.50)] xl:w-[750px] md:w-[600px] w-auto h-[350px] md:h-[450px] container mx-auto">

       <div class="bg-custom-black h-[300px] sm:w-[550px] md:w-[700px] xl:w-[900px] w-[400px] rounded-md">
        <div class="flex justify-between bg-[#4b4b4bcf] w-full h-10 rounded-tl-md rounded-tr-md">
          <div class="bg-[#4b4b4b] shadow-lg text-gray-300 p-3 rounded-tl-md text-sm border-nome border-t-[1px] border-t-secondary-color">index.html</div>
          <div class="flex gap-3 items-center">
            <div class="bg-[#fac536] rounded-full p-2 shadow-lg"></div>
            <div class="bg-[#39ea49] rounded-full p-2 shadow-lg"></div>
            <div class="bg-[#f25056] rounded-full mr-[1rem] p-2 shadow-lg"></div>
          </div>
        </div>
        <div class="flex flex-wrap flex-col mx-auto container p-10">
          <div class="text-gray-500">
            <p>The HTML <code>button</code> tag defines a clickable button.</p>
            <p>The CSS <code>background-color</code> property defines the background color of an element.</p>
          </div>
        </div>
       </div>
    </div>
    </div>

    <div class="flex-1 hidden lg:block text-white">
    </div>
  </BaseSectionWrapper>

  <div class="dark:bg-custom-white bg-custom-black">
    <div class="flex-1 hidden lg:block"></div>
    <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-[5.3rem] h-[5.3rem] rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-400 drop-shadow-[0px_5px_35px_rgba(119,197,227,0.50)]">
            <img src="~/assets/images/biopic-removebg-preview.png" alt="bio-picture" class="rounded-full w-[4rem] ml-2">
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white dark:text-custom-black text-lg">George Kourtis</h2>
            <div class="w-12 h-1 bg-secondary-color rounded mt-2 mb-4"></div>
            <p class="text-base text-gray-400 dark:text-custom-black">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-secondary-color sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4 text-gray-400 dark:text-custom-black">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <NuxtLink :to="`bio/biography_${locale}.pdf`" target="_blank" class="text-secondary-color hover:text-white inline-flex items-center cursor-pointer">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
    <div class="flex-1 hidden lg:block"></div>
  </div>

  <div class="py-20 relative-pos bg-custom-black dark:bg-custom-white">
  <div class="container lg:w-[77%] mx-auto md:px-10 xl:px-40">
    <div class="mb-16 text-center">
      <!-- <h2 class="mb-4 text-2xl font-bold text-secondary-color md:text-4xl">
        Services i use to work with..
      </h2> -->
      <div class="flex justify-center">
        <h1 class="bg-clip-text text-transparent bg-gradient-to-r mb-5 from-white to-secondary-color md:text-4xl text-2xl md:pt-5 dark:bg-gradient-to-r dark:from-secondary-color dark:to-custom-black font-extrabold tracking-[0.05em] animate-typing overflow-hidden whitespace-nowrap border-r-[1px] dark:border-r-black border-r-white pr-5">Services i use to work with..</h1>
      </div>
      <p class="text-gray-400 dark:text-custom-black pb-10">
        Tailus prides itself not only on award-winning technology, but also on the talent of its
        people of some of the brightest minds and most experienced executives in business.
      </p>
    </div>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 sm:px-0 pb-10">
      <div
        v-for="(skill, index) in skills" 
        :key="index"
        class="group relative rounded-xl space-y-6 overflow-hidden border-none hover:drop-shadow-[0px_-10px_60px_rgba(119,197,227,0.50)]"
      >
        <img
          class="mx-auto h-[24rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          :src="`homeImages/${skill.icon}.png`"
          :alt="skill.icon"
          loading="lazy"
          width="500"
          height="600"
        />
        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-[3rem] bg-[#4b4b4bcf] translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 class="text-xl font-semibold text-white">{{ skill.title }}</h4>
            <span class="block text-sm text-secondary-color">{{ skill.level }}</span>
          </div>
          <p class="mt-8 text-gray-300 dark:text-gray-400">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

  <div class="dark:bg-custom-white bg-custom-black relative-pos">
    <div class="flex-1 hidden lg:block"></div>
    <div class="flex-auto">
      <Newsletter />
    </div>
    <div class="flex-1 hidden lg:block"></div>
  </div>

</template>

<script setup>

const { t, locale } = useI18n();

useHead({
  title: t("pageMeta.home")
});

const skills = ref([
  {
    title: "Javacript",
    level: "Intermediate",
    description: "I have knowledge of advanced javascript",
    icon: 'js',
  },
  {
    title: "CSS & Frameworks",
    level: "Advanced",
    description: "Excellent knowledge of vanilla css",
    icon: "css",
  },
  {
    title: "Figma - Photoshop",
    level: "Intermediate",
    description: "Making mockups with Figma",
    icon: "figma",
  },
  {
    title: "Typescript",
    level: "Intermediate",
    description: "Excellent knowledge of typescript",
    icon: "ts"
  },
  {
    title: "React",
    level: "Begginer",
    description: "Creating mockups using React",
    icon: "react"
  },
  {
    title: "Vue",
    level: "Advanced",
    description: "Complete UI Interfaces",
    icon: "vue"
  }
]);

</script>

<style scoped>

.relative-pos {
  position: relative;
}

.relative-pos::before {
  position: absolute;
  /* z-index: 100 !important; */
  content: '';
  background: url('~/assets/images/pattern.svg');
  opacity: 0.01;
  top: 0;
  left: 0;
  width: 100%;
  background-size: fixed;
  height: 100%;
}

.v-enter-active,

.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>