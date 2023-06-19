<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <div class="sm:ml-[400px] max-w-[1200px]">
      <div
        class="h-20 flex sm:justify-between justify-between items-center mb-4 gap-10 sm:w-auto w-[300px] mx-auto"
      >
        <h1>
          My list of movies
          <span class="block sm:inline text-xs sm:text-md">(Total {{ movies.data?.length }})</span>
        </h1>
        <div class="flex gap-5">
          <input
            type="text"
            name="movie_search"
            placeholder="search"
            class="bg-transparent sm:inline-block hidden"
          />
          <button
            class="py-1 px-2 rounded bg-red-600 flex justify-center items-center gap-0 sm:gap-2 text-[0.8rem] sm:text-md"
          >
            <img src="@/assets/icons/add_movie.svg" alt="add_movie" class="inline-block" />
            <span>Add movie</span>
          </button>
        </div>
      </div>
      <div class="grid sm:grid-cols-3 gap-4 place-items-center">
        <div
          class="sm:w-[400px] w-[300px] h-[370px] flex flex-col gap-2 rounded-md overflow-hidden cursor-pointer"
          v-for="(movie, index) in movies.data"
          :key="index"
          @click="handleRoute(movie.id)"
        >
          <div class="flex justify-center">
            <img
              :src="`${imagePath}${movie.image}`"
              alt="movie"
              class="sm:w-full sm:max-h-[250px] max-h-[200px] rounded-md"
            />
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
