<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[400px] sm:h-[402px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium py-2 px-2"
  >
    <header class="flex flex-col items-center">
      <h1 class="text-white sm:mt-8 sm:text-3xl mb-2">
        {{ $t('modals.forgot_password.title') }}
      </h1>
      <span class="text-mediumGray text-sm mb-2 text-center max-w-[360px]">{{
        $t('modals.forgot_password.welcome')
      }}</span>
    </header>
    <Form
      class="text-white w-[340px] sm:w-[360px] mx-auto flex flex-col gap-4 px-4 py-4 sm:px-0 sm:py-4"
      @submit="handleResetPassword"
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
        rules="required|email"
        :signUp="true"
      />

      <button class="w-full bg-darkRed sm:py-1 rounded mt-2 text-sm sm:text-md py-1">
        {{ $t('modals.forgot_password.get_started') }}
      </button>
      <div disable class="bg-transparent sm:py-1 rounded mt-2 text-sm sm:text-md py-1">
        <p @click="modal.toggleModal('logIn', true)" class="text-center cursor-pointer">
          <icon-left-arrow alt="arrow" class="inline-block mr-1"></icon-left-arrow>
          {{ $t('modals.forgot_password.back_to_login') }}
        </p>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate'
import updatePassword from '@/services/updatePassword.js'
import TextField from '@/components/TextField.vue'
import { useModalStore } from '../stores/modal'
import { reactive, ref } from 'vue'
import IconLeftArrow from '@/components/icons/IconLeftArrow.vue'

const modal = useModalStore()

const backEndErrors = ref('')

const state = reactive({
  email: ''
})

async function handleResetPassword() {
  const response = await updatePassword({ email: state.email })

  if (response.status === 200) {
    modal.toggleModal('null', false)
  } else {
    backEndErrors.value = JSON.parse(response.response.data.message)
  }
}
</script>
