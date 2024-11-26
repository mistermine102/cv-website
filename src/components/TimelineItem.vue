<script setup>
const props = defineProps({
  title: String,
  timeframe: String,
  description: String,
  isLast: Boolean,
})
</script>
<template>
  <div class="flex">
    <div class="flex flex-col items-center relative w-fit">
      <div class="w-[4px] min-h-[100px] h-full bg-darkGray" :class="{ 'rounded-b-full': isLast }"></div>
      <div class="w-[16px] h-[16px] bg-white rounded-full absolute"></div>
    </div>
    <div class="ml-4">
      <p class="flex gap-x-2 items-end">
        <span class="font-semibold text-2xl">{{ title }}</span>
        <span class="text-xl text-gray-300">{{ timeframe }}</span>
      </p>
      <p class="mt-4 pb-16">
        <slot></slot>
      </p>
    </div>
  </div>
</template>
