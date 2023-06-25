<template>
  <div class="text-white bg-darkBlack sm:bg-mediumDark min-h-screen pb-10">
    <div class="mx-auto my-0 sm:w-[50rem] pt-[1rem]">
      <header class="text-xl pl-4">
        <h1>My Profile</h1>
      </header>
      <div class="bg-mediumDark sm:bg-darkBlack mt-[4rem] rounded-md pb-20">
        <div class="flex justify-center" @submit.prevent="handleAvatar">
          <div class="sm:translate-y-[-50%] flex flex-col items-center my-6 sm:my-0">
            <img
              :src="state.displayImage ?? imageUrl"
              alt="profile"
              class="w-[6rem] h-[6rem] rounded-full overflow-hidden"
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
              upload new photo
            </label>
          </div>
        </div>
        <Form @submit="handleSubmit" class="pb-4">
          <div class="w-2/3 mx-auto">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2 text-sm sm:text-base">
                  <p>Username</p>
                  <div class="flex items-center gap-2">
                    <div
                      class="text-mediumGray sm:bg-lightDark border-b sm:border w-full rounded h-10 overflow-hidden"
                    >
                      <h3 class="h-full flex items-center ml-3">{{ authUser.data.name }}</h3>
                    </div>
                    <span class="cursor-pointer" @click="addUsernameDiv">Edit</span>
                  </div>
                </div>
                <div class="mr-9 flex flex-col gap-2" v-if="state.showUsernameDiv">
                  <label for="name">New username</label>
                  <Field
                    name="name"
                    id="name"
                    placeholder="name"
                    v-model="state.username"
                    type="text"
                    class="text-mediumGray bg-lightDark border w-full rounded p-2"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2 text-sm sm:text-base">
                  <p>password</p>
                  <div class="flex items-center gap-2">
                    <div
                      class="text-mediumGray border-b sm:border w-full rounded h-10 overflow-hidden sm:bg-lightDark"
                    >
                      <h3 class="h-full flex items-center ml-3">*************</h3>
                    </div>
                    <span class="cursor-pointer" @click="addPasswordDiv">Edit</span>
                  </div>
                </div>
                <div class="mr-9 flex flex-col gap-2" v-if="state.showPasswordDiv">
                  <div class="gap-4">
                    <div class="w-full border p-4 flex flex-col gap-3 rounded border-mediumGray">
                      <h3>Password should contain</h3>
                      <ul class="text-xs list-disc pl-4">
                        <li>8 or more characters</li>
                        <li>15 lowercase characters</li>
                      </ul>
                    </div>
                    <div class="relative flex flex-col gap-2 mt-2">
                      <label for="password">New Password</label>
                      <Field
                        name="password"
                        id="password"
                        placeholder="password"
                        v-model="state.password"
                        :type="state.showPassword ? 'password' : 'text'"
                        class="text-mediumGray bg-lightDark border w-full rounded p-2"
                      />
                      <div class="absolute bottom-4 right-2">
                        <div @click="togglePassword" class="cursor-pointer">
                          <img src="@/assets/icons/show_password.svg" alt="show" />
                        </div>
                      </div>
                    </div>
                    <div class="relative flex flex-col gap-2 mt-2">
                      <label for="password-confirmation">Confirm New Password</label>
                      <Field
                        name="password-confirmation"
                        id="password-confirmation"
                        placeholder="Confirm new Password"
                        v-model="state.newPasswordConfirmation"
                        :type="state.showPassword ? 'password' : 'text'"
                        class="text-mediumGray bg-lightDark border w-full rounded p-2"
                      />
                      <div class="absolute bottom-4 right-2">
                        <div @click="togglePassword" class="cursor-pointer">
                          <img src="@/assets/icons/show_password.svg" alt="show" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input id="submit" type="submit" name="submit" class="hidden" />
        </Form>
      </div>
      <div class="hidden justify-end items-center gap-2 mt-3 sm:flex">
        <button>Cancell</button>
        <label for="submit" class="bg-darkRed rounded-md text-[20px] py-2 px-3 cursor-pointer"
          >save changes</label
        >
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
import TextField from '@/components/TextField.vue'
import updateUser from '@/services/updateUser'

const authUser = userStore()
const imageUrl = computed(() => `${imagePath}${authUser.data.image}`)

const state = reactive({
  uploadedImage: null,
  displayImage: null,
  userEmail: authUser.data.email,
  showUsernameDiv: null,
  showPasswordDiv: null,
  username: authUser.data.name,
  newUserName: null,
  newPassword: null,
  newPasswordConfirmation: null,
  showPassword: null,
  showPasswordConfirm: null
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

const addUsernameDiv = () => {
  state.showUsernameDiv = !state.showUsernameDiv
}

const addPasswordDiv = () => {
  state.showPasswordDiv = !state.showPasswordDiv
}

const handleSubmit = async () => {
  const data = {
    name: state.username
  }
  await updateUser(authUser.data.id, data)
}

const togglePassword = () => {
  state.showPassword = !state.showPassword
}

const togglePasswordConfirm = () => {
  state.showPasswordConfirm = !state.showPasswordConfirm
}
</script>
