<template>
  <div>
    <div class="h-screen w-full bg-custom-black">
      <div class="container mx-auto flex flex-col text-custom-white justify-center items-center h-screen">
        <div class="flex flex-col bg-[#4b4b4bcf] m-10 md:m-0 p-10 rounded-lg shadow-lg text-center items-center gap-5 drop-shadow-[0px_5px_200px_rgba(119,197,227,0.50)]">
          <h1 v-if="animatedTitle" class="text-[9rem] font-bold">
            <span class="letter-1">4</span>
            <span class="letter-2 text-secondary-color">0</span>
            <span class="letter-3">4</span>
          </h1>
          <h1 v-else class="text-[9rem] font-bold">Oops<span class="text-secondary-color">.</span></h1>
          <p class="text-xl font-bold">The page you requested cannot be found..</p>
          <p class="text-sm font-light">You can go to the HomePage by pressing the button below</p>
          <NuxtLink :to="localePath('/')" class="mt-5 bg-secondary-color rounded-lg p-3 hover:bg-custom-black text-black hover:text-white">Return to Home</NuxtLink>
        </div>
        <div class="absolute bottom-10 flex text-center order-2 md:order-none">
          <h3 class="font-thin dark:font-light">Copyright &copy; {{ currentYear }} | All Rights Reserved | <a href="mailto:gkourtis55@gmail.com" class="hover:dark:text-white hover:text-secondary-color hover:font-light">FlowGeeZ</a></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  useHead({
    title: "Oops.. Not Found"
  });

  const animatedTitle = ref(false);

  setInterval(() => {
      animatedTitle.value = !animatedTitle.value;
  }, 2000);

  // Calculate current year
  const currentYear = ref("");

  const date = new Date();

  currentYear.value = date.getFullYear();

</script>

<style scoped>
.letter-1 {
  animation: pulse 1s ease-in-out infinite;
}
.letter-2 {
  animation: pulse 2s ease-in-out infinite;
}

.letter-3 {
  animation: pulse 3s ease-in-out infinite;
}


/* Keyframes Animations  */

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

</style>