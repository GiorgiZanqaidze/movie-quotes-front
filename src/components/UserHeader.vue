<template>
  <header class="flex p-8 justify-between items-center bg-gray h-[38px] px-6 sm:px-2 relative">
    <h1 class="text-lightGrey text-sm sm:text-lg hidden sm:block">
      {{ $t('landing.quotes') }}
    </h1>
    <div class="block sm:hidden cursor-pointer" @click="modal.toggleModal('userNavigation', true)">
      <icon-burger alt="burger_button"></icon-burger>
    </div>

    <div class="flex sm:gap-5 gap-0">
      <div
        class="flex sm:hidden items-center mr-3 sm:mr-0"
        v-if="route.name !== 'movieDescription' && route.name !== 'userProfile'"
      >
        <button @click="modal.toggleSearchModal">
          <icon-search alt="search"></icon-search>
        </button>
      </div>

      <div
        class="text-white text-sm sm:text-lg sm:py-[3px] px-2 py-1 sm:px-3 rounded cursor-default"
      >
        <button class="flex relative" @click="modal.toggleNotifications()">
          <icon-notifications
            alt="notification"
            class="cursor-pointer w-[24px] sm:w-[30px]"
          ></icon-notifications>
          <span
            v-if="newsLength > 0"
            class="absolute top-[-5px] right-0 bg-darkRed rounded-full px-1 text-xs"
            >{{ newsLength }}</span
          >
        </button>
        <div v-if="modal.notifications">
          <div class="relative">
            <icon-arrow alt="arrow" class="absolute top-4 scale-[2] z-50"></icon-arrow>
          </div>
          <div
            @click="modal.toggleNotifications()"
            class="fixed top-[80px] left-[-10px] right-[-10px] bottom-[-10px] z-50"
          ></div>
          <NotificationsModal @clear-notifications="clearNewNotifications" />
        </div>
      </div>
      <LanguageDropdown class="hidden sm:block" />
      <LogOutButton class="hidden sm:block" />
      <QuotesSearchModal class="fixed sm:hidden" v-if="modal.searchModal" />
    </div>
  </header>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'

import LanguageDropdown from '@/components/LanguageDropdown.vue'
import NotificationsModal from '@/components/NotificationsModal.vue'
import LogOutButton from '@/components/LogOutButton.vue'
import QuotesSearchModal from '@/components/QuotesSearchModal.vue'
import { userStore } from '@/stores/user'
import { ref, onMounted } from 'vue'
import instantiatePusher from '@/helpers/instantiatePusher'
import { useRoute } from 'vue-router'
import IconArrow from '@/icons/IconArrow.vue'
import IconBurger from '@/icons/IconBurger.vue'
import IconSearch from '@/icons/IconSearch.vue'
import IconNotifications from '@/icons/IconNotifications.vue'

const route = useRoute()

const user = userStore()

const modal = useModalStore()

const notifications = ref(user.data.received_notifications)

const news = ref(notifications.value.filter((notification) => notification.read_at === null))

const newsLength = ref(news.value.length)

const clearNewNotifications = () => {
  news.value = []
  newsLength.value = null
}

onMounted(() => {
  instantiatePusher()

  window.Echo.private(`notification.${user.data.id}`).listen('SendNotifications', (data) => {
    const notification = {
      sender: data.notification.from,
      type: data.notification.type,
      created_at: data.notification.created_at
    }

    newsLength.value++

    notifications.value.unshift(notification)
  })
})
</script>
