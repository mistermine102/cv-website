<script setup>
const props = defineProps({
  alt: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    class="font-semibold py-2 px-16 rounded-full shadow-lg border-2 border-primary hover:scale-105 transition-all duration-300"
    :class="[alt ? '' : 'bg-primary']"
  >
    <slot></slot>
  </button>
</template>
