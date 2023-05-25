<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[400px] sm:h-[402px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium py-2 px-2"
  >
    <header class="flex flex-col items-center">
      <h1 class="text-white sm:mt-8 sm:text-3xl mb-2">Forgot password?</h1>
      <span class="text-mediumGray text-sm mb-2 text-center max-w-[360px]"
        >Enter the email and we’ll send an email with instructions to reset your password</span
      >
    </header>
    <Form
      class="text-white w-[340px] sm:w-[360px] mx-auto flex flex-col gap-4 px-4 py-4 sm:px-0 sm:py-4"
    >
      <TheInput
        rules="required"
        id="email"
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
      /><button class="w-full bg-darkRed sm:py-1 rounded mt-2 text-sm sm:text-md py-1">
        Get Started
      </button>
      <div disable class="bg-transparent sm:py-1 rounded mt-2 text-sm sm:text-md py-1">
        <p @click="modal.toggleModal('logIn')" class="text-center cursor-pointer">
          <img src="@/assets/icons/left_arrow.svg" alt="arrow" class="inline-block mr-1" />Back to
          log in
        </p>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import TheInput from './TheInput.vue'

import { useModalStore } from '../stores/modal'

export default {
  components: {
    Form,
    TheInput
  },

  setup() {
    const modal = useModalStore()

    return { modal }
  }
}
</script>
