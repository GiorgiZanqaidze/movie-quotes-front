<template>
  <div class="text-white bg-mediumDark min-h-screen pb-10">
    <div class="sm:ml-[400px]">
      <div class="py-6 text-2xl hidden sm:block">
        <h1>Movie discription</h1>
      </div>
      <div class="flex gap-6 sm:flex-row flex-col p-8 sm:p-0">
        <div class="sm:min-w-[800px] rounded-md overflow-hidden flex justify-center">
          <img
            :src="`${imagePath}${movie.data.image}`"
            alt="movie"
            class="sm:w-full w-[30rem] rounded-md"
          />
        </div>
        <div class="flex flex-col gap-5">
          <div>
            <h1>{{ movie.data.title }} ({{ movie.data.year }})</h1>
          </div>
          <div class="flex gap-3">
            <span class="bg-mediumGray py-1 px-2 rounded">ROMANCE</span>
            <span class="bg-mediumGray py-1 px-2 rounded">COMEDY</span>
          </div>
          <div>
            <h3>directore: {{ movie.data.director }}</h3>
          </div>
          <div>
            <p>
              {{ movie.data.description }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex gap-3 my-2 sm:items-center px-8 sm:py-3 sm:px-0 text-sm flex-col-reverse sm:flex-row items-start"
      >
        <h2 class="text-xl">Quotes <span class="text-sm">(Total 7)</span></h2>
        <div class="bg-mediumGray sm:w-[1px] sm:h-6 w-full h-[1px]"></div>
        <button
          @click="modal.toggleModal('addQuoteModal', true)"
          class="bg-darkRed rounded py-1 px-2 flex items-center gap-2 text-sm"
        >
          <img src="@/assets/icons/add_movie.svg" alt="add_movie" class="inline-block" />
          <span>Add Quote</span>
        </button>
      </div>
      <div class="sm:w-[800px] mt-10 flex flex-col gap-6">
        <QuoteContainer v-for="(quote, index) in movie.data.quotes" :key="index" :quote="quote" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSingleMovieStore } from '@/stores/singleMovie.js'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import imagePath from '@/config/images/path.js'
import QuoteContainer from '@/components/QuoteContainer.vue'
import { useModalStore } from '@/stores/modal'

const modal = useModalStore()

const route = useRoute()

const movie = useSingleMovieStore()

onMounted(async () => {
  await movie.getMovie(route.params.id)
})
</script>
