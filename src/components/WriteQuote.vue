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
    <Form class="mt-4 flex flex-col gap-3 pb-2 px-6">
      <div>
        <textarea
          @change="handleChange"
          placeholder="Start create new quote"
          class="text-mediumGray bg-transparent border w-full h-[86px] rounded p-2"
        ></textarea>
      </div>
      <div>
        <textarea
          @change="handleChange"
          placeholder="ახალი ციტატა"
          class="text-mediumGray bg-transparent border w-full h-[86px] rounded p-2"
        ></textarea>
      </div>
      <div class="sm:w-full bg-transparent border border-mediumGray rounded h-[86px]">
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
          <Field name="file" v-slot="{ uploadImage }" class="relative">
            <input id="file" type="file" accept="image/*" @change="uploadImage" class="hidden" />
            <label for="file" class="bg-mediumRed py-1 px-2 cursor-pointer text-[20px]">{{
              $t('news_feed.write_quote.choose_file')
            }}</label>
          </Field>
        </div>
      </div>
      <div class="w-full border-mediumGray rounded overflow-hidden h-[86px] relative text-[20px]">
        <Field
          v-slot="{ value }"
          name="drink"
          id="ganres"
          as="select"
          class="w-full bg-black h-full overflow-hidden sm:pl-10 pl-16"
        >
          <option value="" disabled>
            {{ $t('news_feed.write_quote.choose_movie') }}
          </option>
          <option
            v-for="type in state.types"
            :key="type"
            :value="type"
            :selected="value && value.includes(type)"
          >
            {{ type }}
          </option>
        </Field>
        <img
          src="@/assets/icons/choose_movie.svg"
          alt="ganres"
          class="absolute top-1/2 translate-y-[-50%] sm:left-2 left-5"
        />
      </div>
      <button class="w-full bg-darkRed h-[48px] rounded-md text-[20px] mt-4">
        {{ $t('news_feed.write_quote.post') }}
      </button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate'
import { reactive } from 'vue'
import { useModalStore } from '@/stores/modal'

const modal = useModalStore()

const state = reactive({
  uploadedImage: null,
  types: ['comedy', 'drama', 'fantasy'],
  imageName: null,
  modal: true
})

const dragOver = (event) => {
  event.preventDefault()
}

const drop = (event) => {
  event.preventDefault()
  const fileList = event.dataTransfer.files
  uploadImageFile(fileList[0])
}

const uploadImageFile = (file) => {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = (event) => {
      state.uploadedImage = event.target.result
    }
    reader.readAsDataURL(file)
    state.imageName = file.name

    console.log(state.imageName)
  }
}

const closeModal = () => {
  state.modal = !state.modal
  console.log(state.modal)
}
</script>
