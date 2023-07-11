<template>
  <a
    @click="loginWithGoogle"
    href="#"
    class="text-center w-full bg-transparent border sm:py-1 rounded text-sm sm:text-md py-1"
  >
    <icon-google alt="google" class="inline-block w-[20px] mr-1"></icon-google>
    {{ $t('modals.login.google') }}
  </a>
</template>

<script setup>
import googleAuth from '@/services/googleAuth.js'
import IconGoogle from '@/components/icons/IconGoogle.vue'
import { useModalStore } from '@/stores/modal'

const modal = useModalStore()

const loginWithGoogle = async () => {
  await googleAuth()
  modal.toggleModal('null', false)
}
</script>
