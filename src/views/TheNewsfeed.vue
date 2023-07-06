<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <div class="flex flex-col sm:items-center gap-4 pb-10">
      <div class="sm:text-center w-[18rem] sm:w-[49rem] sm:mt-4 sm:mb-6 h-[52px] flex mt-4 ml-3">
        <div class="w-4/5 h-full">
          <button
            class="sm:bg-gray bg-transparent h-full w-full text-left pl-3 rounded-[10px] text-sm sm:text-md"
            @click="modal.toggleModal('writeQuote', true)"
          >
            <icon-write-quote alt="write_quote" class="inline-block mr-2"></icon-write-quote>
            {{ $t('news_feed.write_quote.title') }}
          </button>
        </div>
        <SearchBar />
      </div>
      <div class="flex flex-col items-center gap-4 w-full">
        <li v-for="(quote, index) in quotes.data" :key="index" class="list-none">
          <newsfeed-movie :quote="quote"></newsfeed-movie>
        </li>
      </div>
    </div>
  </div>
</template>

<script setup>
import axiosInstance from '@/config/axios/index'
import { useQuoteStore } from '@/stores/quote.js'
import { useQuerySearchStore } from '@/stores/querySearch.js'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useModalStore } from '@/stores/modal'
import SearchBar from '@/components/SearchBar.vue'
import IconWriteQuote from '@/icons/IconWriteQuote.vue'

const modal = useModalStore()

const quotes = useQuoteStore()

const query = useQuerySearchStore()

const perPage = ref(2)

onMounted(async () => {
  await getQuotes()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(
  () => query.searchQuery,
  async () => {
    await getQuotes()
  }
)

async function getQuotes() {
  try {
    const response = await axiosInstance.get('api/quotes', {
      params: {
        page: 1,
        per_page: perPage.value,
        query: query.searchQuery,
        searchType: query.type
      }
    })
    quotes.setQuotes(response.data)
  } catch (error) {
    console.log(error)
    return error
  }
}
async function handleScroll() {
  const scrollHeight = document.documentElement.scrollHeight
  const scrollTop = document.documentElement.scrollTop
  const clientHeight = document.documentElement.clientHeight

  if (scrollTop + clientHeight >= scrollHeight) {
    perPage.value += 5
    await getQuotes()
  }
}
</script>
