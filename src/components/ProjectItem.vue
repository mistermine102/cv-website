<script setup>
const props = defineProps({
  title: String,
  image: Object,
  features: Array,
  reversed: Boolean,
  technologies: Array,
})
</script>

<template>
  <div class="grid grid-cols-2 justify-center">
    <div class="flex justify-start">
      <img width="500px" :src="image.src" :alt="image.alt" class="aspect-square object-contain" :class="{ 'order-1': reversed }" />
    </div>
    <div :class="{ '-order-1': reversed }">
      <h3 class="text-primary font-bold text-3xl">{{ title }}</h3>
      <div class="flex gap-x-8 items-center">
        <img v-for="technology of technologies" :key="technology.name" :src="technology.icon" />
      </div>
      <div class="mt-4 text-xl">
        <!-- description -->
        <slot></slot>
      </div>
      <ul class="list-disc ml-4 mt-2">
        <li v-for="(feature, index) of features" :key="index">{{ feature }}</li>
      </ul>
    </div>
  </div>
</template>
