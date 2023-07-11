<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[30rem] sm:h-[750px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium flex flex-col pt-2"
  >
    <header class="flex flex-col items-center">
      <h1 class="text-white sm:mt-10 sm:text-3xl">{{ $t('modals.sign_up.title') }}</h1>
      <span class="text-mediumGray text-sm">{{ $t('modals.sign_up.welcome') }}</span>
    </header>
    <Form
      class="text-white mx-auto flex flex-col sm:gap-4 w-[340px] sm:w-[360px] gap-3 px-4 py-4 sm:px-0 sm:py-4"
      @submit="handleRegister"
      v-slot="{ errors }"
    >
      <TextField
        id="name"
        name="name"
        requiredIcon="true"
        :errors="errors.name"
        v-model="state.name"
        @update:modelValue="(newValue) => (state.name = newValue)"
        :label="$t('modals.sign_up.name')"
        :placeholder="$t('modals.sign_up.placeholder_name')"
        rules="required|min:3|max:15|alpha"
        :signUp="true"
      />

      <TextField
        id="email"
        name="email"
        requiredIcon="true"
        :errors="errors.email"
        v-model="state.email"
        @update:modelValue="(newValue) => (state.email = newValue)"
        :label="$t('modals.sign_up.email')"
        :placeholder="$t('modals.sign_up.placeholder_email')"
        rules="required|email"
        :signUp="true"
        :backEndErrors="backEndErrors?.[$i18n.locale]"
      />

      <PasswordField
        id="password"
        name="password"
        :label="$t('modals.sign_up.password')"
        :errors="errors.password"
        v-model="state.newPassword"
        @update:modelValue="(newValue) => (state.password = newValue)"
        :placeholder="$t('modals.sign_up.password')"
        rules="required|alpha|min:8|max:15"
        :signUp="true"
        requiredIcon="true"
      />

      <PasswordField
        id="password_confirmation"
        name="password_confirmation"
        :label="$t('modals.sign_up.confirm_password')"
        :errors="errors.password_confirmation"
        v-model="state.password_confirmation"
        @update:modelValue="(newValue) => (state.password_confirmation = newValue)"
        :placeholder="$t('modals.sign_up.password')"
        rules="required|confirmed:@password"
        :signUp="true"
        requiredIcon="true"
      />

      <button class="w-full bg-darkRed sm:py-1 rounded my-1">
        {{ $t('modals.sign_up.get_started') }}
      </button>

      <GoogleButton />
      <span class="sm:text-md text-sm text-center text-mediumGray"
        >{{ $t('modals.sign_up.have_account') }}
        <a
          href="#"
          @click="modal.toggleModal('logIn', true)"
          class="text-mediumBlue sm:text-md text-sm"
        >
          {{ $t('modals.sign_up.log_in') }}
        </a></span
      >
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate'
import { useModalStore } from '@/stores/modal'
import registerUser from '@/services/registerUser.js'
import PasswordField from '@/components/PasswordField.vue'
import { ref, reactive } from 'vue'
import GoogleButton from '@/components/GoogleButton.vue'
import TextField from '@/components/TextField.vue'

const state = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const modal = useModalStore()

let backEndErrors = ref(null)

async function handleRegister() {
  const response = await registerUser({
    name: state.name,
    email: state.email,
    password: state.password,
    password_confirmation: state.password_confirmation
  })

  if (response.status === 200) {
    modal.toggleModal('checkEmail', true)
  } else {
    backEndErrors.value = JSON.parse(response.response.data.errors.email)
  }
}
</script>
