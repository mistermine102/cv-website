<script setup>
import { onMounted } from 'vue'
import BaseButton from './base/BaseButton.vue'
import DeviceRender from './DeviceRender.vue'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

const props = defineProps({
  title: String,
  image: Object,
  features: Array,
  reversed: Boolean,
  technologies: Array,
  model: {
    src: String,
  },
})

onMounted(() => {
  // init Swiper:
  new Swiper('.swiper', {
    // Optional parameters
    swipeHandler: () => {},
    direction: 'horizontal',
    loop: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
})
</script>

<template>
  <div class="grid grid-cols-2 justify-center gap-x-32">
    <div>
      <div class="aspect-[4/3] bg-white bg-opacity-5 shadow-lg border-gray-400 rounded-lg" :class="{ 'order-1': reversed }">
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide pointer-events-none">
              <span class="text-gray-400 text-base border-2 border-gray-400 py-0.5 px-2 rounded-full absolute top-2 right-2">3D</span>
              <DeviceRender :model="model" />
            </div>
            <div class="swiper-slide">
              <div class="p-2 w-full h-full">
                <img class="w-full h-full object-contain" src="/images/mockups/taxi-mockup-1.png" alt="" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="p-2 w-full h-full">
                <img class="w-full h-full object-contain" src="/images/mockups/taxi-mockup-2.png" alt="" />
              </div>
            </div>
          </div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
    <div class="" :class="{ '-order-1': reversed }">
      <h3 class="text-primary font-bold text-3xl">{{ title }}</h3>
      <div class="flex gap-x-4 items-center mt-4">
        <div
          v-for="technology of technologies"
          :key="technology.name"
          class="border-2 border-gray-400 rounded-lg w-[80px] aspect-[3/2] flex justify-center items-center"
        >
          <img class="object-contain w-full h-full" :src="technology.icon" />
        </div>
      </div>
      <div class="mt-4 text-xl">
        <!-- description -->
        <slot></slot>
      </div>
      <ul class="list-disc ml-4 mt-2">
        <li v-for="(feature, index) of features" :key="index">{{ feature }}</li>
      </ul>
      <BaseButton alt class="mt-8">Zobacz szczegóły</BaseButton>
    </div>
  </div>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  color: rgb(143, 143, 143);
}
</style>
