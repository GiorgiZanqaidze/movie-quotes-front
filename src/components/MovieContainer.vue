<template>
  <div
    :class="{
      'flex sm:flex-row flex-row gap-2 p-0 bg-darkBlack': quoteModal,
      'flex gap-6 sm:flex-row flex-col p-8 sm:p-0': !quoteModal
    }"
  >
    <div
      class="sm:min-w-[800px] rounded-md overflow-hidden flex justify-center items-center"
      :class="{ 'sm:min-w-[200px]': quoteModal }"
    >
      <div>
        <img
          :src="`${imagePath}${movie.data?.image}`"
          alt="movie"
          class="sm:w-full w-[30rem] rounded-md"
          :class="{ 'sm:w-[10rem] w-[5rem] min-w-[5rem]': quoteModal }"
        />
      </div>
    </div>
    <div
      class="flex flex-col gap-1 text-xs sm:text-base"
      :class="{ 'w-[10rem] sm:w-[20rem]': quoteModal }"
    >
      <div>
        <h1>{{ movie.data?.title?.[this.$i18n.locale] }} ({{ movie.data.year }})</h1>
      </div>
      <div class="flex gap-3">
        <span
          class="bg-mediumGray py-1 px-2 rounded"
          :class="{ ' py-[2px] px-[0.5rem]': quoteModal }"
          >ROMANCE</span
        >
      </div>
      <div>
        <h3>directore: {{ movie.data?.director?.[this.$i18n.locale] }}</h3>
      </div>
      <div>
        <p v-if="!quoteModal">
          {{ movie.data?.description?.[this.$i18n.locale] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import imagePath from '@/config/images/path.js'
import { useModalStore } from '@/stores/modal'
import { useSingleMovieStore } from '@/stores/singleMovie'

const movie = useSingleMovieStore()

const modal = useModalStore()

const quoteModal = computed(() => modal.isVisible.name === 'addQuoteModal')
</script>
