<template>
  <div
    class="fixed top-1/2 left-1/2 bg-darkBlack sm:w-[961px] translate-x-[-50%] translate-y-[-50%] pb-5 rounded-md w-full"
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
        <profile-icon></profile-icon>
        <h1 class="text-[20px]">Nino Tabagari</h1>
      </div>
    </div>
    <Form
      @submit="handleSubmit"
      class="mt-4 flex flex-col gap-4 pb-2 px-6"
      v-slot="{ errors, meta }"
    >
      <div class="relative">
        <Field
          rules="required|min:3"
          class="text-mediumGray bg-transparent border w-full h-[86px] rounded p-2"
          :class="{
            'border-darkRed': errors.quote_en,
            'border-green-500': state.quote_en && !errors.quote_en,
            'border-mediumGray': !state.quote_en && !errors.quote_en
          }"
          name="quote_en"
          as="textarea"
          placeholder="Start create new quote"
          v-model="state.quote_en"
          @change="handleChange"
        ></Field>
        <ErrorMessage
          name="quote_en"
          class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-15px] left-2"
        />
        <div class="absolute right-3 top-9">
          <img
            v-if="state.quote_en && !errors.quote_en"
            src="@/assets/icons/valid_icon.svg"
            alt="valid"
          />
          <img v-if="errors.quote_en" src="@/assets/icons/invalid_icon.svg" alt="invalid" />
        </div>
      </div>
      <div class="relative">
        <Field
          rules="required|min:3"
          class="text-mediumGray bg-transparent border w-full h-[86px] rounded p-2"
          :class="{
            'border-darkRed': errors.quote_ka,
            'border-green-500': state.quote_ka && !errors.quote_ka,
            'border-mediumGray': !state.quote_ka && !errors.quote_ka
          }"
          name="quote_ka"
          as="textarea"
          placeholder="Start create new quote"
          v-model="state.quote_ka"
          @change="handleChange"
        ></Field>
        <ErrorMessage
          name="quote_ka"
          class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-15px] left-2"
        />
      </div>
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
      <div
        class="w-full h-[86px] relative text-[20px] border rounded"
        :class="{
          'border-darkRed': errors.movie,
          'border-green-500': state.movie && !errors.movie,
          'border-mediumGray': !state.movie && !errors.movie
        }"
      >
        <Field
          rules="required"
          v-slot="{ value }"
          name="movie"
          v-model="state.movie"
          @change="handleChange"
          id="movie"
          as="select"
          class="w-full bg-black h-full rounded overflow-hidden sm:pl-10 pl-16 focus:outline-none"
        >
          <option value="" disabled>
            {{ $t('news_feed.write_quote.choose_movie') }}
          </option>
          <option v-for="(movie, index) in state.types" :key="index" :value="index">
            {{ movie }}
          </option>
        </Field>

        <img
          src="@/assets/icons/choose_movie.svg"
          alt="ganres"
          class="absolute top-1/2 translate-y-[-50%] sm:left-2 left-5"
        />
        <ErrorMessage
          name="movie"
          class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-15px] left-2 z-40"
        />
      </div>
      <button class="w-full bg-darkRed h-[48px] rounded-md text-[20px] mt-4">
        {{ $t('news_feed.write_quote.post') }}
      </button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage, useField } from 'vee-validate'
import { reactive, computed } from 'vue'
import { useModalStore } from '@/stores/modal'
import { userStore } from '@/stores/user.js'
import axiosInstance from '@/config/axios/index'
import TheTextarea from '@/components/TheTextarea.vue'

const modal = useModalStore()

const user = userStore()
const { value, errorMessage } = useField('image', (value) => !!value)

const handleChange = (e) => {
  value.value = state.uploadedImage
}

const state = reactive({
  uploadedImage: null,
  types: ['comedy', 'drama', 'fantasy'],
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
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>
