
<template>
  <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="1.5rem" height="1.5rem">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  </svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 20 20">
    <path :fill="color ? 'red' : 'white'" d="m3.219 2.154l6.778 6.773l6.706-6.705c.457-.407.93-.164 1.119.04a.777.777 0 0 1-.044 1.035l-6.707 6.704l6.707 6.702c.298.25.298.74.059 1.014c-.24.273-.68.431-1.095.107l-6.745-6.749l-6.753 6.752c-.296.265-.784.211-1.025-.052c-.242-.264-.334-.72-.025-1.042l6.729-6.732l-6.701-6.704c-.245-.27-.33-.764 0-1.075c.33-.311.822-.268.997-.068Z"></path>
  </svg>
  
</template>

<script setup>

defineProps({
  open: {
    type: [Boolean],
    required: false,
    default: false
  },
  mode: {
    type: String,
    required: false,
    default: 'light'
  },
  color: {
    type: Boolean,
    required: false,
    default: false,
  }
});

</script>