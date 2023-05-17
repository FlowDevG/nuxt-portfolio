<template>
<div class="drop-shadow-[0px_-10px_250px_rgba(119,197,227,0.50)] py-14">
  <section class="flex flex-col max-w-6xl mx-10 p-7 md:p-0 xl:mx-auto bg-custom-black rounded-xl shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
    <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-[#4b4b4bcf] md:dark:bg-gray-800 rounded-l-xl">
        <div class="px-6 py-6 md:px-8 md:py-0">
            <h2 class="text-lg text-center md:text-start font-bold text-gray-400 dark:text-white md:text-gray-100">{{ $t('newslletter.title') }} <span class="text-secondary-color md:text-secondary-color">Project</span> {{ $t('newslletter.updates') }}</h2>

            <p class="mt-2 text-center md:text-start text-sm text-gray-500 dark:text-gray-400 md:text-gray-400">{{ $t('newslletter.dsc') }}</p>
        </div>
    </div>

    <div class="flex items-center justify-center md:py-0 md:w-1/2">
        <form>
            <div class="flex flex-col p-1.5 overflow-hidden rounded-xl dark:border-gray-600 lg:flex-row dark:focus-within:border-secondary-color focus-within:ring focus-within:ring-opacity-40 focus-within:border-secondary-color focus-within:ring-secondary-color">
                <input v-model="formData.email" type="email" id="email" class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-white dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" name="email" :placeholder="$t('newslletter.inputPlaceholder')" aria-label="Enter your email">
                <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 md:rounded-md rounded-none hover:bg-gray-600 focus:bg-gray-600 focus:outline-none" @click.prevent="subscribe()">{{ $t('newslletter.button') }}</button>
            </div>
            <span v-for="(err, index) in v$.email.$errors" :key="index" class="text-red-200 pl-2 mt-1 block">{{ err.$message }}</span>
            <span v-if="subscribed" class="text-secondary-color pl-2 mt-1 block">Thank you for the subscription! <br/> Check your e-mail address.</span>
        </form>
    </div>
</section>
</div>
</template>

<script setup>
import { required, email } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const formData = reactive({
    email: '',
});

let subscribed = ref(false);

const validations = {
    email: { required, email }
};

const v$ = useVuelidate(validations, formData);

const subscribe = async () => {
    const result = await v$.value.$validate();

    if(!result) {
        alert("Form is invalid");
    } else {
        alert("Form is valid");
        setTimeout(() => {
            subscribed.value = !subscribed.value; 
        }, 3000);
        subscribed.value = !subscribed.value;
    }
};


</script>

<style lang="scss" scoped>

</style>