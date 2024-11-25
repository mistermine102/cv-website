<script setup>
import About from "../components/home/About.vue";
import Projects from "../components/home/Projects.vue";
import Experience from "../components/home/Experience.vue";
import Skills from "../components/home/Skills.vue";
import Courses from "../components/home/Courses.vue";
</script>
<template>
  <div>
    <About />
    <Skills />
    <div class="mt-48">
      <div class="upper-wave bg-repeat-y h-[57px]"></div>
      <div class="bg-primary px-page py-16 grid grid-cols-2 gap-x-32">
        <Experience />
        <Courses />
      </div>
      <div class="upper-wave bg-repeat-y h-[57px] rotate-180"></div>
    </div>
    <Projects />
  </div>
</template>
