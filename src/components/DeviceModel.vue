<script setup>
import { useGLTF } from '@tresjs/cientos'

const props = defineProps({
  modelSrc: String,
})

const { scene: model } = await useGLTF(props.modelSrc)
</script>

<template>
  <primitive :object="model" />
</template>
