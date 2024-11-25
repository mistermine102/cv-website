<script setup>
const props = defineProps({
  title: String,
  technologies: Array,
  author: String,
  hours: Number,
  image: {
    src: String,
    alt: String,
  },
  links: {
    author: String,
    course: String,
  },
});
</script>

<template>
  <div
    class="bg-background rounded-lg shadow-lg hover:scale-105 transition-all flex flex-row 2xl:flex-col"
  >
    <a :href="links.course" target="blank">
      <img
        :src="image.src"
        :alt="image.alt"
        class="rounded-l-lg 2xl:rounded-bl-none 2xl:rounded-t-lg min-h-full h-[120px] w-[200px] 2xl:h-[140px] 2xl:w-full object-cover"
      />
    </a>
    <div class="p-4 w-full">
      <a
        :href="links.course"
        target="blank"
        class="text-nowrap flex items-center"
        :class="{ 'text-[16px]': title.length > 30 }"
        >{{ title }}</a
      >
      <div class="flex flex-col -mt-1">
        <a :href="links.author" target="blank" class="text-sm text-gray-400">{{
          author
        }}</a>
        <p class="text-base text-primary font-bold">
          {{ hours }} h <span class="font-medium text-sm">materiału</span>
        </p>
      </div>

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
