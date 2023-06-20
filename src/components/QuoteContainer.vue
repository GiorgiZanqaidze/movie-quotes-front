<template>
  <div class="bg-darkBlack rounded-md">
    <div class="flex sm:justify-start items-center p-5 sm:flex-row flex-col relative gap-3">
      <div class="sm:w-56 w-full px-3">
        <img :src="`${imagePath}${quote?.image}`" alt="quote" />
      </div>
      <div class="flex items-center">
        <h1>"{{ quote?.name?.[this.$i18n.locale] }}"</h1>
      </div>
      <div class="absolute bottom-[-50px] right-10 sm:top-0 sm:right-4">
        <button
          class="mt-2 mr-2 cursor-pointer"
          @click="showContainer"
          ref="threeDots"
          name="dotsButton"
        >
          <img src="@/assets/icons/three_dots.svg" alt="dots" class="min-w-6" name="dots" />
        </button>
        <div
          class="flex flex-col gap-3 bg-gray pl-3 pr-10 absolute right-5 bottom-5 sm:-right-28 sm:bottom-16 w-32 py-4 rounded-md justify-start"
          v-if="showDiv"
          name="divContainer"
          ref="container"
        >
          <button @click="showViewQuoteModal" class="flex justify-start">
            <img src="@/assets/icons/visible.svg" alt="visible" class="inline-block mr-1" />
            <span class="text-xs">View Quote</span>
          </button>
          <button class="flex justify-start" @click="editQuoteModal">
            <img src="@/assets/icons/pencil.svg" alt="edit" class="inline-block mr-1" />
            <span class="text-xs">Edit</span>
          </button>

          <DeleteButton :quote_id="props?.quote?.id" @click="deleteQuote">delete</DeleteButton>
        </div>
      </div>
    </div>
    <div class="flex border-t mx-5 py-5 gap-3">
      <div class="flex gap-3">
        <p>{{ props?.quote?.comments?.length }}</p>
        <span><img src="@/assets/icons/comment.svg" alt="comment" /></span>
      </div>
      <div class="flex gap-3">
        <p>{{ props?.quote?.likes?.length }}</p>
        <button><img src="@/assets/icons/likes.svg" alt="likes" /></button>
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

const modal = useModalStore()

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
