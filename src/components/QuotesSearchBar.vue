<template>
  <div class="sm:text-center w-[300px] sm:w-[930px] sm:mt-4 sm:mb-6 h-[52px] flex mt-4 ml-3">
    <div class="w-4/5 h-full">
      <button
        class="sm:bg-gray bg-transparent h-full w-full text-left pl-3 rounded-[10px]"
        @click="modal.toggleModal('writeQuote', true)"
      >
        <img src="@/assets/icons/write_quote.svg" alt="write_quote" class="inline-block mr-2" />
        write new quote
      </button>
    </div>
    <div class="w-1/5 h-full relative text-lightDark border-box hidden sm:block">
      <input
        type="text"
        name="search_movie"
        class="h-full pl-10 w-full rounded-[10px] bg-transparent text-lightDark"
        placeholder="Search by"
      />
      <img
        src="@/assets/icons/search.svg"
        alt="search"
        class="absolute top-1/2 left-3 translate-y-[-50%]"
      />
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
const modal = useModalStore()
</script>
