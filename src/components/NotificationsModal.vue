<template>
  <div class="text-white absolute w-screen left-[0] top-[80px] min-h-[200px] px-5 pt-3 bg-black">
    <div class="flex justify-between">
      <h1>Notifications</h1>
      <button class="underline">Mark as all read</button>
    </div>
    <div class="mt-5">
      <div class="border rounded bg-transparent px-3 py-3">
        <div>
          <div class="flex gap-3">
            <div class="w-10 flex items-center justify-center">
              <ProfileIcon />
            </div>
            <div class="flex flex-col justify-start">
              <h1 class="text-left">giorgi zankaidze</h1>
              <p class="text-[14px]">Commented to your movie quote</p>
            </div>
          </div>
        </div>
        <div class="flex gap-3 items-center">
          <p class="text-[14px] text-center w-10">New</p>
          <p class="text-[14px]">5 minutes ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileIcon from '@/components/ProfileIcon.vue'
</script>
