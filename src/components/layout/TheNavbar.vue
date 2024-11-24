<script setup>
import { ref } from 'vue'
import AccountBoxIcon from 'vue-material-design-icons/AccountBox.vue'
import DevicesIcon from 'vue-material-design-icons/Devices.vue'
import ToolsIcon from 'vue-material-design-icons/Tools.vue'
import BagSuitcaseIcon from 'vue-material-design-icons/BriefcaseClock.vue'
import { useScroll } from '@vueuse/core'

const isNavTransparent = ref(true)
const projectsSection = document.getElementById('projects-section')
const { x, y } = useScroll(projectsSection)

y.value = 500

document.addEventListener('scroll', () => {
  const { scrollTop } = document.documentElement

  if (scrollTop === 0) {
    //set navbar to transparent
    isNavTransparent.value = true
  } else {
    //set navbar to opaque
    isNavTransparent.value = false
  }
})
</script>

<template>
  <nav
    class="flex justify-center top-0 left-0 right-0 z-20 transition-all duration-500"
    :class="[isNavTransparent ? 'bg-transparent absolute py-4 shadow-none' : 'bg-background fixed py-8 shadow-xl']"
  >
    <div class="flex gap-x-16">
      <button class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2">
        <AccountBoxIcon />
        <span>O MNIE</span>
      </button>
      <button class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2">
        <ToolsIcon />
        <span>UMIEJĘTNOŚCI</span>
      </button>
      <button class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2">
        <BagSuitcaseIcon />
        <span>DOŚWIADCZENIE</span>
      </button>
      <button class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2">
        <DevicesIcon />
        <span>Projekty</span>
      </button>
    </div>
  </nav>
</template>
