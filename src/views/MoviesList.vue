<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <div class="ml-[400px] max-w-[1200px]">
      <div class="h-20 flex justify-between items-center mb-4">
        <h1>My list of movies (Total {{ movies.data.length }})</h1>
        <div class="flex gap-5">
          <input type="text" name="movie_search" placeholder="search" class="bg-transparent" />
          <button class="py-1 px-2 rounded bg-red-600 flex justify-center items-center gap-2">
            <img src="@/assets/icons/add_movie.svg" alt="add_movie" class="inline-block" />
            <span>Add movie</span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 place-items-center">
        <div
          class="w-[400px] h-[370px] flex flex-col gap-2 rounded-md overflow-hidden cursor-pointer"
          v-for="(movie, index) in movies.data"
          :key="index"
          @click="handleRoute(movie.id)"
        >
          <div>
            <img :src="`${imagePath}${movie.image}`" alt="movie" class="w-full max-h-[250px]" />
          </div>
          <h3>{{ movie.title[this.$i18n.locale] }} ({{ movie.year }})</h3>
          <p>
            {{ movies.data.length }}
            <img src="@/assets/icons/quotes.svg" alt="quotes" class="inline-block ml-2 w-[32px]" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useMovieStore } from '@/stores/movie'
import { useRouter } from 'vue-router'
import imagePath from '@/config/images/path'

const movies = useMovieStore()

const router = useRouter()

onMounted(async () => {
  await movies.getMovies()
})

function handleRoute(id) {
  router.push(`movies-list/movie/${id}`)
}
</script>
