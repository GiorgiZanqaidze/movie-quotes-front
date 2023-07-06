<template>
  <a
    @click="googleAuth"
    href="#"
    class="text-center w-full bg-transparent border sm:py-1 rounded text-sm sm:text-md py-1"
  >
    <icon-google alt="google" class="inline-block w-[20px] mr-1"></icon-google>
    {{ $t('modals.login.google') }}
  </a>
</template>

<script setup>
import googleAuth from '@/services/googleAuth.js'
import IconGoogle from '@/icons/IconGoogle.vue'
</script>
