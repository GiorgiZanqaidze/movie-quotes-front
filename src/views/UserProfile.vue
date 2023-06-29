<template>
  <div class="text-white bg-darkBlack sm:bg-mediumDark min-h-screen pb-10">
    <div class="mx-auto my-0 sm:w-[50rem] pt-[1rem]">
      <header class="text-xl pl-4">
        <h1 class="hidden sm:inline">My Profile</h1>
        <a href="/news-feed" class="block sm:hidden">
          <BackArrow class="w-5 ml-5 mt-5 cursor-pointer" />
        </a>
      </header>
      <div class="bg-mediumDark sm:bg-darkBlack mt-[4rem] rounded-md pb-20">
        <div class="flex justify-center" @submit.prevent="handleAvatar">
          <div class="sm:translate-y-[-50%] flex flex-col items-center my-6 sm:my-0">
            <img
              :src="state.displayImage ?? imageUrl"
              alt="profile"
              class="w-[10rem] h-[10rem] sm:w-[6rem] sm:h-[6rem] rounded-full overflow-hidden"
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
        <Form @submit="handleSubmit" class="pb-4" v-slot="{ errors }">
          <div class="w-full px-4 sm:w-2/3 mx-auto">
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
                <div
                  class="absolute sm:static top-14 left-0 right-0 bottom-0 sm:block sm:bg-transparent bg-black h-[50rem] sm:h-auto"
                  v-if="state.showUsernameDiv"
                >
                  <div class="block sm:hidden">
                    <BackArrow class="w-5 ml-5 mt-5 cursor-pointer" @click="addUsernameDiv" />
                  </div>
                  <div
                    class="absolute sm:static sm:block flex flex-col gap-2 mr-9 bg-darkGray rounded-md top-[10rem] left-1/2 sm:translate-x-0 translate-x-[-50%] sm:translate-y-0 translate-y-[-50%] sm:bg-transparent w-full sm:w-auto px-10 sm:px-0 py-10"
                  >
                    <label for="name">New username</label>
                    <TextField
                      name="name"
                      :errors="errors.name"
                      v-model="state.username"
                      @update:modelValue="(newValue) => (state.username = newValue)"
                      placeholder="name"
                      rules="required|min:3"
                      :updateUser="true"
                    />
                  </div>
                  <div
                    class="justify-between px-10 items-center flex w-full gap-2 mt-3 top-1/3 absolute sm:hidden"
                  >
                    <span @click="cancellConfirm">Cancell</span>
                    <label
                      @click="showConfirmModal"
                      class="bg-darkRed rounded-md text-[20px] py-2 px-3 cursor-pointer"
                      >save changes</label
                    >
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4" v-if="!authUser?.data?.google_id">
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
                <div
                  class="absolute sm:static top-14 left-0 right-0 bottom-0 sm:block sm:bg-transparent bg-black h-[50rem] sm:h-auto"
                  v-if="state.showPasswordDiv"
                >
                  <div class="block sm:hidden">
                    <BackArrow class="w-5 ml-5 mt-5 cursor-pointer" @click="addPasswordDiv" />
                  </div>
                  <div
                    class="absolute sm:static sm:block flex flex-col gap-2 mr-9 bg-darkGray rounded-md top-[15rem] left-1/2 sm:translate-x-0 translate-x-[-50%] sm:translate-y-0 translate-y-[-50%] sm:bg-transparent w-full sm:w-auto px-10 sm:px-0 py-10"
                  >
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
                        <PasswordField
                          name="password"
                          :errors="errors.password"
                          v-model="state.newPassword"
                          @update:modelValue="(newValue) => (state.director_ka = newValue)"
                          placeholder="password"
                          rules="required"
                          :updateUser="true"
                        />
                      </div>
                      <div class="relative flex flex-col gap-2 mt-2">
                        <label for="password_confirmation">Confirm New Password</label>

                        <PasswordField
                          name="password_confirmation"
                          :errors="errors.password_confirmation"
                          v-model="state.newPasswordConfirmation"
                          @update:modelValue="(newValue) => (state.director_ka = newValue)"
                          placeholder="Confirm new Password"
                          rules="required|confirmed:@password"
                          :updateUser="true"
                        />
                      </div>
                      <div
                        class="justify-between w-[400px] items-center flex gap-10 mt-3 bottom-[-3rem] absolute sm:hidden"
                      >
                        <span @click="cancellConfirm">Cancell</span>
                        <label
                          @click="showConfirmModal"
                          class="bg-darkRed rounded-md text-[20px] py-2 px-3 cursor-pointer"
                          >save changes</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!authUser?.data?.google_id">
                <div class="flex flex-col gap-2 text-sm sm:text-base">
                  <p>Email</p>
                  <div class="flex items-center gap-2">
                    <div
                      class="text-mediumGray border-b sm:border w-full rounded h-10 overflow-hidden sm:bg-lightDark"
                    >
                      <h3 class="h-full flex items-center ml-3">{{ state.email }}</h3>
                    </div>
                    <span class="cursor-pointer" @click="addEmailDiv">Edit</span>
                  </div>
                </div>
                <div
                  class="absolute sm:static top-14 left-0 right-0 bottom-0 sm:block sm:bg-transparent bg-black h-[50rem] sm:h-auto"
                  v-if="state.showEmailDiv"
                >
                  <div class="block sm:hidden">
                    <BackArrow class="w-5 ml-5 mt-5 cursor-pointer" @click="addPasswordDiv" />
                  </div>
                  <div
                    class="absolute sm:static sm:block flex flex-col gap-2 mr-9 bg-darkGray rounded-md top-[10rem] left-1/2 sm:translate-x-0 translate-x-[-50%] sm:translate-y-0 translate-y-[-50%] sm:bg-transparent w-full sm:w-auto px-10 sm:px-0 py-10"
                  >
                    <label for="email">Email</label>
                    <TextField
                      name="email"
                      :errors="errors.email"
                      v-model="state.email"
                      @update:modelValue="(newValue) => (state.email = newValue)"
                      placeholder="Email"
                      rules="required|email"
                      :updateUser="true"
                    />
                  </div>
                  <div
                    class="justify-between px-10 items-center flex w-full gap-2 mt-3 top-1/3 absolute sm:hidden"
                  >
                    <span @click="closeEmailDiv">Cancell</span>
                    <label
                      @click="showConfirmModal"
                      class="bg-darkRed rounded-md text-[20px] py-2 px-3 cursor-pointer"
                      >save changes</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute block sm:hidden top-14 left-0 right-0 bg-black h-[50rem]"
            v-if="state.confirmModal"
          >
            <div
              class="mx-auto bg-gradient-to-br from-black to-mediumGray w-3/4 mt-20 rounded-md h-[15rem] flex justify-center"
            >
              <div class="flex flex-col items-center justify-center pb-10 gap-16">
                <div>are you sure to make changes?</div>
                <div class="flex gap-5">
                  <span class="text-[20px] py-2 px-3" @click="showConfirmModal">Cancell</span>
                  <button
                    @click="confirmData"
                    type="submit"
                    class="bg-darkRed rounded-md text-[20px] py-2 px-3 cursor-pointer"
                  >
                    confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <input id="submit" type="submit" name="submit" class="hidden" />
        </Form>
      </div>
      <div class="hidden justify-end items-center gap-2 mt-3 sm:flex">
        <span class="cursor-pointer" @click="cancellAddDiv">Cancell</span>
        <label for="submit" class="bg-darkRed rounded-md text-[20px] py-2 px-3 cursor-pointer"
          >save changes</label
        >
      </div>
    </div>
    <div
      class="absolute top-1/3 left-1/2 bg-cyan border translate-x-[-50%] translate-y-[-50%] sm:hidden p-5 flex w-[20rem] justify-between rounded-md"
      v-if="state.changesUpdated"
    >
      <div class="flex justify-start gap-2">
        <ConfirmedBtn />
        <h1 class="text-green-500">changes updated</h1>
      </div>
      <CloseBtn @click="closeChangesModal" />
    </div>
  </div>
