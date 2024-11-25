<script setup>
import { ref, onMounted } from "vue";
import AccountBoxIcon from "vue-material-design-icons/AccountBox.vue";
import DevicesIcon from "vue-material-design-icons/Devices.vue";
import ToolsIcon from "vue-material-design-icons/Tools.vue";
import BagSuitcaseIcon from "vue-material-design-icons/BriefcaseClock.vue";

const isNavTransparent = ref(true);

document.addEventListener("scroll", () => {
  const { scrollTop } = document.documentElement;

  if (scrollTop === 0) {
    //set navbar to transparent
    isNavTransparent.value = true;
  } else {
    //set navbar to opaque
    isNavTransparent.value = false;
  }
});

const isActive = ref(true);

onMounted(() => {
  document.addEventListener("scroll", () => {
    const { scrollTop } = document.documentElement;
    const aboutSection = document.getElementById("about-section");
    const screenTop = document.body.getBoundingClientRect().top;
    const sectionBottom = aboutSection.getBoundingClientRect().bottom;
    const sectionAbsoluteBottom = sectionBottom - screenTop;

    if (scrollTop > sectionAbsoluteBottom - window.screen.height / 2) {
      isActive.value = false;
    }
  });
});
</script>

<template>
  <nav
    class="flex justify-center top-0 left-0 right-0 z-20 transition-all duration-500"
    :class="[
      isNavTransparent
        ? 'bg-transparent absolute py-4 shadow-none'
        : 'bg-background fixed py-8 shadow-xl',
    ]"
  >
    <div class="flex gap-x-16">
      <button
        class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2 hover:scale-105 transition-all"
        :class="{ 'bg-primary': isActive }"
      >
        <AccountBoxIcon />
        <span>O mnie</span>
      </button>
      <button
        class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2 hover:scale-105 transition-all"
      >
        <ToolsIcon />
        <span>Umiejętności</span>
      </button>
      <button
        class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2 hover:scale-105 transition-all"
      >
        <BagSuitcaseIcon />
        <span>Doświadczenie</span>
      </button>
      <button
        class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2 hover:scale-105 transition-all"
      >
        <DevicesIcon />
        <span>Projekty</span>
      </button>
    </div>
  </nav>
</template>
