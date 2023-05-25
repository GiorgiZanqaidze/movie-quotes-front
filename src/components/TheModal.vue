<template>
  <div>
    <div
      @click="modal.toggleModal('logIn')"
      class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] bg-black/75"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modal'
export default {
  setup() {
    const modal = useModalStore()

    return { modal }
  }
}
</script>
