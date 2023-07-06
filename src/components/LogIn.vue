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
      v-slot="{ errors }"
    >
      <TextField
        id="email"
        name="email"
        requiredIcon="true"
        :errors="errors.email"
        v-model="state.email"
        @update:modelValue="(newValue) => (state.email = newValue)"
        :label="$t('modals.login.email')"
        :placeholder="$t('modals.login.placeholder_email')"
        :backEndErrors="backEndErrors?.[$i18n.locale]"
        rules="required"
        :signUp="true"
      />

      <PasswordField
        id="password"
        name="password"
        :label="$t('modals.sign_up.password')"
        :errors="errors.password"
        v-model="state.newPassword"
        @update:modelValue="(newValue) => (state.password = newValue)"
        :placeholder="$t('landing.my_profile.new_password')"
        rules="required|alpha|min:8|max:15"
        :signUp="true"
        requiredIcon="true"
        :backEndErrors="backEndErrors?.[$i18n.locale]"
      />

      <div class="flex justify-between text-xs sm:text-md">
        <CheckboxInput
          id="remember_me"
          type="checkbox"
          @change-input="handleInput"
          name="remember_me"
          :value="true"
          :label="$t('modals.login.remember_me')"
        />
        <button
          href="#"
          @click="modal.toggleModal('forgotPassword', true)"
          class="text-mediumBlue underline text-xs sm:text-md"
        >
          {{ $t('modals.login.forgot_password') }}
        </button>
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
import CheckboxInput from '@/components/CheckboxInput.vue'
import { userStore } from '@/stores/user.js'
import GoogleButton from '@/components/GoogleButton.vue'
import TextField from '@/components/TextField.vue'
import { reactive, ref } from 'vue'
import PasswordField from '@/components/PasswordField.vue'

const modal = useModalStore()

const user = userStore()

const route = useRouter()

const state = reactive({
  email: '',
  password: ''
})

let formData = {
  remember_me: false,
  device_name: 'browser'
}

let backEndErrors = ref('')

async function handleLogin() {
  const response = await loginUser({ ...formData, email: state.email, password: state.password })

  if (response.status === 200) {
    user.setUser(response.data)
    route.push('/news-feed')
    modal.toggleModal('logIn', false)
  } else {
    console.log(response)
    backEndErrors.value = JSON.parse(response.response.data.message)
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
