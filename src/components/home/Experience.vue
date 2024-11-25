<script setup>
import WorkTimeline from './WorkTimeline.vue'
import Courses from './Courses.vue'
</script>

<template>
  <section id="experience-section" class="mt-48">
    <div class="upper-wave bg-repeat-y h-[57px]"></div>
    <div class="bg-primary px-page py-16 grid grid-cols-2 gap-x-32">
      <WorkTimeline />
      <Courses />
    </div>
    <div class="upper-wave bg-repeat-y h-[57px] rotate-180"></div>
  </section>
</template>
