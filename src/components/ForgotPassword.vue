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
      v-slot="{ errors, meta }"
    >
      <TextInput
        rules="required|email"
        id="email"
        type="email"
        name="email"
        :label="$t('modals.forgot_password.email')"
        :placeholder="$t('modals.forgot_password.placeholder_email')"
        @change-input="handleInput"
        :errors="errors"
        :meta="meta"
      />

      <button class="w-full bg-darkRed sm:py-1 rounded mt-2 text-sm sm:text-md py-1">
        {{ $t('modals.forgot_password.get_started') }}
      </button>
      <div disable class="bg-transparent sm:py-1 rounded mt-2 text-sm sm:text-md py-1">
        <p @click="modal.toggleModal('logIn', true)" class="text-center cursor-pointer">
          <img src="@/assets/icons/left_arrow.svg" alt="arrow" class="inline-block mr-1" />{{
            $t('modals.forgot_password.back_to_login')
          }}
        </p>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import updatePassword from '@/services/updatePassword.js'

import { useModalStore } from '../stores/modal'
import TextInput from '@/components/TextInput.vue'

export default {
  components: {
    Form,
    TextInput
  },

  data() {
    return {
      formData: {
        email: ''
      }
    }
  },

  methods: {
    handleResetPassword() {
      updatePassword(this.formData)
    },

    handleInput(data) {
      this.formData = {
        ...this.formData,
        [data.name]: data.value
      }
    }
  },

  setup() {
    const modal = useModalStore()

    return { modal }
  }
}
</script>
