<template>
  <div
   class="w-screen h-screen fixed top-0 left-0 z-[500] flex justify-center items-center bg-custom-black opacity-95"
   @click.self="closeRegister()"
  >
    <div class="bg-custom-white rounded-lg px-8 py-10 relative max-w-lg m-5 m-md-0 drop-shadow-[0px_-10px_100px_rgba(3,201,136,0.40)]">
      <IconsMobileMenuBars 
       :open="true" :color="true" class="hover:cursor-pointer absolute top-0 right-3 m-5" 
       @click="closeRegister()"
      />
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
      <form @submit.prevent="submitForm()">
          <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Name</label>
              <input v-model="name" type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-secondary-color focus:ring-2 focus:ring-secondary-color text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input v-model="email" type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-secondary-color focus:ring-2 focus:ring-secondary-color text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
              <input v-model="password" type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-secondary-color focus:ring-2 focus:ring-secondary-color text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button class="text-white bg-secondary-color border-0 py-2 px-8 focus:outline-none hover:bg-custom-black rounded text-lg">Register</button>
      </form>
      <!-- <p class="text-xs text-gray-500 mt-3">Forgot my password</p> -->
      <NuxtLink
       to="#"
       class="text-black hover:text-secondary-color text-[0.8rem] mt-3 block"
      >
       Forgot my Password
      </NuxtLink>

   </div>
  </div>

</template>

<script setup>
import  { isLoggedIn } from '~/stores/global.ts';

// SupaBase Client
const client = useSupabaseClient();

const store = isLoggedIn();


const emit = defineEmits(['close-login-modal']);

const closeRegister = () => {
  emit('close-register-modal')
}

const name = ref('');
const email = ref('');
const password = ref('');


const submitForm = async () => {

  const { user, error } = await client.auth.signUp({
    name: name.value,
    email: email.value,
    password: password.value,
  })

  console.log('user', user);
  console.log('eror', error);

  store.loggedIn();
  localStorage.setItem("loggedIn", store.login);
  closeRegister()

};

</script>

<style scoped>

</style>