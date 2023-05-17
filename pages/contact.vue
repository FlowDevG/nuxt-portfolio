<template>
  <section class="relative">
    <div class="bg-custom-black dark:bg-custom-white w-full">
    <div class="inset-0 h-[750px] mt-4">
      <ClientOnly>
        <MapMyMap
        :position="position"
        :zoom="zoom"
        :options="{ zoomControl: false }"
        >
          <template #markers>
            <LMarker
             visible
             draggable
             :icon="icon"
             :lat-lng="position"
             @dragstart="dragging = true"
             @dragend="dragging = false"
            >
              <!-- <l-icon
                :icon-size="dynamicSize"
                :icon-anchor="dynamicAnchor"
                :icon-url="" >
              </l-icon> -->
            </LMarker>
          </template>

          <template #custom-controls-top-left>
            <LControl
             position="topleft"
            >
            <div class="bg-[#4b4b4bcf] dark:bg-white relative md:top-[1rem] lg:top-[5rem] hidden md:block md:rounded-xl">
                <div class="flex flex-col gap-5 text-md lg:text-lg">
                  <div class="flex justify-start items-center bg-secondary-color md:rounded-b-none md:rounded-xl">
                    <img :src="`https://openweathermap.org/img/wn/${currentWeather.weather[0]?.icon}@2x.png`" alt="Weather Status Icon" class="w-[60px] h-[60px]">
                    <h1 class="text-white font-bold py-5">{{ $t(`weather.weatherTitle`) }}</h1>
                  </div>
                  <div class="flex flex-col justify-center align-center gap-3 px-6 pb-5 text-white dark:text-black">
                    <div class="flex items-center gap-1">
                      <IconsLocation />
                      <p class="font-bold">{{ $t(`weather.location`) }}: <span class="font-light">{{ currentWeather.name }}, {{ currentWeather.sys.country }}</span></p>
                    </div>
                    <div class="flex items-center gap-1">
                      <IconsTemperature />
                      <p class="font-bold">{{ $t(`weather.temp`) }}: <span class="font-light">{{ currentWeather.main.temp.toFixed() }}°C</span></p>
                    </div>
                    <div class="flex items-center gap-1">
                      <IconsTemperature />
                      <p class="font-bold">{{ $t(`weather.feelsLike`) }}: <span class="font-light">{{ currentWeather.main.feels_like.toFixed() }}°C</span></p>
                    </div>
                    <div class="flex items-center gap-1">
                      <IconsHumidity />
                      <p class="font-bold">{{ $t(`weather.humidity`) }}: <span class="font-light">{{ currentWeather.main.humidity.toFixed() }}%</span></p>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                      <div class="flex items-center gap-1">
                        <IconsWindSpeed />
                        <p class="font-bold">{{ $t(`weather.speed`) }}: <span class="font-light">{{ currentWeather.wind.speed }}km/h</span></p>
                      </div>
                      <div class="flex items-center gap-1">
                        <IconsWindRotation />
                        <p class="font-bold">{{ $t(`weather.deg`) }}: <span class="font-light">{{ currentWeather.wind.deg }}°</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LControl>
          </template>

          <template #custom-controls-bottom-left>
            <LControl
             position="bottomleft"
            >
              <div class="bg-[#4b4b4bcf] dark:bg-white rounded-xl w-[100px]">
                <div class="flex items-center justify-center gap-3 p-3">
                  <IconsMinus
                    class="hover:bg-[#eee] hover:rounded-full"
                    @click="ZoomMinus()"
                  />
                  <IconsPlus
                    class="hover:bg-[#eee] hover:rounded-full"
                    @click="ZoomPlus()"
                  />
                </div>
              </div>
            </LControl>
          </template>

        </MapMyMap>
    
      </ClientOnly>
    </div>
  </div>
  
  <div class="lg:absolute z-[434] top-[5rem] right-[1.5rem] bg-[#4b4b4bcf] dark:bg-white p-9 md:rounded-xl">
    <div>
        <div class="flex items-center gap-2">
          <IconsFillForm :mode="$colorMode.value" />
          <h3 class="text-xl text-white dark:text-black">{{ $t('contact.form.title') }}</h3>
        </div>
        <div>
          <form action="submit" class="space-y-8" @submit.prevent="submitForm">
            <div class="mt-10">
              <label for="email" class="block mb-2 text-md font-medium text-white dark:text-black">Your email:</label>
              <input v-model="formData.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="example@example.com" required>
              <!-- Displaying errors: -->
              <span v-for="(err, index) in v$.email.$errors" :key="index" class="text-red-200"> {{ err.$message }}</span>
              </div>
            <div>
              <label for="subject" class="block mb-2 text-md font-medium text-white dark:text-black">Subject:</label>
              <input v-model="formData.subject" type="text" id="subject" class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
              <!-- Displaying errors: -->
              <span v-for="(err, index) in v$.subject.$errors" :key="index" class="text-red-200">{{ err.$message }}</span>
            </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-md font-medium text-white dark:text-black">Your message:</label>
              <textarea v-model="formData.message" id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-secondary-color dark:focus:border-red-500" placeholder="Leave a comment..."></textarea>
              <!-- Displaying errors: -->
              <span v-for="(err, index) in v$.message.$errors" :key="index" class="text-red-200"> {{ err.$message }}</span>
            </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white hover:text-white rounded-lg bg-secondary-color sm:w-fit hover:bg-black focus:ring-4 focus:outline-none focus:ring-secondary-color dark:bg-secondary-color dark:hover:bg-black dark:focus:ring-secondary-color">Send message</button>
          </form>
          <!-- <div class="mt-4">
            <p class="text-red-500">Errors:</p>
            <span
              v-for="error in v$.$errors"
              :key="error.$uid"
              class="text-red-200 flex flex-column"
            >
              {{ error.$property.toUpperCase() }} - {{ error.$message }}
            </span>
          </div> -->
        </div>
      </div>
  </div>
  </section>

  <div :class="`justify-center bg-custom-black dark:bg-custom-white ${$colorMode.value == 'light' ? '' : 'light-mode-pattern'}`">
    <Newsletter />
  </div>

