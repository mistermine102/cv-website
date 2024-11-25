<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import Home from './pages/Home.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background">
    <TheNavbar />
    <div class="flex-1">
      <Home />
    </div>
    <TheFooter />
  </div>
</template>
