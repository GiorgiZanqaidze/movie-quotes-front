<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <div class="mx-auto my-0 w-[50rem] pt-[1rem]">
      <header class="text-xl pl-4">
        <h1>My Profile</h1>
      </header>
      <div class="bg-darkBlack mt-[4rem] rounded-md">
        <div class="flex justify-center relative">
          <div class="absolute translate-y-[-50%]">
            <img
              :src="imageUrl"
              alt="profile"
              class="sm:w-[6rem] w-[40px] sm:h-[6rem] h-[40px] rounded-full overflow-hidden"
            />
          </div>
          <Field
            id="file"
            type="file"
            name="image"
            accept="image/*"
            @change="uploadImageFile"
            class="hidden"
          />

          <label for="file" class="py-1 px-2 cursor-pointer text-[20px]">
            upload new profile
          </label>
        </div>
        <h1>afasfaf</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import imagePath from '@/config/images/path'
import { userStore } from '@/stores/user'
import { computed } from 'vue'

const authUser = userStore()
const imageUrl = computed(() => `${imagePath}${authUser.data.image}`)
</script>
