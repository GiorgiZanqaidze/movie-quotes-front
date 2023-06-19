<template>
  <WriteQuote :movie_id="movie.data?.id">
    <MovieContainer />
  </WriteQuote>
</template>

<script setup>
import { useSingleMovieStore } from '@/stores/singleMovie'
import WriteQuote from '@/components/WriteQuote.vue'
import MovieContainer from '@/components/MovieContainer.vue'

const movie = useSingleMovieStore()
</script>
