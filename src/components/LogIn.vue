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
      <text-input
        rules="required|email"
        id="email"
        type="email"
        name="email"
        :label="$t('modals.login.email')"
        :errors="errors"
        :meta="meta"
        :placeholder="$t('modals.login.placeholder_email')"
        @change-input="handleInput"
      ></text-input>
      <password-input
        rules="required"
        id="password"
        type="password"
        name="password"
        :errors="errors"
        :meta="meta"
        :label="$t('modals.login.password')"
        :placeholder="$t('modals.login.placeholder_password')"
        @change-input="handleInput"
      ></password-input>
      <div class="flex justify-between text-sm">
        <checkbox-input
          id="remember_me"
          type="checkbox"
          name="remember_me"
          :label="$t('modals.login.remember_me')"
        ></checkbox-input>
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
        <a href="#" @click="modal.toggleModal('signUp', true)" class="text-mediumBlue underline">
          {{ $t('modals.login.sign_up') }}
        </a></span
      >
    </Form>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import { useModalStore } from '@/stores/modal'
import axiosinstance from '@/config/axios/index.js'
import loginUser from '@/services/loginUser.js'

export default {
  components: {
    Form
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
        device_name: 'browser'
      }
    }
  },
  methods: {
    async handleLogin() {
      await axiosinstance.get('/sanctum/csrf-cookie')

      await axiosinstance
        .post('/api/login', this.formData)
        .then((response) => {
          this.$router.push('/news-feed')
          this.modal.toggleModal('logIn', false)
        })
        .catch((error) => {
          console.error(error)
        })
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
