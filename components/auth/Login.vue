<template>
  <div
   class="w-screen h-screen fixed top-0 left-0 z-[500] flex justify-center items-center bg-custom-black opacity-95"
   @click.self="closeLogin()"
  >
    <div class="bg-custom-white rounded-lg px-8 py-10 relative max-w-lg m-5 m-md-0 drop-shadow-[0px_-10px_100px_rgba(3,201,136,0.40)]">
      <IconsMobileMenuBars 
       :open="true" :color="true" class="absolute hover:cursor-pointer top-0 right-3 m-5" 
       @click="closeLogin()"
      />
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
      <form @submit.prevent="submitForm()">
          <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input v-model="email" type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-secondary-color focus:ring-2 focus:ring-secondary-color text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
              <input v-model="password" type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-secondary-color focus:ring-2 focus:ring-secondary-color text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button class="text-white bg-secondary-color border-0 py-2 px-8 focus:outline-none hover:bg-custom-black rounded text-lg">Login</button>
      </form>
      <!-- <p class="text-xs text-gray-500 mt-3">Forgot my password</p> -->
      <div class="flex flex-col">
        <NuxtLink
          to="#"
          class="text-black hover:text-secondary-color text-[0.8rem] my-3"
        >
          Forgot my Password
        </NuxtLink>
        <div class="flex gap-1 items-center">
          <p class="text-sm">You dont have an account?</p>
          <NuxtLink
            class="text-secondary-color font-bold hover:text-custom-black text-[0.9rem] hover:cursor-pointer"
            @click="openRegister()"
          >
            Register
          </NuxtLink>
        </div>
      </div>
   </div>

   <Transition>
    <Register 
     v-if="register"
     @close-register-modal="closeRegister()"
    />
  </Transition>

  </div>
</template>

<script setup>
import  { isLoggedIn } from '~/stores/global.ts';
import Register from "~/components/auth/Register.vue";

// SupaBase Client
const client = useSupabaseClient();


const store = isLoggedIn();


const emit = defineEmits(['close-login-modal']);

const closeLogin = () => {
  emit('close-login-modal')
}

const email = ref('');
const password = ref('');


const submitForm = async () => {
  
  const { user, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (!error) {
    store.loggedIn();
    localStorage.setItem("loggedIn", store.login);
    closeLogin();
    return navigateTo("/");
  } else {
    alert('Invalid Login Credentials! Please try again...');
  }

};

// get Data from the user logged
const { data: { user } } = await client.auth.getUser();

console.log('user logged', user);


const register = ref(false)

const openRegister = () => {
  register.value = !register.value;
};

const closeRegister = () => {
  openRegister();
  closeLogin();
};


</script>

<style scoped>

</style>