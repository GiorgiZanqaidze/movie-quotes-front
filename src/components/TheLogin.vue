<template>
  <div
    @click="modal.toggleModal('logIn')"
    class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] bg-black/75"
  ></div>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 w-[601px] h-[562px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium"
  >
    <header class="flex flex-col items-center">
      <h1 class="text-white sm:mt-10 sm:text-3xl mb-2">Log in to your account</h1>
      <span class="text-mediumGray text-sm mb-2">Welcome back! Please enter your details.</span>
    </header>
    <Form class="text-white w-[360px] mx-auto flex flex-col sm:gap-4">
      <TheInput
        rules="required"
        id="email"
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
      />
      <TheInput
        rules="required"
        id="password"
        type="password"
        name="password"
        label="Confirm Password"
        placeholder="Password"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
      />
      <button class="w-full bg-darkRed sm:py-1 rounded mt-2">Get Started</button>
      <button class="w-full bg-transparent border sm:py-1 rounded">
        <img src="@/assets/icons/google_icon.svg" alt="google" class="inline-block w-[20px] mr-1" />
        Sign up with Google
      </button>
      <span class="sm:text-[16px] text-center text-mediumGray"
        >Don't have an account? <button class="text-mediumBlue">Sign Up</button></span
      >
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import TheInput from './TheInput.vue'

import { useModalStore } from '@/stores/modal'
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    TheInput
  },

  setup() {
    const modal = useModalStore()

    return { modal }
  }
}
</script>
