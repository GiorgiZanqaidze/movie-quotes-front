<template>
  <div
    class="absolute top-[30rem] left-1/2 bg-darkBlack sm:w-[961px] min-h-[20rem] translate-x-[-50%] translate-y-[-50%] pb-5 rounded-md w-full text-white z-100"
  >
    <div>
      <header
        class="p-5 relative flex justify-center items-center text-xl border-b border-darkGray pb-3"
      >
        <h1>add movie</h1>
        <button
          class="flex justify-start absolute right-5 top-5"
          @click="modal.toggleModal('null', false)"
        >
          <img src="@/assets/icons/close.svg" alt="close" class="inline-block mr-1" />
        </button>
      </header>
      <div class="mt-4 mb-6 px-6">
        <div class="flex items-center gap-3">
          <profile-icon :path="`${imagePath}${authUser?.data?.image}`"></profile-icon>
          <h1 class="text-[20px]">{{ authUser?.data?.name }}</h1>
        </div>
      </div>
      <Form @submit="handleSubmit" class="mt-4 flex flex-col gap-6 pb-2 px-6" v-slot="{ errors }">
        <TextField
          name="title_en"
          :errors="errors.title_en"
          v-model="state.title_en"
          @update:modelValue="(newValue) => (state.title_en = newValue)"
          placeholder="Movie name"
          rules="required|min:3"
        />
        <TextField
          name="title_ka"
          :errors="errors.title_ka"
          v-model="state.title_ka"
          @update:modelValue="(newValue) => (state.title_ka = newValue)"
          placeholder="ფილმის სახელი"
          rules="required|min:3"
        />
        <div
          class="flex flex-col gap-2 border p-2 rounded-md relative"
          :class="{
            'border-darkRed': errors.genres,
            'border-green-500': state.choosenGenres.length && !errors.genres,
            'border-mediumGray': !state.choosenGenres.length && !errors.genres
          }"
        >
          <ul class="flex gap-2 items-center">
            <li
              v-for="(genre, index) in state.choosenGenres"
              :key="index"
              class="list-none py-1 px-2 rounded-md bg-mediumGray flex gap-2 items-center"
            >
              <span>
                {{ state.genres[genre - 1]?.name?.[this.$i18n.locale] }}
              </span>
              <span class="flex justify-start cursor-pointer" @click="handleGenreDelere(genre)">
                <img src="@/assets/icons/close.svg" alt="delete" class="inline-block w-3" />
              </span>
            </li>
          </ul>
          <Field
            :rules="state.genresValidator"
            name="genres"
            v-model="state.choosenGenre"
            @change="handleGenres"
            id="genres"
            as="select"
            class="w-full bg-black h-10 rounded overflow-hidden sm:pl-10 pl-16 focus:outline-none"
          >
            <option value="" disabled>
              {{ $t('news_feed.write_quote.choose_movie') }}
            </option>
            <option
              v-for="(genre, index) in state.genres"
              :key="index"
              :value="genre.genre_id"
              class="text-white"
            >
              {{ genre?.name?.[this.$i18n.locale] }}
            </option>
          </Field>
          <ErrorMessage
            name="genres"
            class="text-darkRed text-xs sm:text-sm top-[80px] sm:bottom-[-15px] left-2 absolute"
          />
        </div>
        <TextField
          name="director_en"
          :errors="errors.director_en"
          v-model="state.director_en"
          @update:modelValue="(newValue) => (state.director_en = newValue)"
          placeholder="Director"
          rules="required|min:3"
        />
        <TextField
          name="director_ka"
          :errors="errors.director_ka"
          v-model="state.director_ka"
          @update:modelValue="(newValue) => (state.director_ka = newValue)"
          placeholder="რეჟისორი"
          rules="required|min:3"
        />
        <TheTextarea
          name="description_en"
          :errors="errors.description_en"
          v-model="state.description_en"
          @update:modelValue="(newValue) => (state.description_en = newValue)"
          placeholder="Movie Descrioption"
          rules="required|min:3"
        />
        <TheTextarea
          name="description_ka"
          :errors="errors.description_ka"
          v-model="state.description_ka"
          @update:modelValue="(newValue) => (state.description_ka = newValue)"
          placeholder="ფილმის აღწერა"
          rules="required|min:3"
        />
        <TextField
          name="year"
          :errors="errors.year"
          v-model="state.year"
          @update:modelValue="(newValue) => (state.year = newValue)"
          placeholder="წელი/year"
          rules="required|integer"
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

        <button class="w-full bg-darkRed h-[48px] rounded-md text-[20px] mt-4">
          {{ $t('news_feed.write_quote.post') }}
        </button>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import { userStore } from '@/stores/user'
import imagePath from '@/config/images/path'
import TheTextarea from '@/components/TheTextarea.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { reactive, onMounted } from 'vue'
import TextField from '@/components/TextField.vue'
import getGentes from '@/services/getGenres'
import postMovie from '@/services/postMovie'
import { useMovieStore } from '@/stores/movie'

const movie = useMovieStore()

const authUser = userStore()

const state = reactive({
  uploadedImage: null,
  modal: true,
  title_en: '',
  title_ka: '',
  director_en: '',
  director_ka: '',
  description_en: '',
  description_ka: '',
  year: '',
  imageValidator: 'required',
  choosenGenre: null,
  choosenGenres: [],
  genres: [],
  genresValidator: 'required'
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
const modal = useModalStore()

const handleSubmit = async () => {
  const data = {
    title_en: state.title_en,
    title_ka: state.title_en,
    director_en: state.director_en,
    director_ka: state.director_ka,
    description_en: state.description_en,
    description_ka: state.description_en,
    year: state.year,
    image: state.uploadedImage,
    user_id: authUser.data.id,
    genres: state.choosenGenres
  }

  let formData = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })

  const response = await postMovie(formData)

  if (response.status === 200) {
    modal.toggleModal('null', false)
    movie.updateMovies(response.data)
  }
}

onMounted(async () => {
  const response = await getGentes()

  const genres = response.data

  genres.forEach((genre) => {
    state.genres.push({
      genre_id: genre.id,
      name: JSON.parse(genre.name)
    })
  })
})

function handleGenres() {
  state.choosenGenres.push(state.choosenGenre)

  const uniqueArray = [...new Set(state.choosenGenres)]

  state.choosenGenres = uniqueArray
}

function handleGenreDelere(e) {
  state.choosenGenres = state.choosenGenres.filter((item) => item !== e)

  if (state.choosenGenres.length < 1) {
    state.choosenGenre = null
  }
}
</script>