<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[400px] sm:h-[402px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium py-4 px-2"
  >
    <header class="flex flex-col items-center mb-4">
      <icon-link-expired alt="link expired" class="mb-4 sm:mb-0"></icon-link-expired>
      <h1 class="text-white sm:mt-8 sm:text-3xl mb-2">{{ $t('modals.feedback.link_expired') }}</h1>
      <span class="text-mediumGray text-sm my-4 text-center max-w-[500px]">{{
        $t('modals.feedback.link_expired_desc')
      }}</span>
    </header>
    <button
      class="w-[300px] bg-darkRed mx-auto block rounded text-white py-1 text-sm md-text-sm text-center"
      @click="resendEmail"
    >
      {{ $t('modals.feedback.another_link') }}
    </button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import IconLinkExpired from '@/components/icons/IconLinkExpired.vue'
import verifyUserEmail from '@/services/verifyUserEmail.js'
const route = useRoute()

const verifyToken = route.query.email_verify_token

async function resendEmail() {
  verifyUserEmail(verifyToken)
}
</script>
