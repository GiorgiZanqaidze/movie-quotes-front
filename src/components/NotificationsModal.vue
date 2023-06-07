<template>
  <div
    class="text-white absolute w-screen left-[0] top-[80px] min-h-[200px] px-5 pt-3 bg-black sm:right-10 sm:left-auto z-40 sm:w-[960px] rounded-md"
  >
    <div class="flex justify-between">
      <h1 class="sm:text-[32px]">Notifications</h1>
      <button class="underline text-[20px]">Mark as all read</button>
    </div>
    <div class="mt-5 flex flex-col gap-4 pb-4">
      <TheNotification condition="new" />
      <TheNotification condition="old" />
    </div>
  </div>
</template>

<script setup>
import ProfileIcon from '@/components/ProfileIcon.vue'
import TheNotification from '@/components/TheNotification.vue'
</script>
