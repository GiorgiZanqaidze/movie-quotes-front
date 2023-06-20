<template>
  <div
    class="text-white absolute z-50 w-screen left-[0] top-[80px] min-h-[200px] px-5 pt-3 bg-black sm:right-10 sm:left-auto sm:w-[960px] rounded-md"
  >
    <div class="flex justify-between">
      <h1 class="sm:text-[32px]">{{ $t('news_feed.notifications') }}</h1>
      <button class="underline text-[20px]">{{ $t('news_feed.mark_all') }}</button>
    </div>
    <div class="mt-5 flex flex-col gap-4 pb-4">
      <TheNotification condition="new" type="comment" />
      <TheNotification condition="new" type="like" />
      <TheNotification condition="old" type="like" />
      <TheNotification condition="old" type="comment" />
      <TheNotification condition="old" type="comment" />
    </div>
  </div>
</template>

<script setup>
import TheNotification from '@/components/TheNotification.vue'
</script>
