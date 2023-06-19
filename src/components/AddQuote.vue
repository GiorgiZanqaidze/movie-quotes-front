<template>
  <div
    class="absolute sm:top-[4rem] top-0 left-1/2 bg-darkBlack sm:w-[50rem] w-full sm:min-h-[30rem] translate-x-[-50%] pb-5 rounded-md text-white"
  >
    <header class="flex justify-center relative p-3 border-b border-mediumGray items-center">
      <h1 class="text-xl">add quote</h1>
      <button class="absolute right-4 top" @click="modal.toggleModal('addQuoteModal', false)">
        <img src="@/assets/icons/close.svg" alt="close" />
      </button>
    </header>
    <div>
      <div>
        <profile-icon :path="`${imagePath}${authUser.data.image}`"></profile-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSingleMovieStore } from '@/stores/singleMovie'
import { useModalStore } from '@/stores/modal'
import { userStore } from '@/stores/user'
import imagePath from '@/config/images/path.js'
const modal = useModalStore()

const authUser = userStore()

const movie = useSingleMovieStore()
</script>
