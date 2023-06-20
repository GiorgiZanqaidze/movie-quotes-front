<template>
  <div class="flex flex-col sm:items-center gap-4 pb-10">
    <QuotesHeader />
    <div class="flex flex-col items-center gap-4 w-full">
      <li v-for="(quote, index) in quotes.data" :key="index" class="list-none">
        <newsfeed-movie :quote="quote"></newsfeed-movie>
      </li>
    </div>
  </div>
</template>

<script setup>
import QuotesHeader from '@/components/QuotesHeader.vue'
import { useQuoteStore } from '@/stores/quote.js'

const quotes = useQuoteStore()
</script>
