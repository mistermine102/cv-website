<script setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import DeviceModel from './DeviceModel.vue'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'


const props = defineProps({
  model: {
    src: String,
  },
})

const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}
</script>

<template>
  <TresCanvas v-bind="gl">
    <TresPerspectiveCamera :position="[0.2, 0, 0.4]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <Suspense>
      <DeviceModel :modelSrc="model.src" />
    </Suspense>
    <TresDirectionalLight color="#4f46e5" :position="[3, 3, 3]" :intensity="5" />
    <TresAmbientLight :intensity="2" />
  </TresCanvas>
</template>
