<template>
  <button
    @click="logOut"
    class="text-white border text-sm sm:text-lg sm:py-[3px] px-2 sm:px-3 py-1 rounded bg-transparent"
  >
    {{ $t('news_feed.log_out') }}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import logOutUser from '@/services/logOutUser.js'
import { useModalStore } from '@/stores/modal'
const route = useRouter()

const modal = useModalStore()

async function logOut() {
  const result = await logOutUser()

  if (result.status === 200) {
    route.push({ name: 'home' })
    modal.toggleModal('null', false)
  }
}
</script>
