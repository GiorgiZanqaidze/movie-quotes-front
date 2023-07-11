<template>
  <button class="flex justify-start items-center" @click="deleteItem">
    <div>
      <icon-trash alt="delete" class="inline-block mr-1 min-w-[0.5rem]"></icon-trash>
    </div>
    <span class="text-sm text-white">
      <slot> </slot>
    </span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useSingleMovieStore } from '@/stores/singleMovie'
import deleteMovie from '@/services/deleteMovie'
import { useRouter } from 'vue-router'
import IconTrash from '@/components/icons/IconTrash.vue'
const router = useRouter()
const props = defineProps({
  quote_id: {
    type: Number
  },
  movie_id: {
    type: Number
  }
})

const movie = useSingleMovieStore()

async function deleteItem() {
  if (props.quote_id) {
    await movie.deleteMovieQuote(props.quote_id)
  }

  if (props.movie_id) {
    const response = await deleteMovie(props.movie_id)

    if (response.status === 200) {
      router.push({ name: 'moviesList' })
    }
  }
}
</script>
