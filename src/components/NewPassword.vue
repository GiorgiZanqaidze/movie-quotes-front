<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[550px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium flex flex-col py-4"
  >
    <header class="flex flex-col items-center w-[400px] mx-auto">
      <h1 class="text-white sm:mt-10 sm:mb-5 sm:text-3xl text-center">
        {{ $t('modals.new_password.title') }}
      </h1>
      <span class="text-mediumGray text-sm text-center">{{
        $t('modals.new_password.welcome')
      }}</span>
    </header>
    <Form
      class="text-white mx-auto flex flex-col sm:gap-4 w-[340px] sm:w-[400px] gap-3 px-4 py-10 sm:px-0 sm:py-4"
      @submit="handleSubmit"
      v-slot="{ errors }"
    >
      <PasswordField
        id="password"
        name="password"
        :label="$t('modals.sign_up.password')"
        :errors="errors.password"
        v-model="state.password"
        @update:modelValue="(newValue) => (state.password = newValue)"
        :placeholder="$t('landing.my_profile.new_password')"
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
        :placeholder="$t('modals.sign_up.confirm_password')"
        rules="required|confirmed:@password"
        :signUp="true"
        requiredIcon="true"
      />

      <button class="w-full bg-darkRed py-1 rounded my-1 text-sm sm:text-md">
        {{ $t('modals.new_password.button') }}
      </button>
      <p @click="modal.toggleModal('logIn', true)" class="text-center cursor-pointer text-sm">
        <icon-left-arrow alt="arrow" class="inline-block mr-1"></icon-left-arrow>
        {{ $t('modals.forgot_password.back_to_login') }}
      </p>
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate'
import { useModalStore } from '@/stores/modal'
import resetPassword from '@/services/resetPassword'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import PasswordField from '@/components/PasswordField.vue'
import IconLeftArrow from '@/components/icons/IconLeftArrow.vue'

const modal = useModalStore()

const state = reactive({
  password: '',
  password_confirmation: ''
})

const route = useRoute()

let resetPasswordToken = ''

onMounted(() => {
  resetPasswordToken = route.query.reset_password_token
})

async function handleSubmit() {
  let formData = {
    password: state.password,
    password_confirmation: state.password_confirmation
  }
  const response = await resetPassword(formData, resetPasswordToken)

  if (response.status === 200) {
    modal.toggleModal('logIn', true)
  }
}
</script>
