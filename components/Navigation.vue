<template>
<div class="dark:bg-custom-white bg-custom-black top-0 z-[500] fixed left-0 right-0 border-custom-black">
 <div class="backdrop-blur-md items-center flex-wrap py-5 px-10">
  <div class="flex justify-between items-center flex-wrap container mx-auto">
  <div class="flex items-center justify-start gap-3 flex-1">
    <NuxtLink :to="localePath('/')" class="flex gap-3 items-center">
      <div class="bg-[#4b4b4bcf] rounded-lg p-1">
        <IconsCode 
          :mode="$colorMode.value"
        />
      </div>
      <h1 class="text-secondary-color dark:text-black text-lg md:text-2xl font-bold">{{ $t(`navigation.logoName`) }}</h1>
   </NuxtLink>
  </div>
  <div class="hidden md:block">
    <div
     v-if="userStatus.login" 
     class="flex gap-5"
    >
      <NuxtLink
       v-if="!isOpen"
       v-for="item in determineMenu"
       :key="item.id"
       :to="localePath(item.path)"
       class="text-white dark:text-black hover:dark:text-white text-[1.1rem] dark:hover:text-white font-light cursor-pointer"
       >
        <button aria-label="button" type="button" class="rounded-[0.25rem] hover:bg-[#4b4b4b] dark:hover:bg-custom-black p-[0.4rem]">{{ item.name }}</button>
     </NuxtLink>
    </div>
  </div>
  <div class="flex items-center justify-end gap-3 flex-1">
    <div class="dark:bg-custom-black dark:rounded-lg dark:p-2 md:hidden">
      <IconsMobileMenuBars
        v-if="!isOpen"
        :open="isOpen"
        class="md:hidden"
        @click="openModal()"
      />
    </div>
    <div
     class="cursor-pointer bg-transparent border shadow-md border-secondary-color dark:border-black rounded-full p-[0.35rem]"
     @click="toggleTheme()">
      <IconsDarkMode :mode="$colorMode.value" />
    </div>
    <div class="relative" ref="dropdown">
      <div
        class="bg-transparent text-white dark:text-black cursor-pointer flex items-center gap-1"
        @click="toggleLanguage()"
      >
        {{ locale.toUpperCase() }}
        <IconsChevronDown :toggled="languageToggled" />
      </div>
      <div v-if="languageToggled" class="absolute top-[3rem] left-[-5rem] md:left-0 bg-white dark:bg-[#4b4b4bcf] w-[130px] p-3 rounded-lg">
        <div class="flex flex-col gap-3">
          <div class="flex items-center hover:bg-[#4b4b4bcf] cursor-pointer p-2 rounded-lg gap-1 hover:text-white" @click="changeLanguage('en')">
            <img src="~/assets/images/english.png" alt="uk-flag-image" class="object-fit w-[20px]" />
            <p class="hover:text-secondary-color dark:text-white">English</p>
          </div>
          <div class="flex items-center hover:bg-[#4b4b4bcf] cursor-pointer p-2 rounded-lg gap-1 hover:text-white" @click="changeLanguage('el')">
            <img src="~/assets/images/greece.png" alt="greek-flag-image" class="object-fit w-[20px]" />
            <p class="hover:text-secondary-color dark:text-white">Greek</p>
          </div>
        </div>
      </div>
    </div>
    <button
     class="hidden md:flex rounded items-center font-bold text-sm px-3 py-2 bg-white dark:text-white hover:dark:bg-black dark:bg-secondary-color hover:bg-secondary-color hover:text-white"
     @click="determineButtonStatus()"
     >
      {{ userStatus.login ? $t("navigation.toggleLogin.logout") : $t("navigation.toggleLogin.login") }}
    </button>
  </div>
 </div>
</div>
</div>

<Transition>
  <Login
    v-if="loginModal"
    @close-login-modal="loginModal = !loginModal"
  />
</Transition>

 <!-- // Navigation Mobile -->

