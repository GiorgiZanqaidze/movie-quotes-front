<template>
  <div class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] bg-black/75"></div>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 w-[601px] h-[704px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium"
  >
    <header class="flex flex-col items-center">
      <h1 class="text-white sm:mt-10 sm:text-3xl">Create an account</h1>
      <span class="text-mediumGray text-sm">Start your journey!</span>
    </header>
    <Form class="text-white w-[360px] mx-auto flex flex-col sm:gap-4">
      <TheInput
        rules="required"
        id="name"
        type="name"
        name="name"
        label="name"
        placeholder="At least 3 & max.15 lower case characters"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
        requiredIcon="true"
      />
      <TheInput
        rules="required"
        id="email"
        type="email"
        name="email"
        label="email"
        placeholder="Enter your email"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
        requiredIcon="true"
      />
      <TheInput
        rules="required"
        id="password"
        type="password"
        name="password"
        label="password"
        placeholder="At least 8 & max.15 lower case characters"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
        requiredIcon="true"
      />
      <TheInput
        rules="required"
        id="password_confirmation"
        type="password"
        name="password_confirmation"
        label="password"
        placeholder="Confirm Password"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
        requiredIcon="true"
      />
      <button class="w-full bg-darkRed sm:py-1 rounded mt-2">Get Started</button>
      <button class="w-full bg-transparent border sm:py-1 rounded">
        <img src="@/assets/icons/google_icon.svg" alt="google" class="inline-block w-[20px] mr-1" />
        Sign up with Google
      </button>
      <span class="sm:text-[16px] text-center text-mediumGray"
        >Already have an account? <button class="text-mediumBlue">Log In</button></span
      >
    </Form>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import TheInput from './TheInput.vue'
export default {
  components: {
    Form,
    TheInput
  }
}
</script>
