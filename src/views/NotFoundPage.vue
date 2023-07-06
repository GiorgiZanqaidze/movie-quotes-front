<template>
  <div
    class="text-white flex flex-col justify-center items-center min-h-screen gap-10 mx-auto bg-darkGray"
  >
    <div>
      <icon-not-found alt="not_found"></icon-not-found>
      <h1 class="text-3xl text-center mt-4">{{ $t('not_found.not_found_page.title') }}!</h1>
    </div>
    <div class="flex flex-col items-center gap-6">
      <p class="text-center">{{ $t('not_found.not_permited.text') }}</p>
      <a href="/" class="bg-red-500 rounded px-2 py-1">{{ $t('not_found.return_home') }}</a>
    </div>
  </div>
</template>

<script setup>
import IconNotFound from '@/components/icons/IconNotFound.vue'
</script>
