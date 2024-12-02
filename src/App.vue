<script setup>
import TheFooter from './components/layout/TheFooter.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import Home from './pages/Home.vue'
import PopupGallery from './components/PopupGallery.vue'
</script>

<template>
  <PopupGallery />
  <div class="min-h-screen flex flex-col bg-background">
    <TheNavbar />
    <main class="flex-1">
      <Home />
    </main>
    <TheFooter />
  </div>
</template>
