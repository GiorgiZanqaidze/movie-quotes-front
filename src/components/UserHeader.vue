<template>
  <header class="flex p-8 justify-between items-center bg-gray h-[38px] px-6 sm:px-2 relative">
    <h1 class="text-lightGrey text-sm sm:text-lg hidden sm:block">
      {{ $t('landing.quotes') }}
    </h1>
    <div class="block sm:hidden cursor-pointer" @click="modal.toggleModal('userNavigation', true)">
      <img src="@/assets/icons/burger_btn.svg" alt="burger_button" />
    </div>

    <div class="flex sm:gap-5 gap-0">
      <div class="flex sm:hidden items-center mr-3 sm:mr-0">
        <button @click="modal.toggleSearchModal">
          <img src="@/assets/icons/search.svg" alt="search" />
        </button>
      </div>

      <div
        class="text-white text-sm sm:text-lg sm:py-[3px] px-2 py-1 sm:px-3 rounded cursor-default"
      >
        <button class="flex" @click="modal.toggleNotifications()">
          <img
            src="@/assets/icons/notification.svg"
            alt="notification"
            class="cursor-pointer w-[24px] sm:w-[30px]"
          />
        </button>
        <div v-if="modal.notifications">
          <div class="relative">
            <img src="@/assets/icons/arrow.svg" alt="arrow" class="absolute top-4 scale-[2] z-50" />
          </div>
          <div
            @click="modal.toggleNotifications()"
            class="fixed top-[80px] left-[-10px] right-[-10px] bottom-[-10px] z-50"
          ></div>
          <NotificationsModal />
        </div>
      </div>
      <LanguageDropdown class="hidden sm:block" />
      <LogOutButton class="hidden sm:block" />
      <QuotesSearchModal v-if="modal.searchModal" />
    </div>
  </header>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'

import LanguageDropdown from '@/components/LanguageDropdown.vue'
import NotificationsModal from '@/components/NotificationsModal.vue'
import SearchBar from '@/components/SearchBar.vue'
import LogOutButton from '@/components/LogOutButton.vue'
import QuotesSearchModal from '@/components/QuotesSearchModal.vue'

const modal = useModalStore()
</script>