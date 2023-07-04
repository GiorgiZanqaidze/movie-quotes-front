<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 bg-lightBlack">
    <div class="flex flex-col gap-10">
      <div class="flex justify-start items-center h-10 border-b-2 border-darkGray mt-3 gap-2">
        <button class="mx-3" @click="modal.toggleSearchModal">
          <img src="@/assets/icons/back_arrow.svg" alt="arrow" />
        </button>
        <form @submit.prevent="handleSubmit">
          <input
            type="text"
            name="search_movie"
            class="h-full pl-10 w-full rounded-[10px] bg-transparent text-lightDark focus:outline-none"
            placeholder="Search"
            v-model="searchValue"
          />
        </form>
      </div>
      <div class="mx-10">
        <p class="text-lightDark w-[250px] text-sm" v-if="newsFeed">
          {{ $t('news_feed.enter') }} @ {{ $t('news_feed.search_placeholder') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import { useQuerySearchStore } from '@/stores/querySearch'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMovieStore } from '@/stores/movie'
const modal = useModalStore()

const query = useQuerySearchStore()

const route = useRoute()

const searchValue = ref(route.query.query)

const router = useRouter()

const movies = useMovieStore()

const newsFeed = ref(route.name === 'newsFeed')

async function handleSubmit() {
  if (newsFeed.value) {
    console.log(searchValue)
    router.push({ path: '/news-feed', query: { query: searchValue.value } })
    await query.setSearchQuery(searchValue.value)
  } else {
    router.push({ path: '/movies-list', query: { query: searchValue.value } })
    await movies.getMovies(searchValue.value)
  }
}
</script>