</template>

<script setup>
import { LMarker, LControl, LIcon } from '@vue-leaflet/vue-leaflet';
import { required, email, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const config = useRuntimeConfig();

// import L from "leaflet";

const { t } = useI18n();

useHead({
  title: t("pageMeta.contact")
})

let position = ref({});
let zoom = ref(6);

const getUserPosition = () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      position.value = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }
    })
    // zoom.value = 15;
  }
};

// const iconUrl = computed(() => {
//   return require('@/assets/images/location.png');
// });


const dynamicSize = computed(() => {
  return [64, 64 * 1.15]
});

const dynamicAnchor = computed(() => {
  return [64 / 2, 64 * 1.15]
});

onMounted(() => {
  getUserPosition();
});



// Fetch Weather API

import { getWeather } from "~/api/weather";

// const { fetch, pending, error } = await useHttp();
const { data: currentWeather } = await useAsyncData("weather", () => $fetch(`${config.public.WEATHER_API_URL}/weather?lat=40.63666412&lon=22.942162898&appid=${config.public.WEATHER_API_KEY}&units=metric`))

// const { data: { 
//   value: { response: data, error: errorRes }
//  }
// } = await useAsyncData("weather", () => fetch(getWeather()));



// Update Zoom
const ZoomMinus = () => {
 zoom.value--;
};

const ZoomPlus = () => {
  zoom.value++;
};


// Define formData
const formData = reactive({
  email: '',
  subject: '',
  message: '',
});

// Vuelidate Validators
const validations = {
  email: { required, email },
  subject: { required },
  message: { required, minLength: minLength(6) },
}

const v$ = useVuelidate(validations, formData);

const submitForm = async () => {

  const result = await v$.value.$validate();
  
  if (!result) {
    alert('Form is invalid');
  } else {
    alert('Form is valid');
  }
  // handle form submission
};


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