<script setup>
import { ref, onMounted } from 'vue'
import AccountBoxIcon from 'vue-material-design-icons/AccountBox.vue'
import DevicesIcon from 'vue-material-design-icons/Devices.vue'
import ToolsIcon from 'vue-material-design-icons/Tools.vue'
import BagSuitcaseIcon from 'vue-material-design-icons/BriefcaseClock.vue'

const isNavTransparent = ref(true)

const navLinks = [
  {
    name: 'O mnie',
    icon: AccountBoxIcon,
    section: {
      boundary: null,
      boundaryElementId: 'skills-title',
    },
  },
  {
    name: 'Umiejętności',
    icon: ToolsIcon,
    section: {
      boundary: null,
      boundaryElementId: 'experience-title',
    },
  },
  {
    name: 'Doświadczenie',
    icon: BagSuitcaseIcon,
    section: {
      boundary: null,
      boundaryElementId: 'projects-title',
    },
  },
  {
    name: 'Projekty',
    icon: DevicesIcon,
    section: {
      boundary: null,
      boundaryElementId: 'main-footer',
    },
  },
]

const currentSectionIndex = ref(0)

const calculateSectionBoundaries = () => {
  const screenTop = document.body.getBoundingClientRect().top

  //get sections boundaries
  for (const link of navLinks) {
    const boundaryElement = document.getElementById(link.section.boundaryElementId)
    link.section.boundary = boundaryElement.getBoundingClientRect().bottom - screenTop
  }
}

const setNavbarTransparency = () => {
  const { scrollTop } = document.documentElement

  if (scrollTop === 0) {
    //set navbar to transparent
    isNavTransparent.value = true
  } else {
    //set navbar to opaque
    isNavTransparent.value = false
  }
}

const setCurrentSection = () => {
  calculateSectionBoundaries()

  //offset so we change when the boundary element is in the middle of the screen
  const offset = window.screen.height / 2

  //if we scroll past the current section boundary, incremenet current section index
  if (document.documentElement.scrollTop + offset > navLinks[currentSectionIndex.value].section.boundary) {
    currentSectionIndex.value++
  }

  //set current section as the previous one if we're not on the first section and we have scrolled up beyond prevoius section boundary
  if (currentSectionIndex.value !== 0 && document.documentElement.scrollTop + offset < navLinks[currentSectionIndex.value - 1].section.boundary) {
    currentSectionIndex.value--
  }
}

onMounted(() => {
  document.addEventListener('scroll', setNavbarTransparency)
  document.addEventListener('scroll', setCurrentSection)
})
</script>

<template>
  <nav
    class="flex justify-center top-0 left-0 right-0 z-20 transition-all duration-500"
    :class="[isNavTransparent ? 'bg-transparent absolute py-4 shadow-none' : 'bg-background fixed py-8 shadow-xl']"
  >
    <div class="flex gap-x-16">
      <button
        v-for="(link, index) in navLinks"
        :key="link.name"
        class="border-2 px-8 rounded-full py-1 border-primary flex items-center gap-x-2 hover:scale-105 transition-all"
        :class="[index === currentSectionIndex && 'bg-primary']"
      >
        <component :is="link.icon" />
        <span>{{ link.name }}</span>
      </button>
    </div>
  </nav>
</template>
