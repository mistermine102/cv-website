<script setup>
import About from '../components/home/About.vue'
import Projects from '../components/home/Projects.vue'
import Experience from '../components/home/Experience.vue'
import Skills from '../components/home/Skills.vue'
import Courses from '../components/home/Courses.vue'
</script>
<template>
  <div>
    <div class="mx-[250px] mt-12">
      <About />
    </div>
    <div class="mx-[250px] mt-96">
      <Skills />
    </div>
    <div class="mt-48">
      <div class="upper-wave bg-repeat-y h-[57px]"></div>
      <div class="bg-primary px-[250px] py-16 grid grid-cols-2 gap-x-32">
        <Experience />
        <Courses />
      </div>
      <div class="upper-wave bg-repeat-y h-[57px] rotate-180"></div>
    </div>
    <div class="mx-[250px] mt-64">
      <Projects />
    </div>
  </div>
</template>
