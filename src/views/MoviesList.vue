<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <div class="sm:ml-[400px] max-w-[1200px]">
      <div
        class="h-20 flex sm:justify-between justify-between items-center mb-4 gap-10 sm:w-auto w-[300px] mx-auto"
      >
        <h1>
          {{ $t('landing.my_movies.my_list') }}
          <span class="block sm:inline text-xs sm:text-md"
            >({{ $t('landing.my_movies.total') }} {{ movies.data?.length }})</span
          >
        </h1>
        <div class="flex gap-10 justify-between">
          <form
            class="h-full relative text-lightDark border-box hidden sm:block transition-all"
            @submit.prevent="handleSubmit"
          >
            <input
              type="text"
              name="search_movie"
              class="h-full pl-10 w-full rounded-[10px] bg-transparent text-lightDark focus:outline-none"
              :placeholder="$t('landing.my_movies.search')"
              v-model="state.searchValue"
            />
            <img
              src="@/assets/icons/search.svg"
              alt="search"
              class="absolute top-1/2 left-3 translate-y-[-50%]"
            />
          </form>
          <button
            class="py-1 px-2 rounded bg-red-600 flex justify-center items-center gap-0 sm:gap-2 text-[0.8rem] sm:text-md"
            @click="modal.toggleModal('addMovieModal', true)"
          >
            <img src="@/assets/icons/add_movie.svg" alt="add_movie" class="inline-block" />
            <span>{{ $t('landing.my_movies.add_movie') }}</span>
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
          <h3>{{ movie?.title?.[this.$i18n.locale] }} ({{ movie.year }})</h3>
          <p>
            {{ movie?.quotes?.length || 0 }}
            <img src="@/assets/icons/quotes.svg" alt="quotes" class="inline-block ml-2 w-[32px]" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useMovieStore } from '@/stores/movie'
import { useRouter, useRoute } from 'vue-router'
import imagePath from '@/config/images/path'
import { useModalStore } from '@/stores/modal'
import axiosInstance from '@/config/axios/index'
const modal = useModalStore()

const movies = useMovieStore()

const router = useRouter()

const route = useRoute()

const state = reactive({
  searchValue: null
})

const query = route.query.query
const handleSubmit = async () => {
  router.push({ path: '/movies-list', query: { query: state.searchValue } })
  await movies.getMovies(state.searchValue)
}

onMounted(async () => {
  state.searchValue = query
  await movies.getMovies(query)
})

function handleRoute(id) {
  router.push(`movies-list/movie/${id}`)
}
</script>
