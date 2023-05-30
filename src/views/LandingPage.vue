<template>
  <main>
    <the-paralax></the-paralax>
    <the-modal v-if="modal.isVisible.condition"></the-modal>
  </main>
</template>

<script>
import { useModalStore } from '@/stores/modal'
import loginUser from '@/services/loginUser.js'
import verifyUser from '@/services/verifyUser.js'
export default {
  setup() {
    const modal = useModalStore()
    return { modal }
  },

  created() {
    const passwordToken = this.$route.query.reset_password_token
    if (passwordToken) {
      this.modal.toggleModal('newPassword', true)
    }

    const verifyToken = this.$route.query.email_verify_token

    if (verifyToken) {
      this.modal.toggleModal('activatedEccount', true)
      verifyUser(verifyToken)
    }
  }
}
</script>
