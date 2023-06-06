<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[500px] sm:h-[562px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium py-4 px-2"
  >
    <header class="flex flex-col items-center">
      <h1 class="text-white sm:mt-10 sm:text-3xl mb-2">{{ $t('modals.login.title') }}</h1>
      <span class="text-mediumGray text-sm mb-2">{{ $t('modals.login.welcome') }}</span>
    </header>
    <Form
      class="text-white w-[340px] sm:w-[360px] mx-auto flex flex-col gap-4 px-4 py-4 sm:px-0 sm:py-4"
      @submit="handleLogin"
      v-slot="{ errors, meta }"
    >
      <TextInput
        rules="required"
        id="email"
        type="email"
        name="email"
        :label="$t('modals.login.email')"
        :errors="errors"
        :meta="meta"
        :placeholder="$t('modals.login.placeholder_email')"
        :backEndErrors="backEndErrors"
        @change-input="handleInput"
      />
      <PasswordInput
        rules="required"
        id="password"
        type="password"
        name="password"
        :errors="errors"
        :meta="meta"
        :label="$t('modals.login.password')"
        :placeholder="$t('modals.login.placeholder_password')"
        @change-input="handleInput"
        :backEndErrors="backEndErrors"
      />
      <div class="flex justify-between text-sm">
        <CheckboxInput
          id="remember_me"
          type="checkbox"
          @change-input="handleInput"
          name="remember_me"
          :value="true"
          :label="$t('modals.login.remember_me')"
        />
        <a
          href="#"
          @click="modal.toggleModal('forgotPassword', true)"
          class="text-mediumBlue underline"
          >{{ $t('modals.login.forgot_password') }}</a
        >
      </div>
      <button class="w-full bg-darkRed sm:py-1 rounded mt-2 text-sm sm:text-md py-1">
        {{ $t('modals.login.sign_in') }}
      </button>

      <GoogleButton />
      <span class="text-sm sm:text-[16px] text-center text-mediumGray"
        >{{ $t('modals.login.have_account') }}
        <a href="#" @click="modal.toggleModal('signUp', true)" class="text-mediumBlue underline">
          {{ $t('modals.login.sign_up') }}
        </a></span
      >
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate'
import { useModalStore } from '@/stores/modal'
import loginUser from '@/services/loginUser.js'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import TextInput from '@/components/TextInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import CheckboxInput from '@/components/CheckboxInput.vue'
import { userStore } from '@/stores/user.js'
import axiosInstance from '@/config/axios/index'
import GoogleButton from '@/components/GoogleButton.vue'

const modal = useModalStore()
const user = userStore()

const route = useRouter()
let formData = {
  email: '',
  password: '',
  remember_me: false,
  device_name: 'browser'
}

let backEndErrors = ''

async function handleLogin() {
  const response = await loginUser(formData)

  if (response.status === 200) {
    user.setUser(response.data)
    route.push('/news-feed')
    modal.toggleModal('logIn', false)
  } else {
    backEndErrors = response.response.data.message
    console.log(backEndErrors)
  }
}

function handleInput(data) {
  if (data.name === 'remember_me') {
    formData = {
      ...formData,
      remember_me: !formData.remember_me
    }
  } else {
    formData = {
      ...formData,
      [data.name]: data.value
    }
  }
}
</script>
