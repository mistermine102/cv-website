<script setup>
import { useGLTF } from '@tresjs/cientos'
import { onMounted, shallowRef } from 'vue'
import { useRenderLoop } from '@tresjs/core'

const props = defineProps({
  modelSrc: String,
  isMouseOver: Boolean,
})

const { scene: model } = await useGLTF(props.modelSrc)

const device = shallowRef()
const { onLoop } = useRenderLoop()

const TARGET_ROATION_SPEED = 0.003
let CURRENT_ROTATION_SPEED = 0.003

onMounted(() => {
  device.value.rotation.y += 160
})

onLoop(() => {
  if (props.isMouseOver) {
    if (CURRENT_ROTATION_SPEED > 0) {
      CURRENT_ROTATION_SPEED -= 0.0001
    } else {
      CURRENT_ROTATION_SPEED = 0
    }
  } else {
    if (CURRENT_ROTATION_SPEED < TARGET_ROATION_SPEED) {
      CURRENT_ROTATION_SPEED += 0.0001
    }
  }
  if (device.value) {
    device.value.rotation.y += CURRENT_ROTATION_SPEED
  }
})
</script>

<template>
  <primitive ref="device" :position="[0, -0.08, 0]" :object="model" />
</template>
