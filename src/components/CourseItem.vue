<script setup>
const props = defineProps({
  title: String,
  technologies: Array,
  author: String,
  image: {
    src: String,
    alt: String,
  },
  links: {
    author: String,
    course: String,
  },
})
</script>

<template>
  <div class="bg-background rounded-lg shadow-lg hover:scale-105 transition-all">
    <a :href="links.course" target="blank">
      <img :src="image.src" :alt="image.alt" class="rounded-t-lg h-[140px] w-full object-cover" />
    </a>
    <div class="p-4">
      <a :href="links.course" target="blank" class="text-nowrap flex items-center -mb-2" :class="{ 'text-[16px]': title.length > 30 }">{{ title }}</a>
      <a :href="links.author" target="blank" class="text-sm text-gray-400">{{ author }}</a>
      <div class="flex gap-2 mt-1 text-nowrap">
        <span
          v-for="(technology, index) of technologies"
          :key="index"
          class="w-1/3 border flex justify-center items-center rounded-lg text-sm"
          :class="{ 'text-xs': technology.length > 10 }"
          >{{ technology }}</span
        >
      </div>
    </div>
  </div>
</template>
