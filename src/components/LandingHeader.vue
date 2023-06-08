<template>
  <header class="flex px-2 sm:p-8 justify-between items-center bg-gray h-[38px]">
    <h1 class="text-lightGrey text-sm sm:text-lg">{{ $t('landing.quotes') }}</h1>
    <div class="flex sm:gap-7 gap-3">
      <div class="flex items-center">
        <LanguageDropdown />
      </div>
      <div>
        <button
          @click="toggleModal('signUp', true)"
          href="#"
          class="text-white text-sm sm:text-lg sm:py-[3px] px-2 py-1 sm:px-3 rounded bg-darkRed"
        >
          {{ $t('landing.sign_up') }}
        </button>
      </div>
      <div>
        <button
          @click="toggleModal('logIn', true)"
          class="text-white border text-sm sm:text-lg sm:py-[3px] px-2 sm:px-3 py-1 rounded bg-transparent"
        >
          {{ $t('landing.log_in') }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import { setLocale } from '@vee-validate/i18n'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
const modal = useModalStore()

function toggleModal(type, show) {
  this.modal.toggleModal(type, show)
}
</script>
