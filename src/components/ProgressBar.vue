<script setup>
import { ref } from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  cells: {
    type: Number,
    default: 3,
  },
  doesAnimate: {
    type: Boolean,
    default: false,
  },
  animationDelay: {
    type: Number,
    default: 0,
  },
})

const calculateFinalCellWidths = () => {
  let widths = []

  let progress = props.progress * props.cells
  let cellIndex = 0

  //start with all cells with width 0
  for (let i = 0; i < props.cells; i++) {
    widths[i] = 0
  }

  //add cells that have a full width
  while (progress > 100) {
    widths[cellIndex] = 100
    progress -= 100
    cellIndex++
  }

  //add the remainder to the next cell
  widths[cellIndex] = progress

  return widths
}

const finalCellWidths = calculateFinalCellWidths()
const currentCellWidths = ref([])
const TRANSITION_DURATION = 3000
const cellTransitionDuration = Math.ceil(TRANSITION_DURATION / props.cells)
const isAnimating = ref(false)

const animate = async () => {
  await new Promise(resolve => setTimeout(resolve, props.animationDelay))

  if (isAnimating.value) return

  //make every cell width 0
  for (let i = 0; i < props.cells; i++) {
    currentCellWidths.value[i] = 0
  }

  isAnimating.value = true

  for (let i = 0; i < finalCellWidths.length; i++) {
    //wait
    await new Promise(resolve => setTimeout(resolve, cellTransitionDuration))

    //set the width of a cell
    currentCellWidths.value[i] = finalCellWidths[i]
  }

  isAnimating.value = false
}

const clamp = (num, min, max) => {
  //clamps a number between 2 values
  return num <= min ? min : num >= max ? max : num
}

defineExpose({
  animate,
})
</script>

<template>
  <div class="h-[10px] flex gap-x-1 mt-4">
    <div v-for="index in cells" :key="index" class="flex-1 rounded-md bg-background">
      <div
        v-if="doesAnimate"
        :style="{ width: `${currentCellWidths[index - 1]}%`, transitionProperty: 'width', transitionDuration: `${cellTransitionDuration}ms` }"
        class="h-full bg-primary rounded-md"
      ></div>
      <div
        v-else
        :style="{ width: `${clamp(progress / (100 / cells) - (index - 1), 0, 1) * 100}%` }"
        class="h-full bg-primary rounded-md progress-cell-fill"
      ></div>
    </div>
  </div>
</template>
