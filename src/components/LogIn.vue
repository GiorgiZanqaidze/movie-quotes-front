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
    >
      <TheInput
        rules="required"
        id="email"
        type="email"
        name="email"
        :label="$t('modals.login.email')"
        :placeholder="$t('modals.login.placeholder_email')"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
      />
      <TheInput
        rules="required"
        id="password"
        type="password"
        name="password"
        :label="$t('modals.login.password')"
        :placeholder="$t('modals.login.placeholder_password')"
        InputClass="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
      />
      <div class="flex justify-between text-sm">
        <TheInput
          id="remember_me"
          type="checkbox"
          name="remember_me"
          :label="$t('modals.login.remember_me')"
          parentClass="flex gap-2 items-center"
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
      <button class="w-full bg-transparent border sm:py-1 rounded text-sm sm:text-md py-1">
        <img src="@/assets/icons/google_icon.svg" alt="google" class="inline-block w-[20px] mr-1" />
        {{ $t('modals.login.google') }}
      </button>
      <span class="text-sm sm:text-[16px] text-center text-mediumGray"
        >{{ $t('modals.login.have_account') }}
        <button @click="modal.toggleModal('signUp', true)" class="text-mediumBlue underline">
          {{ $t('modals.login.sign_up') }}
        </button></span
      >
    </Form>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import TheInput from './TheInput.vue'
import { useModalStore } from '@/stores/modal'
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
