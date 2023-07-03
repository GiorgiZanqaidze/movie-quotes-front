<template>
  <div class="text-white bg-mediumDark min-h-screen pb-10">
    <div class="sm:ml-[400px]">
      <div class="py-6 text-2xl hidden sm:block">
        <h1>{{ $t('landing.movie_description.title') }}</h1>
      </div>
      <MovieContainer />
      <div
        class="flex gap-3 my-2 sm:items-center px-8 sm:py-3 sm:px-0 text-sm flex-col-reverse sm:flex-row items-start"
      >
        <h2 class="text-xl">
          {{ $t('landing.movie_description.quotes') }}
          <span class="text-sm"
            >( {{ $t('landing.movie_description.total') }} {{ movie?.data?.quotes?.length }})</span
          >
        </h2>
        <div class="bg-mediumGray sm:w-[1px] sm:h-6 w-full h-[1px]"></div>
        <button
          @click="addQuoteModal"
          class="bg-darkRed rounded py-1 px-2 flex items-center gap-2 text-sm"
        >
          <img src="@/assets/icons/add_movie.svg" alt="add_movie" class="inline-block" />
          <span> {{ $t('landing.movie_description.add_quote') }}</span>
        </button>
      </div>
      <div class="sm:w-[800px] mt-10 flex flex-col gap-6">
        <QuoteContainer v-for="(quote, index) in movie.data?.quotes" :key="index" :quote="quote" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSingleMovieStore } from '@/stores/singleMovie.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import QuoteContainer from '@/components/QuoteContainer.vue'
import { useModalStore } from '@/stores/modal'
import MovieContainer from '@/components/MovieContainer.vue'
const modal = useModalStore()

const movie = useSingleMovieStore()

onMounted(async () => {
  const route = await useRoute()
  const id = route.params.id
  await movie.getMovie(id)
})

function addQuoteModal() {
  modal.toggleModal('addQuoteModal', true)
}
</script>
