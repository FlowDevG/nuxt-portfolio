
<template>
<svg v-if="mode == 'light' || mode == 'system'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"  class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
<svg v-if="mode == 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#03C988"  class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
</template>

<script setup>

defineProps({
  mode: {
    type: String,
    required: false,
    default: 'light',
  }
});

</script>