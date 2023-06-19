<template>
  <div
    class="absolute sm:top-[4rem] top-0 left-1/2 bg-darkBlack sm:w-[50rem] w-full sm:min-h-[30rem] translate-x-[-50%] pb-5 rounded-md"
  >
    <div>
      <header class="text-white flex justify-between p-5 border-b border-mediumGray">
        <DeleteButton :quote_id="currentQuote.id">Delete</DeleteButton>
        <h1>Edit Quote</h1>
        <div>
          <img src="@/assets/icons/close.svg" alt="close" />
        </div>
      </header>
      <div class="text-white p-5">
        <div class="flex items-center gap-2">
          <profile-icon :path="`${imagePath}${authUser.data?.image}`"></profile-icon>
          <h3>{{ authUser.data.name }}</h3>
        </div>
        <div>
          <Form
            @submit="handleSubmit"
            class="mt-4 flex flex-col gap-4 pb-2 px-0"
            v-slot="{ errors }"
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
            <div class="sm:w-full bg-transparent rounded">
              <Field
                :rules="state.imageValidator"
                id="file"
                type="file"
                name="image"
                accept="image/*"
                @change="uploadImageFile"
                class="hidden"
              />
              <div for="file relative">
                <img :src="`${imagePath}${state.uploadedImage}`" alt="quote" />
                <label for="file" class="absolute top-1/2 left-1/2 cursor-pointer opacity-90">
                  <div
                    class="flex flex-col gap-3 bg-slate-800 rounded-md p-3 translate-x-[-50%] translate-y-[50%]"
                  >
                    <div>
                      <img src="@/assets/icons/drag_and_drop.svg" alt="camera" class="mx-auto" />
                    </div>
                    <h4>Change photo</h4>
                  </div>
                </label>
              </div>
            </div>
            <button
              class="w-full bg-darkRed h-[48px] rounded-md text-[20px] mt-4"
              @click="handleEdit"
            >
              {{ $t('news_feed.write_quote.post') }}
            </button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DeleteButton from '@/components/DeleteButton.vue'
import { useSingleMovieStore } from '@/stores/singleMovie'
import { userStore } from '@/stores/user'
import imagePath from '@/config/images/path'
import TheTextarea from '@/components/TheTextarea.vue'
import { reactive } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import updateQuote from '@/services/updateQuote'

const authUser = userStore()

const singleMovieStore = useSingleMovieStore()

const currentQuote = singleMovieStore.getCurrentQuote

const state = reactive({
  uploadedImage: currentQuote.image,
  modal: true,
  quote_en: currentQuote.name.en,
  quote_ka: currentQuote.name.ka,
  movie: singleMovieStore.data.id,
  imageValidator: 'required',
  quote_id: currentQuote.id
})

function handleSubmit() {
  console.log(state)
}

const uploadImageFile = (file) => {
  if (file && file.target.files[0].type.startsWith('image/')) {
    state.uploadedImage = file.target.files[0]
  }
}

async function handleEdit() {
  const data = {
    name_ka: state.quote_ka,
    name_en: state.quote_en,
    image: state.uploadedImage,
    movie_id: state.movie,
    quote_id: state.quote,
    user_id: authUser.data.id
  }

  let formData = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })

  console.log(data)

  const response = await updateQuote(currentQuote.id, formData)

  console.log(response)
}
</script>
