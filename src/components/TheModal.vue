<template>
  <div v-if="modal.isVisible.condition">
    <div
      @click="modal.toggleModal('null', false)"
      class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px]"
      style="background: rgba(0, 0, 0, 0.54); backdrop-filter: blur(3px)"
    ></div>
    <the-login v-if="modal.isVisible.name === 'logIn'"></the-login>
    <sign-up v-if="modal.isVisible.name === 'signUp'"></sign-up>
    <forgot-password v-if="modal.isVisible.name === 'forgotPassword'"></forgot-password>
    <new-password v-if="modal.isVisible.name === 'newPassword'"></new-password>
    <the-feedback
      img-src="src/assets/icons/send_email.svg"
      :title="$t('modals.feedback.thank_msg')"
      :buttonText="$t('modals.feedback.check_email_button')"
      :text="$t('modals.feedback.check_email')"
      link-to="https://mail.google.com/"
      v-if="modal.isVisible.name === 'checkEmail'"
    ></the-feedback>
    <the-feedback
      img-src="src/assets/icons/confirmed.svg"
      :title="$t('modals.feedback.thank_msg')"
      :buttonText="$t('modals.feedback.news_feed')"
      :text="$t('modals.feedback.activate_email')"
      v-if="modal.isVisible.name === 'activatedEccount'"
    ></the-feedback>
    <the-feedback
      img-src="src/assets/icons/confirmed.svg"
      :title="$t('modals.feedback.success')"
      :buttonText="$t('modals.sign_up.log_in')"
      :text="$t('modals.feedback.changed_password')"
      v-if="modal.isVisible.name === 'changedPassword'"
    ></the-feedback>
    <the-feedback
      img-src="src/assets/icons/link_expired.svg"
      :title="$t('modals.feedback.link_expired')"
      :buttonText="$t('modals.feedback.another_link')"
      :text="$t('modals.feedback.link_expired_desc')"
      v-if="modal.isVisible.name === 'linkExpired'"
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
