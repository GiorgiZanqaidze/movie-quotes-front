<template>
  <button class="flex justify-start" @click="deleteQuoteById">
    <img src="@/assets/icons/trash.svg" alt="delete" class="inline-block mr-1" />
    <span class="text-xs text-white">
      <slot> </slot>
    </span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useSingleMovieStore } from '@/stores/singleMovie'
const props = defineProps({
  quote_id: {
    type: Number
  }
})

const movie = useSingleMovieStore()

async function deleteQuoteById() {
  await movie.deleteMovieQuote(props.quote_id)
}
</script>
