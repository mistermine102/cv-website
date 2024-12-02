<script setup>
import { ref, onMounted } from 'vue'
import AccountBoxIcon from 'vue-material-design-icons/AccountBox.vue'
import DevicesIcon from 'vue-material-design-icons/Devices.vue'
import ToolsIcon from 'vue-material-design-icons/Tools.vue'
import BagSuitcaseIcon from 'vue-material-design-icons/BriefcaseClock.vue'
import BaseButton from '../base/BaseButton.vue'

const navLinks = [
  {
    name: 'O mnie',
    icon: AccountBoxIcon,
    section: {
      id: 1,
      boundary: null,
      boundaryElementId: 'projects-title',
    },
  },
  {
    name: 'Projekty',
    icon: DevicesIcon,
    section: {
      id: 4,
      boundary: null,
      boundaryElementId: 'experience-title',
    },
  },
  {
    name: 'Doświadczenie',
    icon: BagSuitcaseIcon,
    section: {
      id: 3,
      boundary: null,
      boundaryElementId: 'skills-title',
    },
  },
  {
    name: 'Umiejętności',
    icon: ToolsIcon,
    section: {
      id: 2,
      boundary: null,
      boundaryElementId: 'main-footer',
    },
  },
]

const calculateSectionBoundaries = () => {
  const screenTop = document.body.getBoundingClientRect().top

  //get sections boundaries
  for (const link of navLinks) {
    const boundaryElement = document.getElementById(link.section.boundaryElementId)
    link.section.boundary = boundaryElement.getBoundingClientRect().bottom - screenTop
  }
}

const isNavTransparent = ref(true)

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

const currentSectionIndex = ref(0)

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

const scrollToSection = index => {
  let boundary = 0

  if (index !== 0) {
    boundary = navLinks[index - 1].section.boundary
  }

  window.scrollTo({ top: boundary - 300, behavior: 'smooth' })
}

onMounted(() => {
  calculateSectionBoundaries()
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
        @click="scrollToSection(index)"
      >
        <component :is="link.icon" />
        <span>{{ link.name }}</span>
      </button>
    </div>
  </nav>
</template>
