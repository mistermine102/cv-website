<script setup>
import { ref } from 'vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import { useStore } from 'vuex'

const store = useStore()
const isShown = ref(false)

const toggle = () => {
  store.dispatch('toggleBodyScroll')
  isShown.value = !isShown.value
}

defineExpose({
  toggle,
})
</script>
<template>
  <Transition>
    <div @click.once="toggle" v-if="isShown" class="bg-opacity-70 bg-black fixed inset-0 z-30 flex justify-center items-center px-[30%] py-8">
      <div @click.stop class="w-full h-full flex flex-col bg-background rounded-lg overflow-y-auto">
        <div class="flex justify-end p-2">
          <button @click.once="toggle" class="">
            <CloseIcon :size="32" />
          </button>
        </div>
        <div class="p-4 w-full h-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
