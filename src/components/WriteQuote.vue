<template>
  <div
    class="fixed top-1/2 left-1/2 bg-darkBlack sm:w-[961px] translate-x-[-50%] translate-y-[-50%] pb-5 rounded-md w-full text-white"
  >
    <header class="p-5 relative border-b-2 border-darkGray">
      <h3 class="text-center">{{ $t('news_feed.write_quote.title') }}</h3>
      <button
        class="absolute top-1/2 right-4 translate-y-[-50%]"
        @click="modal.toggleModal('writeQuote', false)"
      >
        <img src="@/assets/icons/close.svg" alt="close" />
      </button>
    </header>
    <div class="mt-4 mb-6 px-6">
      <div class="flex items-center gap-3">
        <profile-icon :path="user.authUserIcon"></profile-icon>
        <h1 class="text-[20px]">{{ user.data.name }}</h1>
      </div>
    </div>
    <Form
      @submit="handleSubmit"
      class="mt-4 flex flex-col gap-4 pb-2 px-6"
      v-slot="{ errors, meta }"
    >
      <TheTextarea
        name="quote_en"
        :errors="errors.quote_en"
        v-model="state.quote_en"
        @update:modelValue="(newValue) => (state.quote_en = newValue)"
        placeholder="Start create new quote"
      />
      <TheTextarea
        name="quote_ka"
        :errors="errors.quote_ka"
        v-model="state.quote_ka"
        @update:modelValue="(newValue) => (state.quote_ka = newValue)"
        placeholder="ახალი ციტატა"
      />

      <div
        class="sm:w-full bg-transparent border rounded h-[86px]"
        :class="{
          'border-darkRed': errors.image,
          'border-green-500': state.uploadedImage && !errors.image,
          'border-mediumGray': !state.uploadedImage && !errors.image
        }"
      >
        <div
          class="sm:w-full cursor-pointer h-full flex justify-start gap-5 ml-5 items-center"
          @dragover="dragOver"
          @drop="drop"
        >
          <div>
            <img src="@/assets/icons/drag_and_drop.svg" alt="camera" />
          </div>
          <h3 class="hidden sm:inline">
            {{ $t('news_feed.write_quote.drag_and_drop') }}
          </h3>
          <p class="inline sm:hidden text-[16px]">upload Image</p>
          <Field
            :rules="state.imageValidator"
            id="file"
            type="file"
            name="image"
            accept="image/*"
            @change="uploadImageFile"
            class="hidden"
          />

          <label for="file" class="bg-mediumRed py-1 px-2 cursor-pointer text-[20px]">{{
            $t('news_feed.write_quote.choose_file')
          }}</label>
        </div>
        <ErrorMessage
          name="image"
          class="text-darkRed text-[14px] sm:text-sm bottom-[-22px] sm:bottom-[-15px] left-2"
        />
      </div>
      <MoviesDropdown
        name="movie"
        :errors="errors.movie"
        v-model="state.movie"
        :movies="movies.data"
        @update:modelValue="(newValue) => (state.movie = newValue)"
      />
      <button class="w-full bg-darkRed h-[48px] rounded-md text-[20px] mt-4">
        {{ $t('news_feed.write_quote.post') }}
      </button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { reactive, computed, defineAsyncComponent, onMounted } from 'vue'
import { useModalStore } from '@/stores/modal'
import { userStore } from '@/stores/user.js'
import axiosInstance from '@/config/axios/index'
import { useQuoteStore } from '@/stores/quote.js'
import { useMovieStore } from '@/stores/movie.js'

const TheTextarea = defineAsyncComponent(() => import('@/components/TheTextarea.vue'))
const MoviesDropdown = defineAsyncComponent(() => import('@/components/MoviesDropdown.vue'))

const modal = useModalStore()

const movies = useMovieStore()

const user = userStore()

const quotes = useQuoteStore()

onMounted(async () => {
  await movies.getMovies()
  console.log(movies.data)
})

const state = reactive({
  uploadedImage: null,
  modal: true,
  quote_en: '',
  quote_ka: '',
  movie: '',
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
    const response = await axiosInstance.post('api/quote/store', formData)
    modal.toggleModal('writeQuote', false)
    console.log(response.data.quote)
    quotes.addQuote(response.data.quote)
  } catch (error) {
    console.log(error)
  }
}
</script>
