<template>
  <div v-if="modal.isVisible.condition">
    <div
      @click="modal.toggleModal('null', false)"
      class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] bg-black/75"
    ></div>
    <the-login v-if="modal.isVisible.name === 'logIn'"></the-login>
    <!-- <sign-up v-if="modal.isVisible.name === 'signUp'"></sign-up> -->
    <forgot-password v-if="modal.isVisible.name === 'forgotPassword'"></forgot-password>
    <new-password v-if="modal.isVisible.name === 'newPassword'"></new-password>
    <the-feedback
      img-src="src/assets/icons/send_email.svg"
      :title="$t('modals.feedback.thank_msg')"
      :buttonText="$t('modals.feedback.check_email_button')"
      :text="$t('modals.feedback.check_email')"
      v-if="modal.isVisible.name === 'signUp'"
    ></the-feedback>
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
