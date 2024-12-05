<script setup>
import { useClipboard } from '@vueuse/core'
import ClipboardIcon from 'vue-material-design-icons/ClipboardOutline.vue'
import Modal from '../modals/Modal.vue'
import { ref } from 'vue'

const { copy, isSupported } = useClipboard()

const isMessageShown = ref({
  phone: false,
  email: false,
})

const modalRef = ref()

const toggle = () => {
  modalRef.value.toggle()
}

const animateMessage = type => {
  const DURATION = 2000

  if (isMessageShown.value[type]) return

  isMessageShown.value[type] = true
  setTimeout(() => {
    isMessageShown.value[type] = false
  }, DURATION)
}

const handleCopy = (value, type) => {
  copy(value)
  animateMessage(type)
}

defineExpose({
  toggle,
})
</script>

<template>
  <Modal ref="modalRef">
    <div class="p-4 pt-0">
      <div class="flex flex-col gap-y-4">
        <div>
          <p class="-mb-2 font-semibold text-primaryLight text-base">Email</p>
          <div class="flex items-center">
            <p class="text-3xl font-bold">szymonjarosz102@gmail.com</p>
            <ClipboardIcon
              :size="24"
              @click="handleCopy('szymonjarosz102@gmail.com', 'email')"
              v-if="isSupported"
              class="ml-2 cursor-pointer text-gray-400"
            />
          </div>
          <div class="h-2">
            <Transition>
              <p v-if="isMessageShown.email" class="text-green-500 text-sm">Skopiowano email!</p>
            </Transition>
          </div>
        </div>
        <div>
          <p class="font-semibold text-primaryLight text-base">Numer telefonu</p>
          <div class="flex items-center">
            <p class="text-3xl font-bold">+48532395944</p>
            <ClipboardIcon :size="24" @click="handleCopy('+48532395944', 'phone')" v-if="isSupported" class="ml-2 cursor-pointer text-gray-400" />
          </div>
          <div class="h-2">
            <Transition>
              <p v-if="isMessageShown.phone" class="text-green-500 text-sm">Skopiowano numer telefonu!</p>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
