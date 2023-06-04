<template>
  <div
    class="text-white absolute top-[150px] width-[200px] height-[200px] grid grid-cols-2 gap-y-6 place-items-center"
  >
    <div class="rounded-full overflow-hidden w-[52px]">
      <img src="@/assets/images/landing_image.svg" alt="" class="w-[60px]" />
    </div>
    <div class="justify-center">
      <h3>{{ userName }}</h3>
      <a href="#" class="text-sm">Edit your profile</a>
    </div>
    <div>
      <a href="#">
        <img src="@/assets/icons/home_red.svg" alt="home" />
      </a>
    </div>
    <div>
      <h3>News feed</h3>
    </div>
    <div>
      <a href="#">
        <img src="@/assets/icons/movies_white.svg" alt="home" />
      </a>
    </div>
    <div>
      <h3>News feed</h3>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, onBeforeMount } from 'vue'
import { userStore } from '@/stores/user.js'
const user = userStore()

const userName = computed(() => user.data.name)
</script>
