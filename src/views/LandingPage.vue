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
  },

  created() {
    const token = this.$route.query.reset_password_token
    if (token) {
      this.modal.toggleModal('newPassword', true)
    }
  }
}
</script>
