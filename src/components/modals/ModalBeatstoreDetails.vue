<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const modalRef = ref()

const toggle = () => {
  modalRef.value.toggle()
}

defineExpose({
  toggle,
})
</script>
<template>
    <Modal></Modal>
</template>