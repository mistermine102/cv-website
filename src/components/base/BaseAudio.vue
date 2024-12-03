<script setup>
import { ref } from 'vue'
import PlayIcon from 'vue-material-design-icons/Play.vue'
import PauseIcon from 'vue-material-design-icons/Pause.vue'

const props = defineProps({
  src: String,
  volume: Number,
})

const isPlaying = ref(false)

const audio = new Audio(props.src)

audio.volume = props.volume

audio.onplay = () => (isPlaying.value = true)

audio.onpause = () => (isPlaying.value = false)

audio.onended = () => (isPlaying.value = false)

const handleClick = () => {
  audio.paused ? audio.play() : audio.pause()
}
</script>

<template>
  <button @click="handleClick">
    <PlayIcon v-if="!isPlaying" />
    <PauseIcon v-else />
  </button>
</template>
