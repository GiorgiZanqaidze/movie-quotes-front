<template>
  <div
    :class="{
      'flex sm:flex-row flex-row gap-2 p-0 bg-darkBlack': quoteModal,
      'flex gap-6 sm:flex-row flex-col p-8 pb-4 sm:p-0': !quoteModal
    }"
  >
    <div
      :class="{
        'sm:min-w-[10rem]': quoteModal,
        'sm:min-w-[45rem] rounded-xl overflow-hidden flex justify-center items-center': !quoteModal
      }"
    >
      <div
        :class="{
          'sm:w-[10rem] w-full': quoteModal,
          'w-full': !quoteModal
        }"
      >
        <img
          :src="`${imagePath}${movie?.data?.image}`"
          alt="movie"
          class="rounded-md"
          :class="{
            'sm:w-full w-[5rem]': quoteModal,
            'sm:w-full w-[30rem] sm:max-h-[25rem] max-h-[10rem] rounded-md sm:min-h-[20rem] min-h-[8rem]':
              !quoteModal
          }"
        />
      </div>
    </div>
    <div
      class="flex flex-col gap-1 text-xs sm:text-base"
      :class="{ 'w-[10rem] sm:w-[20rem]': quoteModal }"
    >
      <div
        class="flex justify-between sm:w-[25rem] sm:mb-2 text-lightGrey"
        :class="{ 'mb-2': !quoteModal }"
      >
        <h1 class="sm:text-lg text-base">
          {{ movie.data?.title?.[$i18n.locale] }} ({{ movie.data.year }})
        </h1>
        <div
          v-if="!quoteModal"
          class="flex gap-3 items-center bg-darkGray py-1 sm:py-2 px-3 sm:px-4 rounded-md"
        >
          <div>
            <delete-button class="w-3" :movie_id="movie.data.id"></delete-button>
          </div>
          <div class="w-[1px] h-4 bg-mediumGray"></div>
          <button class="flex justify-start" @click="modal.toggleModal('editMovieModal', true)">
            <icon-pencil alt="edit" class="inline-block mr-1"></icon-pencil>
          </button>
        </div>
      </div>
      <div class="flex flex-wrap gap-1 sm:gap-3">
        <span
          class="bg-mediumGray py-1 px-2 rounded"
          :class="{ ' py-[2px] px-[0.5rem]': quoteModal }"
          v-for="(genre, index) in movie?.data?.genres"
          :key="index"
          >{{ genre.name?.[$i18n.locale] }}</span
        >
      </div>
      <div>
        <h3>
          {{ $t('landing.movie_description.directore') }}:
          {{ movie.data?.director?.[$i18n.locale] }}
        </h3>
      </div>
      <div>
        <p v-if="!quoteModal">
          {{ movie.data?.description?.[$i18n.locale] }}
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
import IconPencil from '@/components/icons/IconPencil.vue'
const movie = useSingleMovieStore()

const modal = useModalStore()

const quoteModal = computed(() => modal.isVisible.name === 'addQuoteModal')
</script>
