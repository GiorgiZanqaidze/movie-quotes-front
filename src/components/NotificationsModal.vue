<template>
  <div
    class="text-white absolute z-50 w-screen left-[0] top-[80px] min-h-[200px] px-5 pt-3 bg-black sm:right-10 sm:left-auto sm:w-[960px] rounded-md"
  >
    <div class="flex justify-between">
      <h1 class="sm:text-[32px]">{{ $t('news_feed.notifications') }}</h1>
      <button class="underline text-[20px]" @click="markAll">{{ $t('news_feed.mark_all') }}</button>
    </div>
    <div class="mt-5 flex flex-col gap-4 pb-4 max-h-[20rem] overflow-y-scroll">
      <TheNotification
        v-for="(notification, index) in state.notifications"
        :key="index"
        :condition="notification.read_at"
        :type="notification.type"
        :data="notification"
      />
    </div>
  </div>
</template>

<script setup>
import TheNotification from '@/components/TheNotification.vue'
import { userStore } from '@/stores/user'
import updateNotifications from '@/services/updateNotifications.js'
import { reactive } from 'vue'
const user = userStore()

const state = reactive({
  notifications: user?.data?.received_notifications.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  })
})

const markAll = async () => {
  const response = await updateNotifications()

  console.log(response)

  if (response.status === 200) {
    state.notifications = response.data
  }
}
</script>
