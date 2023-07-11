<template>
  <div class="text-white bg-mediumDark min-h-screen flex justify-end sm:pr-10">
    <div class="w-[70rem] sm:w-3/4">
      <div
        class="h-20 flex sm:justify-between justify-between items-center mb-0 sm:mb-4 gap-0 sm:gap-10 sm:w-auto w-[18rem] mx-auto"
      >
        <h1 class="text-md sm:text-xl">
          {{ $t('landing.my_movies.my_list') }}
          <span class="block sm:inline text-xs sm:text-base"
            >({{ $t('landing.my_movies.total') }} {{ movies.filteredMovies.length }})</span
          >
        </h1>
        <div class="flex gap-0 justify-between items-center">
          <form
            class="h-full relative text-lightDark border-box hidden sm:block transition-all"
            @submit.prevent="handleSubmit"
            :class="state.class"
          >
            <input
              @focus="openInput"
              @blur="closeInput"
              type="text"
              name="search_movie"
              class="h-full pl-10 w-full rounded-md bg-transparent text-lightDark focus:outline-none text-sm sm:text-base"
              :placeholder="$t('landing.my_movies.search')"
              v-model="state.searchValue"
            />
            <icon-search
              alt="search"
              class="absolute top-1/2 left-3 translate-y-[-50%]"
            ></icon-search>
          </form>
          <button
            class="py-2 px-3 rounded bg-darkRed flex justify-center items-center gap-1 sm:gap-2 text-xs sm:text-base"
            @click="modal.toggleModal('addMovieModal', true)"
          >
            <icon-add-movie alt="add_movie" class="inline-block"></icon-add-movie>
            <span>{{ $t('landing.my_movies.add_movie') }}</span>
          </button>
        </div>
      </div>
      <div class="grid sm:grid-cols-3 gap-4 place-items-center">
        <div
          class="sm:w-full w-[18rem] sm:h-[22rem] flex flex-col gap-2 rounded-md overflow-hidden cursor-pointer"
          v-for="(movie, index) in movies.filteredMovies"
          :key="index"
          @click="handleRoute(movie.id)"
        >
          <div
            class="flex justify-center w-full sm:max-h-[22rem] max-h-[12rem] rounded-md overflow-hidden"
          >
            <img :src="`${imagePath}${movie.image}`" alt="movie" class="w-full h-full" />
          </div>
          <h3 class="text-md sm:text-md">{{ movie?.title?.[$i18n.locale] }} ({{ movie.year }})</h3>
          <p class="text-sm sm:text-md">
            {{ movie?.quotes?.length || 0 }}
            <icon-quote alt="quotes" class="inline-block ml-2 w-5 sm:w-[2rem]"></icon-quote>
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
import IconAddMovie from '@/components/icons/IconAddMovie.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconQuote from '@/components/icons/IconQuote.vue'

const modal = useModalStore()

const movies = useMovieStore()

const router = useRouter()

const route = useRoute()

const state = reactive({
  searchValue: null,
  class: 'w-28',
  filteredMovies: movies.data
})

const query = route.query.query
const handleSubmit = async () => {
  router.push({ path: '/movies-list', query: { query: state.searchValue } })
  movies.filterMovies(state.searchValue)
}

onMounted(async () => {
  state.searchValue = query || ''
  await movies.getMovies()
  movies.filterMovies(state.searchValue)
})

function handleRoute(id) {
  router.push(`movies-list/movie/${id}`)
}

const openInput = () => {
  state.class = 'w-[30rem]'
}

const closeInput = () => {
  if (!state.searchValue) {
    state.class = 'w-28'
  }
}
</script>