<Transition>
<div v-if="isOpen" class="fixed top-0 left-0 z-[999] p-4 h-screen w-full overflow-hidden transition-transform bg-custom-black dark:bg-custom-white" tabindex="-1" aria-labelledby="drawer-backdrop-label">
    <div class="flex justify-between items-center container mx-auto px-5 py-1 mb-10">
      <div class="flex items-center gap-3">
        <IconsCode :mode="$colorMode.value" />
        <h5 class="text-xl font-semibold text-secondary-color dark:text-black">George K.</h5>
      </div>
      <div class="dark:bg-custom-black dark:p-2 dark:rounded-lg">
        <IconsMobileMenuBars
          :open="isOpen"
          :mode="$colorMode.value"
          @click="openModal()"
        />
      </div>
    </div>
    <div class="flex items-center flex-col py-10 overflow-y-auto">
      <ul class="list-none flex flex-col items-center mx-auto gap-10">
        <NuxtLink
         v-for="item in determineMenu"
         :key="item.id"
         :to="localePath(item.path)"
         class="hover:scale-125 dark:hover:scale-105 text-white dark:text-custom-black hover:text-secondary-color dark:hover:text-secondary-color hover:dark:bg-[#4b4b4bcf] dark:rounded-lg dark:p-1 text-3xl font-light "
         @click="isOpen = !isOpen"
         >
          {{ item.name }}
        </NuxtLink>
      </ul>
      <button
       class="mt-10 flex rounded items-center font-bold text-sm px-10 py-2 bg-white dark:text-white hover:dark:bg-secondary-color dark:bg-custom-black hover:bg-secondary-color hover:text-white"
       @click="determineButtonStatus()"
      >
      {{ userStatus.login ? $t("navigation.toggleLogin.logout") : $t("navigation.toggleLogin.login") }}
      </button>
    </div>
    <h1 class="text-center text-white dark:text-black text-xl mt-10 font-thin dark:font-light">{{ $t("navigation.findMeOnSocial") }}</h1>
    <div class="flex items-center gap-5 justify-center mt-10">
      <NuxtLink to="https://github.com/FlowDevG" target="_blank" class="hover:scale-125">
        <IconsGitHub :mode="$colorMode.preference" class="hover:scale-125" />
      </NuxtLink>
      <NuxtLink to="https://www.facebook.com/giwkourtis/" target="_blank" class="hover:scale-125">
        <IconsFacebook :mode="$colorMode.preference" class="hover:scale-125" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/george-kourtis/" target="_blank" class="hover:scale-125">
        <IconsLinkedIn :mode="$colorMode.preference" class="hover:scale-125" />
      </NuxtLink>
    </div>
    <p class="text-center text-white dark:text-black font-thin dark:font-light mt-10">George Kourtis. All Rights Reserved</p>
</div>
</Transition>

</template>

<script setup lang="ts">
import { MenuItemTypes } from '@/types/menu-item-types';
import { ref } from 'vue';
import { isLoggedIn } from '~/stores/global';

import Login from "~/components/auth/Login.vue";


const userStatus = isLoggedIn();

const { locale } = useI18n();

const determineMenu = computed(() => {
  if (locale.value == 'en') {
    return menuItemsEN.value;
  } else {
    return menuItemsEL.value;
  }
})

// type Theme = 'light' | 'dark';
const colorMode = useColorMode();

const toggleTheme = () => {
  if (colorMode.preference == 'light') {
    colorMode.preference = 'dark';
  } else {
    colorMode.preference = 'light';
  }
}

// const setColorTheme = (newTheme: Theme) => {
//  useColorMode().preference = newTheme
// }


let isOpen = ref(false)

let openModal = () => {
  isOpen.value = !isOpen.value;
}

let loginModal = ref(false);

let showLogin = () => {
  loginModal.value = !loginModal.value;
}

let logOut = () => {
  userStatus.loggedOut();
  localStorage.removeItem("loggedIn");
}

const determineButtonStatus = () => {
  if (isOpen.value && !userStatus.login) {
    isOpen.value = !isOpen.value;
  }
  if (!userStatus.login) {
    return showLogin();
  } else {
    return logOut();
  }
}

const menuItemsEN = ref<MenuItemTypes[]>([
  {
    id: 1,
    name:  'Home',
    path:  '/'
  },
  {
    id: 2,
    name: 'About',
    path: '/about'
  },
  {
    id: 3,
    name: 'Portfolio',
    path: '/portfolio'
  },
  {
    id: 4,
    name: 'Contact',
    path: '/contact'
  }
])
const menuItemsEL = ref<MenuItemTypes[]>([
  {
    id: 1,
    name:  'Αρχική',
    path:  '/'
  },
  {
    id: 2,
    name: 'Σχετικά',
    path: '/about'
  },
  {
    id: 3,
    name: 'Portfolio',
    path: '/portfolio'
  },
  {
    id: 4,
    name: 'Επικοινωνία',
    path: '/contact'
  }
]);


// Custom Language Change
const languageToggled = ref(false);


const toggleLanguage = () => {
  languageToggled.value = !languageToggled.value;
};

const changeLanguage = (item: string) => {
  locale.value = item;
  console.log('locale', locale.value);
  languageToggled.value = !languageToggled.value;
};

</script>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>