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
      :title="$t('modals.feedback.thank_msg')"
      :buttonText="$t('modals.feedback.check_email_button')"
      :text="$t('modals.feedback.check_email')"
      link-to="https://mail.google.com/"
      v-if="modal.isVisible.name === 'checkEmail'"
      blank="_blank"
      ><icon-send-email></icon-send-email
    ></TheFeedback>
    <TheFeedback
      :title="$t('modals.feedback.thank_msg')"
      :buttonText="$t('modals.feedback.news_feed')"
      :text="$t('modals.feedback.activate_email')"
      v-if="modal.isVisible.name === 'activatedEccount'"
      link-to="/"
      ><icon-email-confirmed></icon-email-confirmed
    ></TheFeedback>
    <TheFeedback
      :title="$t('modals.feedback.success')"
      :buttonText="$t('modals.sign_up.log_in')"
      :text="$t('modals.feedback.changed_password')"
      v-if="modal.isVisible.name === 'changedPassword'"
      ><icon-confirmed></icon-confirmed
    ></TheFeedback>

    <WriteQuote v-if="modal.isVisible.name === 'writeQuote'" />
    <ViewQuoteModal v-if="modal.isVisible.name === 'viewQuoteModal'" />
    <AddQuote v-if="modal.isVisible.name === 'addQuoteModal'" />
    <EditQuoteModal v-if="modal.isVisible.name === 'editQuoteModal'" />
    <LinkExpiredModal v-if="modal.isVisible.name === 'linkExpired'" />
    <AddMovieModal v-if="modal.isVisible.name === 'addMovieModal'" />
    <EditMovieModal v-if="modal.isVisible.name === 'editMovieModal'" />
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
import ViewQuoteModal from '@/components/ViewQuoteModal.vue'
import AddQuote from '@/components/AddQuote.vue'
import EditQuoteModal from '@/components/EditQuoteModal.vue'
import LinkExpiredModal from '@/components/LinkExpiredModal.vue'
import AddMovieModal from '@/components/AddMovieModal.vue'
import EditMovieModal from '@/components/EditMovieModal.vue'
import IconEmailConfirmed from '@/components/icons/IconEmailConfirmed.vue'
import IconConfirmed from '@/components/icons/IconConfirmed.vue'
import IconSendEmail from '@/components/icons/IconSendEmail.vue'
const modal = useModalStore()
</script>
