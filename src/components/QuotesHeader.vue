<template>
  <div class="sm:text-center w-[300px] sm:w-[970px] sm:mt-4 sm:mb-6 h-[52px] flex mt-4 ml-3">
    <div class="w-4/5 h-full">
      <button
        class="sm:bg-gray bg-transparent h-full w-full text-left pl-3 rounded-[10px]"
        @click="modal.toggleModal('writeQuote', true)"
      >
        <img src="@/assets/icons/write_quote.svg" alt="write_quote" class="inline-block mr-2" />
        write new quote
      </button>
    </div>
    <SearchBar />
  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'

import { useModalStore } from '@/stores/modal'
const modal = useModalStore()
</script>
