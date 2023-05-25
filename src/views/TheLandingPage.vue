<template>
  <main>
    <the-paralax></the-paralax>
    <the-modal v-if="modal.isVisible.condition"></the-modal>
  </main>
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
