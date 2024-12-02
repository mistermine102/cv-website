<script setup>
import 'swiper/css/bundle'
import Swiper from 'swiper/bundle'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const { popupGallery } = store.state

const toggle = () => {
  store.dispatch('popupGallery/toggle')
}

onMounted(() => {
  new Swiper('.popup-gallery-swiper', {
    direction: 'horizontal',
    initialSlide: popupGallery.initial,
    loop: false,
    navigation: {
      nextEl: '.popup-gallery-swiper .swiper-button-next',
      prevEl: '.popup-gallery-swiper .swiper-button-prev',
    },
    scrollbar: {
      el: '.popup-gallery-swiper .swiper-scrollbar',
    },
  })
})
</script>

<template>
  <div v-if="popupGallery.isShown" @click="toggle" class="fixed inset-0 bg-black z-30 bg-opacity-70 flex justify-center items-center">
    <button class="fixed top-4 right-4">
      <CloseIcon :size="32" />
    </button>
    <div @click.stop class="swiper popup-gallery-swiper">
      <div class="swiper-wrapper">
        <div v-for="(image, index) in popupGallery.images" :key="index" class="swiper-slide">
          <img class="w-full h-full object-contain" :src="image.src" alt="" />
        </div>
      </div>
      <div class="swiper-button-prev swiper-button"></div>
      <div class="swiper-button-next swiper-button"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 75%;
  height: 100%;
}

.swiper-button-next,
.swiper-button-prev {
  color: rgb(143, 143, 143);
}
</style>
