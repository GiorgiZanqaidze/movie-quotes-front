<template>
  <div
    @click="modal.toggleModal('null', false)"
    v-if="modal.isVisible.condition"
    class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px]"
    style="background: rgba(0, 0, 0, 0.54); backdrop-filter: blur(3px)"
  ></div>
  <div
    class="text-white fixed sm:top-[150px] z-50 top-0 sm:w-[300px] w-[340px] sm:height-[200px] h-[658px] bg-darkBlack sm:bg-transparent sm:block"
    :class="showNavBar ? 'block' : 'hidden'"
  >
    <div class="grid grid-cols-2 gap-y-0 sm:gap-y-6 h-1/3 pt-4 w-2/3 sm:w-full">
      <div class="flex justify-center items-center">
        <img
          src="@/assets/images/landing_image.svg"
          alt=""
          class="sm:w-[52px] w-[40px] sm:h-[52px] h-[40px] rounded-full overflow-hidden"
        />
      </div>
      <div class="flex justify-center items-start flex-col">
        <h3 v-if="user.name" class="text-[20px]">{{ user.name }}</h3>
        <a href="#" class="sm:text-sm text-[14px]">Edit your profile</a>
      </div>
      <div class="flex justify-center items-start">
        <a href="#">
          <img src="@/assets/icons/home_red.svg" alt="home" class="w-[24px] sm:w-auto" />
        </a>
      </div>
      <div>
        <h3>News feed</h3>
      </div>
      <div class="flex justify-center items-start">
        <a href="#">
          <img src="@/assets/icons/movies_white.svg" alt="movies" class="w-[24px] sm:w-auto" />
        </a>
      </div>
      <div>
        <h3>News feed</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { userStore } from '@/stores/user.js'
import { useModalStore } from '@/stores/modal.js'

const userData = userStore()

const modal = useModalStore()

const user = computed(() => userData.data)

const showNavBar = computed(() => modal.isVisible.name === 'userNavigation')
</script>
