<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import Home from './pages/Home.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#121212]">
    <TheHeader />
    <div class="flex-1">
      <Home />
    </div>
    <TheFooter />
  </div>
</template>
