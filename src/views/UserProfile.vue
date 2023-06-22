<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <div class="mx-auto my-0 w-[50rem] pt-[1rem]">
      <header class="text-xl pl-4">
        <h1>My Profile</h1>
      </header>
      <div class="bg-darkBlack mt-[4rem] rounded-md">
        <div class="flex justify-center" @submit.prevent="handleAvatar">
          <div class="translate-y-[-50%] flex flex-col items-center">
            <img
              :src="state.displayImage ?? imageUrl"
              alt="profile"
              class="sm:w-[6rem] w-[40px] sm:h-[6rem] h-[40px] rounded-full overflow-hidden"
            />
            <Field
              id="file"
              type="file"
              name="image"
              accept="image/*"
              class="hidden"
              v-model="state.image"
              @change="handleAvatar"
            />

            <label for="file" class="py-1 px-2 cursor-pointer text-[20px] text-center">
              upload new profile
            </label>
          </div>
        </div>
        <h1>afasfaf</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import imagePath from '@/config/images/path'
import { userStore } from '@/stores/user'
import { Field, Form } from 'vee-validate'
import { computed, reactive } from 'vue'
import updateUserAvatar from '@/services/updateUserAvatar'

const authUser = userStore()
const imageUrl = computed(() => `${imagePath}${authUser.data.image}`)

const state = reactive({
  uploadedImage: null,
  displayImage: null
})

const handleAvatar = async (file) => {
  if (file && file.target.files[0].type.startsWith('image/')) {
    state.uploadedImage = file.target.files[0]

    const reader = new FileReader()
    reader.onload = (event) => {
      const imageUrl = event.target.result
      state.displayImage = imageUrl
    }

    const formData = new FormData()

    formData.append('avatar', state.uploadedImage)
    reader.readAsDataURL(file.target.files[0])
    const response = await updateUserAvatar(authUser.data.id, formData)

    console.log(response)
  }
}
</script>
