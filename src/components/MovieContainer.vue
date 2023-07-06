<template>
  <div
    :class="{
      'flex sm:flex-row flex-row gap-2 p-0 bg-darkBlack': quoteModal,
      'flex gap-6 sm:flex-row flex-col p-8 pb-4 sm:p-0': !quoteModal
    }"
  >
    <div
      class=""
      :class="{
        'sm:min-w-[200px]': quoteModal,
        'sm:min-w-[800px] rounded-md overflow-hidden flex justify-center items-center': !quoteModal
      }"
    >
      <div class="w-full">
        <img
          :src="`${imagePath}${movie.data?.image}`"
          alt="movie"
          class="rounded-md"
          :class="{
            'sm:w-full w-[5rem]': quoteModal,
            'sm:w-full w-[30rem] rounded-md': !quoteModal
          }"
        />
      </div>
    </div>
    <div
      class="flex flex-col gap-1 text-xs sm:text-base"
      :class="{ 'w-[10rem] sm:w-[20rem]': quoteModal }"
    >
      <div class="flex justify-between sm:w-[25rem] sm:mb-2" :class="{ 'mb-2': !quoteModal }">
        <h1>{{ movie.data?.title?.[this.$i18n.locale] }} ({{ movie.data.year }})</h1>
        <div v-if="!quoteModal" class="flex gap-4 items-center bg-darkGray py-2 px-3 rounded-md">
          <div>
            <DeleteButton class="w-1" :movie_id="movie.data.id"></DeleteButton>
          </div>
          <div class="w-[1px] h-4 bg-mediumGray"></div>
          <button class="flex justify-start" @click="modal.toggleModal('editMovieModal', true)">
            <icon-pencil alt="edit" class="inline-block mr-1 min-w-1"></icon-pencil>
          </button>
        </div>
      </div>
      <div class="flex flex-wrap gap-1 sm:gap-3">
        <span
          class="bg-mediumGray py-1 px-2 rounded"
          :class="{ ' py-[2px] px-[0.5rem]': quoteModal }"
          v-for="(genre, index) in movie?.data?.genres"
          :key="index"
          >{{ genre.name?.[this.$i18n.locale] }}</span
        >
      </div>
      <div>
        <h3>
          {{ $t('landing.movie_description.directore') }}:
          {{ movie.data?.director?.[this.$i18n.locale] }}
        </h3>
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
import { computed } from 'vue'
import imagePath from '@/config/images/path.js'
import { useModalStore } from '@/stores/modal'
import { useSingleMovieStore } from '@/stores/singleMovie'
import DeleteButton from '@/components/DeleteButton.vue'
import IconPencil from '@/icons/IconPencil.vue'
const movie = useSingleMovieStore()

const modal = useModalStore()

const quoteModal = computed(() => modal.isVisible.name === 'addQuoteModal')
</script>
