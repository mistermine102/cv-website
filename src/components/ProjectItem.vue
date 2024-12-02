<script setup>
import 'swiper/css/bundle'
import Swiper from 'swiper/bundle'
import { onMounted, ref } from 'vue'
import BaseButton from './base/BaseButton.vue'
import DeviceRender from './DeviceRender.vue'
import { useStore } from 'vuex'

const props = defineProps({
  title: String,
  image: Object,
  features: Array,
  reversed: Boolean,
  technologies: Array,
  model: {
    src: String,
    zoom: Number,
  },
  mockups: [
    {
      src: String,
    },
  ],
  detailsModal: Object,
})

const store = useStore()
const isMouseOver = ref(false)
const detailsModalRef = ref()

const toggleMouseOver = () => {
  isMouseOver.value = !isMouseOver.value
}

const showPopupGallery = index => {
  store.dispatch('popupGallery/toggle', { images: props.mockups, initial: index })
}

const toggleDetailsModal = () => {
  detailsModalRef.value.toggle()
}

onMounted(() => {
  new Swiper('.project-swiper', {
    direction: 'horizontal',
    loop: false,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    navigation: {
      nextEl: '.project-swiper .swiper-button-next',
      prevEl: '.project-swiper .swiper-button-prev',
    },
    scrollbar: {
      el: '.project-swiper .swiper-scrollbar',
    },
  })
})
</script>

<template>
  <component ref="detailsModalRef" :is="detailsModal" />
  <div class="grid grid-cols-2 justify-center gap-x-32">
    <div>
      <div
        @mouseenter="toggleMouseOver"
        @mouseleave="toggleMouseOver"
        class="aspect-[4/3] bg-white bg-opacity-5 shadow-lg border-gray-400 rounded-lg"
        :class="{ 'order-1': reversed }"
      >
        <div class="swiper project-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-no-swiping">
              <span class="text-gray-400 text-base border-2 border-gray-400 py-0.5 px-2 rounded-full absolute top-2 right-2">3D</span>
              <DeviceRender :isMouseOver="isMouseOver" :model="model" />
            </div>
            <div v-for="(mockup, index) in mockups" :key="index" class="swiper-slide swiper-no-swiping">
              <div class="p-2 w-full h-full">
                <img @click="showPopupGallery(index)" class="w-full h-full object-contain cursor-pointer" :src="mockup.src" alt="" />
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
    <div :class="{ '-order-1': reversed }">
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
        <slot name="description"></slot>
      </div>
      <ul class="list-disc ml-4 mt-2">
        <li v-for="(feature, index) of features" :key="index">{{ feature }}</li>
      </ul>
      <BaseButton @click="toggleDetailsModal" alt class="mt-8">Zobacz szczegóły</BaseButton>
    </div>
  </div>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-button-next,
.swiper-button-prev {
  color: rgb(143, 143, 143);
}
</style>
