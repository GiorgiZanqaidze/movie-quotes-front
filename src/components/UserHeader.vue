<template>
  <header class="flex p-8 justify-between items-center bg-gray h-[38px] px-4 sm:px-2 relative">
    <h1 class="text-lightGrey text-sm sm:text-lg hidden sm:block">
      {{ $t('landing.quotes') }}
    </h1>
    <div class="block sm:hidden cursor-pointer" @click="modal.toggleModal('userNavigation', true)">
      <img src="@/assets/icons/burger_btn.svg" alt="burger_button" />
    </div>
    <div class="flex sm:gap-5 gap-3">
      <div class="flex items-center">
        <LanguageDropdown />
      </div>
      <div class="flex sm:hidden items-center">
        <img src="@/assets/icons/search.svg" alt="search" />
      </div>
      <button
        class="text-white text-sm sm:text-lg sm:py-[3px] px-2 py-1 sm:px-3 rounded cursor-default"
      >
        <img
          src="@/assets/icons/notification.svg"
          alt="notification"
          class="cursor-pointer w-[24px] sm:w-[30px]"
        />
        <div class="relative">
          <img src="@/assets/icons/arrow.svg" alt="arrow" class="absolute top-3 scale-[1.5]" />
        </div>
        <NotificationsModal />
      </button>
      <button
        @click="logOut"
        class="text-white border text-sm sm:text-lg sm:py-[3px] px-2 sm:px-3 py-1 rounded bg-transparent"
      >
        Log Out
      </button>
    </div>
  </header>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import { setLocale } from '@vee-validate/i18n'
import logOutUser from '@/services/logOutUser.js'
import axiosInstance from '@/config/axios/index'
import { useRouter } from 'vue-router'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import NotificationsModal from '@/components/NotificationsModal.vue'

const modal = useModalStore()

const route = useRouter()

async function logOut() {
  const result = await logOutUser()

  if (result.status === 200) {
    route.push({ name: 'home' })
  }
}
</script>
