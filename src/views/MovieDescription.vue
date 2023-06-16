<template>
  <div class="text-white bg-mediumDark min-h-screen pb-10">
    <div class="ml-[400px]">
      <div class="py-6 text-2xl">
        <h1>Movie discription</h1>
      </div>
      <div class="flex gap-6">
        <div class="min-w-[800px] rounded-md overflow-hidden">
          <img :src="`${imagePath}${movie.data.image}`" alt="movie" class="w-full" />
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
      <div class="flex gap-3 my-6 items-center">
        <h2>Quotes (Total 7)</h2>
        <div class="bg-mediumGray w-[1px] h-6"></div>
        <button class="bg-darkRed rounded py-1 px-2 flex items-center gap-2">
          <img src="@/assets/icons/add_movie.svg" alt="add_movie" class="inline-block" />
          <span>Add Quote</span>
        </button>
      </div>
      <div class="w-[800px] mt-10 flex flex-col gap-6">
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

const route = useRoute()

const movie = useSingleMovieStore()

onMounted(async () => {
  await movie.getMovie(route.params.id)
})
</script>
