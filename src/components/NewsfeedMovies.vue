<template>
  <div class="flex flex-col sm:items-center gap-4 pb-10">
    <QuotesSearchBar />
    <div class="flex flex-col items-center gap-4 w-full">
      <newsfeed-movie></newsfeed-movie>
      <newsfeed-movie></newsfeed-movie>
    </div>
  </div>
</template>

<script setup>
import QuotesSearchBar from '@/components/QuotesSearchBar.vue'
</script>
