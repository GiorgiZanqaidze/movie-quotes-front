<template>
  <div v-if="modal.isVisible.condition">
    <div
      @click="modal.toggleModal('null', false)"
      class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px]"
      style="background: rgba(0, 0, 0, 0.54); backdrop-filter: blur(3px)"
    ></div>
    <TheLogin v-if="modal.isVisible.name === 'logIn'" />
    <SignUp v-if="modal.isVisible.name === 'signUp'" />
    <ForgotPassword v-if="modal.isVisible.name === 'forgotPassword'" />
    <NewPassword v-if="modal.isVisible.name === 'newPassword'" />
    <TheFeedback
      img-src="src/assets/icons/send_email.svg"
      :title="$t('modals.feedback.thank_msg')"
      :buttonText="$t('modals.feedback.check_email_button')"
      :text="$t('modals.feedback.check_email')"
      link-to="https://mail.google.com/"
      v-if="modal.isVisible.name === 'checkEmail'"
      blank="_blank"
    />
    <TheFeedback
      img-src="src/assets/icons/confirmed.svg"
      :title="$t('modals.feedback.thank_msg')"
      :buttonText="$t('modals.feedback.news_feed')"
      :text="$t('modals.feedback.activate_email')"
      v-if="modal.isVisible.name === 'activatedEccount'"
      link-to="/"
    />
    <TheFeedback
      img-src="src/assets/icons/confirmed.svg"
      :title="$t('modals.feedback.success')"
      :buttonText="$t('modals.sign_up.log_in')"
      :text="$t('modals.feedback.changed_password')"
      v-if="modal.isVisible.name === 'changedPassword'"
    />
    <TheFeedback
      img-src="src/assets/icons/link_expired.svg"
      :title="$t('modals.feedback.link_expired')"
      :buttonText="$t('modals.feedback.another_link')"
      :text="$t('modals.feedback.link_expired_desc')"
      v-if="modal.isVisible.name === 'linkExpired'"
    />
    <WriteQuote v-if="modal.isVisible.name === 'writeQuote'" />
    <ViewQuoteModal v-if="modal.isVisible.name === 'viewQuoteModal'" />
    <AddQuote v-if="modal.isVisible.name === 'addQuoteModal'" />
    <EditQuoteModal v-if="modal.isVisible.name === 'editQuoteModal'" />
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import TheLogin from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import NewPassword from '@/components/NewPassword.vue'
import TheFeedback from '@/components/TheFeedback.vue'
import WriteQuote from '@/components/WriteQuote.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import ViewQuoteModal from '@/components/ViewQuoteModal.vue'
import AddQuote from '@/components/AddQuote.vue'
import EditQuoteModal from '@/components/EditQuoteModal.vue'
const modal = useModalStore()
</script>
