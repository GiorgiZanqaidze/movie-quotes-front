<template>
  <div class="text-white bg-darkBlack sm:bg-mediumDark min-h-screen pb-10 sm:pt-5">
    <div class="mx-auto my-0 sm:w-[50rem] pt-[1rem]">
      <header class="text-xl pl-4">
        <h1 class="hidden sm:inline-block ml-10">{{ $t('landing.my_profile.title') }}</h1>
        <a href="/news-feed" class="inline-block sm:hidden">
          <icon-back-arrow alt="arrow" class="w-5 ml-5 mt-5 cursor-pointer"></icon-back-arrow>
        </a>
      </header>
      <div class="bg-mediumDark sm:bg-darkBlack mt-[2rem] sm:mt-[7rem] rounded-md pb-20">
        <div class="flex justify-center">
          <div class="sm:translate-y-[-50%] flex flex-col items-center my-6 sm:my-0">
            <img
              :src="state.displayImage ?? imageUrl"
              alt="profile"
              class="w-[10rem] h-[10rem] sm:w-[10rem] sm:h-[rem] rounded-full overflow-hidden"
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

            <label for="file" class="py-1 px-2 cursor-pointer text-base text-center">
              {{ $t('landing.my_profile.upload_photo') }}
            </label>
          </div>
        </div>
        <Form @submit="handleSubmit" class="pb-4" v-slot="{ errors, values }">
          <div class="w-full px-4 sm:w-2/3 mx-auto">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2 text-sm sm:text-base">
                  <p>{{ $t('landing.my_profile.username') }}</p>
                  <div class="flex items-center gap-2">
                    <div
                      class="text-mediumGray sm:bg-lightDark border-b sm:border w-full rounded h-10 overflow-hidden"
                    >
                      <h3 class="h-full flex items-center ml-3">{{ authUser.data.name }}</h3>
                    </div>
                    <span class="cursor-pointer" @click="addUsernameDiv">{{
                      $t('landing.my_profile.edit')
                    }}</span>
                  </div>
                </div>
                <div
                  class="absolute sm:static top-14 left-0 right-0 bottom-0 sm:block sm:bg-transparent bg-black h-[50rem] sm:h-auto"
                  v-if="state.showUsernameDiv"
                >
                  <div class="block sm:hidden">
                    <icon-back-arrow
                      alt="arrow"
                      class="w-5 ml-5 mt-5 cursor-pointer"
                      @click="addUsernameDiv"
                    ></icon-back-arrow>
                  </div>
                  <div
                    class="absolute sm:static sm:block flex flex-col gap-2 mr-9 bg-darkGray rounded-md top-[10rem] left-1/2 sm:translate-x-0 translate-x-[-50%] sm:translate-y-0 translate-y-[-50%] sm:bg-transparent w-full sm:w-auto px-10 sm:px-0 py-5"
                  >
                    <label for="name">{{ $t('landing.my_profile.new_username') }}</label>
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
                    <span @click="cancellConfirm">{{ $t('landing.my_profile.cancell') }}</span>
                    <label
                      v-if="!errors.name"
                      @click="showConfirmModal"
                      class="bg-darkRed rounded-md text-base py-2 px-3 cursor-pointer"
                      >{{ $t('landing.my_profile.save_changes') }}</label
                    >
                    <label
                      v-if="errors.name"
                      class="bg-darkRed rounded-md text-base py-2 px-3 cursor-pointer"
                      >{{ $t('landing.my_profile.save_changes') }}</label
                    >
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4" v-if="!authUser?.data?.google_id">
                <div class="flex flex-col gap-2 text-sm sm:text-base">
                  <p>{{ $t('landing.my_profile.password') }}</p>
                  <div class="flex items-center gap-2">
                    <div
                      class="text-mediumGray border-b sm:border w-full rounded h-10 overflow-hidden sm:bg-lightDark"
                    >
                      <h3 class="h-full flex items-center ml-3">*************</h3>
                    </div>
                    <span class="cursor-pointer" @click="addPasswordDiv">{{
                      $t('landing.my_profile.edit')
                    }}</span>
                  </div>
                </div>
                <div
                  class="absolute sm:static top-14 left-0 right-0 bottom-0 sm:block sm:bg-transparent bg-black h-[50rem] sm:h-auto"
                  v-if="state.showPasswordDiv"
                >
                  <div class="block sm:hidden">
                    <icon-back-arrow
                      class="w-5 ml-5 mt-5 cursor-pointer"
                      @click="addPasswordDiv"
                    ></icon-back-arrow>
                  </div>
                  <div
                    class="absolute sm:static sm:block flex flex-col gap-2 mr-9 bg-darkGray rounded-md top-[15rem] left-1/2 sm:translate-x-0 translate-x-[-50%] sm:translate-y-0 translate-y-[-50%] sm:bg-transparent w-full sm:w-auto px-10 sm:px-0 py-5"
                  >
                    <div class="gap-4">
                      <div class="w-full border p-4 flex flex-col gap-3 rounded border-mediumGray">
                        <h3>{{ $t('landing.my_profile.should_contain') }}</h3>
                        <ul class="text-xs list-disc pl-4">
                          <li>{{ $t('landing.my_profile.characters') }}</li>
                          <li>{{ $t('landing.my_profile.lowercase') }}</li>
                        </ul>
                      </div>
                      <div class="relative flex flex-col gap-2 mt-2 mb-4">
                        <label for="password">{{ $t('landing.my_profile.new_password') }}</label>
                        <PasswordField
                          name="password"
                          :errors="errors.password"
                          v-model="state.newPassword"
                          @update:modelValue="(newValue) => (state.password = newValue)"
                          :placeholder="$t('landing.my_profile.new_password')"
                          rules="required|min:8|max:15|alpha"
                          :updateUser="true"
                        />
                      </div>
                      <div class="relative flex flex-col gap-2 mt-2">
                        <label for="password_confirmation">{{
                          $t('landing.my_profile.confirm_new_password')
                        }}</label>

                        <PasswordField
                          name="password_confirmation"
                          :errors="errors.password_confirmation"
                          v-model="state.newPasswordConfirmation"
                          @update:modelValue="
                            (newValue) => (state.password_confirmation = newValue)
                          "
                          :placeholder="$t('landing.my_profile.confirm_new_password')"
                          rules="required|confirmed:@password"
                          :updateUser="true"
                        />
                      </div>
                      <div
                        class="items-center flex gap-20 mt-3 bottom-[-3rem] absolute sm:hidden left-1/2 translate-x-[-50%]"
                      >
                        <span @click="cancellConfirm">{{ $t('landing.my_profile.cancell') }}</span>
                        <label
                          v-if="
                            !errors.password &&
                            !errors.password_confirmation &&
                            values.password &&
                            values.password_confirmation
                          "
                          @click="showConfirmModal"
                          class="bg-darkRed rounded-md text-base py-2 px-1 cursor-pointer"
                          >{{ $t('landing.my_profile.save_changes') }}</label
                        >
                        <label
                          v-else
                          class="bg-darkRed rounded-md text-base py-2 px-1 cursor-pointer"
                          >{{ $t('landing.my_profile.save_changes') }}</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="flex flex-col gap-2 text-sm sm:text-base"
                  :class="{ 'sm:mr-10': authUser?.data?.google_id }"
                >
                  <p>{{ $t('landing.my_profile.email') }}</p>

                  <div class="flex items-center gap-2">
                    <div
                      class="text-mediumGray border-b sm:border w-full rounded h-10 overflow-hidden sm:bg-lightDark"
                    >
                      <h3 class="h-full flex items-center ml-3">{{ authUser.data.email }}</h3>
                    </div>
                    <span
                      class="cursor-pointer"
                      v-if="!authUser?.data?.google_id"
                      @click="addEmailDiv"
                      >{{ $t('landing.my_profile.edit') }}</span
                    >
                  </div>
                </div>
                <div
                  class="absolute sm:static top-14 left-0 right-0 bottom-0 sm:block sm:bg-transparent bg-black h-[50rem] sm:h-auto"
                  v-if="state.showEmailDiv && !authUser?.data?.google_id"
                >
                  <div class="block sm:hidden">
                    <icon-back-arrow
                      class="w-5 ml-5 mt-5 cursor-pointer"
                      @click="closeEmailDiv"
                    ></icon-back-arrow>
                  </div>
                  <div
                    class="absolute sm:static sm:block flex flex-col gap-2 mr-9 bg-darkGray rounded-md top-[10rem] left-1/2 sm:translate-x-0 translate-x-[-50%] sm:translate-y-0 translate-y-[-50%] sm:bg-transparent w-full sm:w-auto px-10 sm:px-0 py-5"
                  >
                    <label for="email">{{ $t('landing.my_profile.new_email') }}</label>
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
                    <span @click="closeEmailDiv">{{ $t('landing.my_profile.cancell') }}</span>
                    <label
                      @click="showConfirmModal"
                      class="bg-darkRed rounded-md text-base py-2 px-3 cursor-pointer"
                      >{{ $t('landing.my_profile.save_changes') }}</label
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
                <div>{{ $t('landing.my_profile.make_changes') }}</div>
                <div class="flex gap-5">
                  <span class="text-base py-2 px-3" @click="showConfirmModal">{{
                    $t('landing.my_profile.cancell')
                  }}</span>
                  <button
                    @click="confirmData"
                    type="submit"
                    class="bg-darkRed rounded-md text-base py-2 px-3 cursor-pointer"
                  >
                    {{ $t('landing.my_profile.confirm') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <input id="submit" type="submit" name="submit" class="hidden" />
        </Form>
      </div>
      <div
        class="hidden justify-end items-center gap-2 mt-3 sm:flex"
        v-if="state.showUsernameDiv || state.showPasswordDiv || state.showEmailDiv"
      >
        <span class="cursor-pointer" @click="cancellAddDiv">{{
          $t('landing.my_profile.cancell')
        }}</span>
        <label for="submit" class="bg-darkRed rounded-md text-base py-2 px-3 cursor-pointer">{{
          $t('landing.my_profile.save_changes')
        }}</label>
      </div>
    </div>
    <div
      class="fixed top-0 bottom-0 left-0 right-0"
      @click="closeChangesModal"
      v-if="state.changesUpdated"
    >
      <div
        class="absolute top-1/3 left-1/2 bg-cyan border translate-x-[-50%] translate-y-[-50%] p-5 flex text-xs sm:text-base w-[15rem] sm:w-[20rem] justify-between rounded-md"
      >
        <div class="flex justify-start gap-2">
          <icon-confirmed></icon-confirmed>
          <h1 class="text-green-500">{{ $t('landing.my_profile.changes_updated') }}</h1>
        </div>
        <icon-gray-close @click="closeChangesModal" class="cursor-pointer"></icon-gray-close>
      </div>
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
import { useRoute } from 'vue-router'
import IconBackArrow from '@/components/icons/IconBackArrow.vue'
import IconGrayClose from '@/components/icons/IconGrayClose.vue'
import IconConfirmed from '@/components/icons/IconConfirmed.vue'

const authUser = userStore()

const imageUrl = computed(() => {
  if (authUser.data.image) {
    return `${imagePath}${authUser.data.image}`
  } else {
    return '/default_profile.svg'
  }
})

const state = reactive({
  uploadedImage: null,
  displayImage: null,
  userEmail: authUser.data.email,
  showUsernameDiv: null,
  showPasswordDiv: null,
  username: authUser.data.name,
  oldUsername: authUser.data.name,
  password: null,
  oldPassword: null,
  newPasswordConfirmation: null,
  confirmModal: false,
  email: authUser.data.email,
  oldEmail: authUser.data.email,
  showEmailDiv: false,
  changesUpdated: false,
  password_confirmation: ''
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

  if (
    state.oldEmail !== state.email ||
    state.password !== state.oldPassword ||
    state.username !== state.oldUsername
  ) {
    const response = await updateUser(authUser.data.id, data)

    if (response.status === 200) {
      cancellAddDiv()
      state.changesUpdated = true
      authUser.setUserData(response.data)
    }
  }
}

const showConfirmModal = () => {
  state.confirmModal = !state.confirmModal
}

const cancellConfirm = () => {
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
    state.email = route.query.update_email
  }
})

const closeChangesModal = () => {
  state.changesUpdated = false
}
</script>
