<script setup>

const props = defineProps({
  hasMargin: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <h2 class="text-4xl font-bold text-gray-100" :class="{ 'py-8': hasMargin }">
    <slot></slot>
  </h2>
</template>
