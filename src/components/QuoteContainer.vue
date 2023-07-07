<template>
  <div class="bg-darkBlack rounded-md">
    <div class="flex sm:justify-start items-center p-5 sm:flex-row flex-col relative gap-3">
      <div class="sm:w-56 w-full px-3">
        <img :src="`${imagePath}${quote?.image}`" alt="quote" class="w-full" />
      </div>
      <div class="flex items-center">
        <h1 class="break-all">"{{ quote?.name?.[$i18n.locale] }}"</h1>
      </div>
      <div class="absolute bottom-[-50px] right-10 sm:top-0 sm:right-4">
        <button
          class="mt-2 mr-2 cursor-pointer"
          @click="showContainer"
          ref="threeDots"
          name="dotsButton"
        >
          <icon-three-dots alt="dots" class="min-w-6" name="dots"></icon-three-dots>
        </button>
        <div
          class="flex flex-col gap-3 bg-gray pl-3 pr-10 absolute right-5 top-[-5rem] sm:-right-28 sm:top-5 w-32 py-4 rounded-md justify-start"
          v-if="showDiv"
          name="divContainer"
          ref="container"
        >
          <button @click="showViewQuoteModal" class="flex justify-start">
            <icon-visible alt="visible" class="inline-block mr-1"></icon-visible>
            <span class="text-[13px]">{{ $t('landing.movie_description.view') }}</span>
          </button>
          <button
            class="flex justify-start"
            @click="editQuoteModal"
            v-if="authUser.data.id === props.quote.author.id"
          >
            <icon-pencil alt="edit" class="inline-block mr-1"></icon-pencil>
            <span class="text-xs">{{ $t('landing.movie_description.edit') }}</span>
          </button>

          <delete-button
            v-if="authUser.data.id === props.quote.author.id"
            :quote_id="props?.quote?.id"
            @click="deleteQuote"
            >{{ $t('landing.movie_description.delete') }}</delete-button
          >
        </div>
      </div>
    </div>
    <div class="flex border-t mx-5 py-5 gap-3">
      <div class="flex gap-3">
        <p>{{ props?.quote?.comments?.length }}</p>
        <span> <icon-comment alt="comment"></icon-comment></span>
      </div>
      <div class="flex gap-3">
        <p>{{ props?.quote?.likes?.length }}</p>
        <button><icon-like alt="likes"></icon-like></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import { useSingleMovieStore } from '@/stores/singleMovie'
import imagePath from '@/config/images/path'
import DeleteButton from '@/components/DeleteButton.vue'
import IconThreeDots from '@/components/icons/IconThreeDots.vue'
import IconPencil from '@/components/icons/IconPencil.vue'
import IconComment from '@/components/icons/IconComment.vue'
import IconLike from '@/components/icons/IconLike.vue'
import IconVisible from '@/components/icons/IconVisible.vue'
import { userStore } from '@/stores/user'

const modal = useModalStore()

const authUser = userStore()

const props = defineProps({
  quote: {
    type: Object,
    required: true
  }
})

const showDiv = ref(false)

function showContainer() {
  showDiv.value = !showDiv.value
}

const movieStore = useSingleMovieStore()

function showViewQuoteModal() {
  movieStore.rememberQuoteId(props.quote.id)
  modal.toggleModal('viewQuoteModal', true)
  showDiv.value = false
}

function deleteQuote() {
  showDiv.value = false
}

function editQuoteModal() {
  movieStore.rememberQuoteId(props.quote.id)
  modal.toggleModal('editQuoteModal', true)
  showDiv.value = false
}
</script>
