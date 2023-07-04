<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <div class="flex flex-col sm:items-center gap-4 pb-10">
      <QuotesHeader />
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
import QuotesHeader from '@/components/QuotesHeader.vue'

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