</template>

<script setup>
import imagePath from '@/config/images/path'
import { userStore } from '@/stores/user'
import { Field, Form } from 'vee-validate'
import { computed, reactive, onMounted } from 'vue'
import updateUserAvatar from '@/services/updateUserAvatar'
import PasswordField from '@/components/PasswordField.vue'
import updateUser from '@/services/updateUser'
import TextField from '@/components/TextField.vue'
import BackArrow from '@/components/images/back.vue'
import { useRoute } from 'vue-router'
import CloseBtn from '@/components/images/close.vue'
import ConfirmedBtn from '@/components/images/confirm.vue'

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
  showPasswordConfirm: null,
  confirmModal: false,
  email: authUser.data.email,
  showEmailDiv: false,
  changesUpdated: false
})

console.log(state.email)

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

    if (response.status === 200) {
      authUser.setUserData(response.data)
    }
  }
}

const addUsernameDiv = () => {
  state.showUsernameDiv = !state.showUsernameDiv
}

const closeUsernameDiv = () => {
  state.showUsernameDiv = false
}

const addEmailDiv = () => {
  state.showEmailDiv = !state.showEmailDiv
}

const closeEmailDiv = () => {
  state.showEmailDiv = false
}

const addPasswordDiv = () => {
  state.showPasswordDiv = !state.showPasswordDiv
}

const closePasswordDiv = () => {
  state.showPasswordDiv = false
}

const cancellAddDiv = () => {
  closeUsernameDiv()
  closeEmailDiv()
  closePasswordDiv()
}

const handleSubmit = async () => {
  const data = {
    name: state.username,
    password: state.newPassword,
    password_confirmation: state.newPasswordConfirmation,
    email: state.email
  }
  const response = await updateUser(authUser.data.id, data)

  if (response.status === 200) {
    state.changesUpdated = true
    authUser.setUserData(response.data)
  }
}

const togglePassword = () => {
  state.showPassword = !state.showPassword
}

const showConfirmModal = () => {
  console.log('ffasfd')
  state.confirmModal = !state.confirmModal
}

const cancellConfirm = () => {
  console.log('fdfds')
  closeUsernameDiv()
  closePasswordDiv()
}

const confirmData = () => {
  handleSubmit()
  showConfirmModal()
  closeUsernameDiv()
  closePasswordDiv()
}

const route = useRoute()

import updateEmail from '@/services/updateEmail'

onMounted(async () => {
  if (route.query.update_email) {
    state.changesUpdated = true
    const email = { email: route.query.update_email }
    const token = route.query.email_verify_token
    await updateEmail(token, email)
  }
})

const closeChangesModal = () => {
  state.changesUpdated = false
}
</script>
