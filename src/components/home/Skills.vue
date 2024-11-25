<script setup>
import { onMounted, ref, watch } from "vue";
import BaseTitle from "../base/BaseTitle.vue";
import ProgressBar from "../ProgressBar.vue";
import { useElementVisibility } from "@vueuse/core";

const skills = {
  main: [
    {
      name: "Javascript",
      image: { src: "/images/skills/javascript.png" },
      level: 92,
    },
    {
      name: "Vue",
      image: { src: "/images/skills/vue.png" },
      level: 87,
    },
    {
      name: "Node.js",
      image: { src: "/images/skills/nodejs.png" },
      level: 83,
    },
    {
      name: "Express",
      image: { src: "/images/skills/express.png" },
      level: 80,
    },
    {
      name: "MongoDB",
      image: { src: "/images/skills/mongodb.png" },
      level: 74,
    },
    {
      name: "TailwindCss",
      image: { src: "/images/skills/tailwindcss.png" },
      level: 88,
    },
    {
      name: "Git",
      image: { src: "/images/skills/git.png" },
      level: 70,
    },
  ],
  additional: [
    {
      name: "Graphql",
      image: { src: "/images/skills/graphql.png" },
      level: 70,
    },
    {
      name: "Php",
      image: { src: "/images/skills/php.png" },
      level: 70,
    },
    {
      name: "MySql",
      image: { src: "/images/skills/mysql.png" },
      level: 70,
    },
    {
      name: "React",
      image: { src: "/images/skills/react.png" },
      level: 70,
    },
    {
      name: "Wordpress",
      image: { src: "/images/skills/wordpress.png" },
      level: 70,
    },
    {
      name: "Bootstrap",
      image: { src: "/images/skills/bootstrap.png" },
      level: 70,
    },
    {
      name: "Socket.io",
      image: { src: "/images/skills/socketio.png" },
      level: 70,
    },
    {
      name: "Woocommerce",
      image: { src: "/images/skills/woocommerce.png" },
      level: 70,
    },
    {
      name: "Figma",
      image: { src: "/images/skills/figma.png" },
      level: 70,
    },
  ],
};

let didAnimate = false;
const progressBarsRefs = ref();
const skillContainerRef = ref();
const isContainerVisible = useElementVisibility(skillContainerRef);

watch(isContainerVisible, () => {
  //when container with skills is visible in viewport animation begins but happens only once
  if (!isContainerVisible || didAnimate) return;

  //animate each progress bar
  for (const progressBarRef of progressBarsRefs.value) {
    progressBarRef.animate();
  }

  didAnimate = true;
});
</script>

<template>
  <section class="mx-page">
    <BaseTitle>UMIEJĘTNOŚCI</BaseTitle>
    <div ref="skillContainerRef" class="flex flex-wrap justify-center">
      <div
        v-for="skill of skills.main"
        :key="skill.name"
        class="w-1/4 2xl:w-1/5"
      >
        <div class="m-4 px-8 pt-8 pb-4 bg-white bg-opacity-5 rounded-lg">
          <img
            class="aspect-[2/1] object-contain"
            :src="skill.image.src"
            :alt="skill.name"
          />
          <ProgressBar
            ref="progressBarsRefs"
            :doesAnimate="true"
            :cells="3"
            :progress="skill.level"
          />
        </div>
      </div>
    </div>
    <h3 class="text-4xl text-gray-200 mt-24 font-semibold">Dodatkowe</h3>
    <div class="flex flex-wrap justify-center mt-4">
      <div
        v-for="skill of skills.additional"
        :key="skill.name"
        class="w-1/5 2xl:w-1/6"
      >
        <div class="m-4 px-8 py-4 bg-white bg-opacity-5 rounded-lg">
          <img
            class="aspect-[5/3] object-contain"
            :src="skill.image.src"
            :alt="skill.name"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
