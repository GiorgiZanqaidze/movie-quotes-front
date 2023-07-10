<template>
  <div
    class="absolute top-1/2 left-1/2 bg-darkBlack sm:w-[50rem] translate-x-[-50%] translate-y-[-50%] pb-5 rounded-md w-full text-white"
    :class="{ 'top-[20rem] sm:top-1/2': addQuoteModal }"
  >
    <header class="p-5 relative border-b-2 border-darkGray">
      <h3 class="text-center">{{ $t('news_feed.write_quote.title') }}</h3>
      <button
        class="absolute top-1/2 right-4 translate-y-[-50%]"
        @click="modal.toggleModal('writeQuote', false)"
      >
        <icon-close alt="close"></icon-close>
      </button>
    </header>
    <div class="mt-4 mb-6 px-6">
      <div class="flex items-center gap-3">
        <profile-icon :authUser="true"></profile-icon>
        <h1 class="text-sm sm:text-md">{{ user.data.name }}</h1>
      </div>
    </div>
    <Form @submit="handleSubmit" class="mt-4 flex flex-col gap-4 pb-2 px-6" v-slot="{ errors }">
      <slot></slot>
      <TheTextarea
        name="quote_en"
        rules="required|englishWords"
        :errors="errors.quote_en"
        v-model="state.quote_en"
        @update:modelValue="(newValue) => (state.quote_en = newValue)"
        placeholder="Start create new quote"
        language="en"
      />
      <TheTextarea
        name="quote_ka"
        rules="required|georgianWords"
        :errors="errors.quote_ka"
        v-model="state.quote_ka"
        @update:modelValue="(newValue) => (state.quote_ka = newValue)"
        placeholder="ახალი ციტატა"
        language="ka"
      />

      <div
        class="sm:w-full bg-transparent border rounded h-[4rem] relative"
        :class="{
          'border-darkRed': errors.image,
          'border-green-500': state.uploadedImage && !errors.image,
          'border-mediumGray': !state.uploadedImage && !errors.image
        }"
      >
        <div
          class="sm:w-full cursor-pointer h-full flex justify-start gap-2 sm:gap-5 ml-5 items-center"
          @dragover="dragOver"
          @drop="drop"
        >
          <div>
            <icon-drag-and-drop alt="camera"></icon-drag-and-drop>
          </div>
          <h3 class="hidden sm:inline">
            {{ $t('news_feed.write_quote.drag_and_drop') }}
          </h3>
          <p class="inline sm:hidden text-xs">{{ $t('landing.my_movies.upload_image') }}</p>
          <Field
            :rules="state.imageValidator"
            id="file"
            type="file"
            name="image"
            accept="image/*"
            @change="uploadImageFile"
            class="hidden"
          />

          <label
            for="file"
            class="bg-mediumRed py-1 px-2 cursor-pointer text-[11px] sm:text-base rounded"
            >{{ $t('news_feed.write_quote.choose_file') }}</label
          >
        </div>
        <ErrorMessage
          name="image"
          class="text-darkRed text-[14px] sm:text-sm absolute sm:bottom-[-15px] left-2"
        />
      </div>
      <MoviesDropdown
        v-if="!props?.movie_id"
        name="movie"
        :errors="errors.movie"
        v-model="state.movie"
        :movies="movies.allMovieData"
        @update:modelValue="(newValue) => (state.movie = newValue)"
      />
      <button class="w-full bg-darkRed h-[2rem] sm:h-[2.5rem] text-sm rounded-md sm:text-xl mt-4">
        {{ $t('news_feed.write_quote.post') }}
      </button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { reactive, computed, defineAsyncComponent, onMounted, defineProps } from 'vue'
import { useModalStore } from '@/stores/modal'
import { userStore } from '@/stores/user.js'
import { useQuoteStore } from '@/stores/quote.js'
import { useMovieStore } from '@/stores/movie.js'
import { useSingleMovieStore } from '@/stores/singleMovie'
import IconClose from '@/components/icons/IconClose.vue'
import IconDragAndDrop from '@/components/icons/IconDragAndDrop.vue'
import postQuote from '@/services/postQuote.js'
const TheTextarea = defineAsyncComponent(() => import('@/components/TheTextarea.vue'))
const MoviesDropdown = defineAsyncComponent(() => import('@/components/MoviesDropdown.vue'))

const props = defineProps({
  movie_id: {
    required: false
  }
})

const modal = useModalStore()

const movies = useMovieStore()

const user = userStore()

const quotes = useQuoteStore()

const singleMovie = useSingleMovieStore()

onMounted(async () => {
  await movies.getAll()
})

const state = reactive({
  uploadedImage: null,
  modal: true,
  quote_en: '',
  quote_ka: '',
  movie: props.movie_id ?? null,
  imageValidator: 'required'
})

const dragOver = (event) => {
  event.preventDefault()
}

const drop = (event) => {
  event.preventDefault()
  const files = event.dataTransfer.files
  if (files.length > 0) {
    state.uploadedImage = files[0]
    state.imageValidator = ''
  }
}

const uploadImageFile = (file) => {
  if (file && file.target.files[0].type.startsWith('image/')) {
    state.uploadedImage = file.target.files[0]
  }
}

const handleSubmit = async () => {
  const data = {
    name_ka: state.quote_ka,
    name_en: state.quote_en,
    image: state.uploadedImage,
    movie_id: state.movie,
    user_id: user.data.id
  }

  let formData = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })

  try {
    const response = await postQuote(formData)
    modal.toggleModal('null', false)
    quotes.addQuote(response.data)
    singleMovie.addMovieQuote(response.data)
  } catch (error) {
    console.log(error)
  }
}

const addQuoteModal = computed(() => modal.isVisible.name === 'addQuoteModal')
</script>
