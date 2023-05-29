<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[570px] sm:h-[704px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium flex flex-col pt-2"
  >
    <header class="flex flex-col items-center">
      <h1 class="text-white sm:mt-10 sm:text-3xl">{{ $t('modals.sign_up.title') }}</h1>
      <span class="text-mediumGray text-sm">{{ $t('modals.sign_up.welcome') }}</span>
    </header>
    <Form
      class="text-white mx-auto flex flex-col sm:gap-4 w-[340px] sm:w-[360px] gap-3 px-4 py-4 sm:px-0 sm:py-4"
      @submit="handleRegister"
    >
      <TheInput
        rules="required"
        id="name"
        type="name"
        name="name"
        :label="$t('modals.sign_up.name')"
        :placeholder="$t('modals.sign_up.placeholder_name')"
        InputClass="font-helventica_light text-[14px] sm:text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
        requiredIcon="true"
        @change-input="handleInput"
      />
      <TheInput
        rules="required"
        id="email"
        type="email"
        name="email"
        :label="$t('modals.sign_up.email')"
        :placeholder="$t('modals.sign_up.placeholder_email')"
        InputClass="font-helventica_light text-[14px] sm:text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
        requiredIcon="true"
        @change-input="handleInput"
      />
      <TheInput
        rules="required"
        id="password"
        type="password"
        name="password"
        :label="$t('modals.sign_up.password')"
        :placeholder="$t('modals.sign_up.placeholder_password')"
        InputClass="font-helventica_light text-[14px] sm:text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
        requiredIcon="true"
        @change-input="handleInput"
      />
      <TheInput
        rules="required"
        id="password_confirmation"
        type="password"
        name="password_confirmation"
        :label="$t('modals.sign_up.confirm_password')"
        :placeholder="$t('modals.sign_up.placeholder_confirm_password')"
        InputClass="font-helventica_light text-[14px] sm:text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        parentClass="flex flex-col gap-1"
        requiredIcon="true"
        @change-input="handleInput"
      />
      <button class="w-full bg-darkRed sm:py-1 rounded my-1">
        {{ $t('modals.sign_up.get_started') }}
      </button>
      <button class="w-full bg-transparent border sm:py-1 rounded sm:text-md text-sm py-1">
        <img
          src="@/assets/icons/google_icon.svg"
          alt="google"
          class="inline-block sm:w-[20px] mr-1"
        />
        {{ $t('modals.sign_up.google') }}
      </button>
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

<script>
import { Form } from 'vee-validate'
import TheInput from './TheInput.vue'
import { useModalStore } from '@/stores/modal'
import axios from '@/config/axios/index.js'
export default {
  components: {
    Form,
    TheInput
  },

  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },

  methods: {
    handleRegister() {
      axios
        .post('/register', this.formData)
        .then((response) => {
          this.$router.push('/login')
          this.$toaster.success('Account created successfully, now you can login!')
        })
        .catch((errors) => {
          console.log(errors)
        })
    },
    handleInput(data) {
      this.formData = {
        ...this.formData,
        [data.name]: data.value
      }
      console.log(this.formData)
    }
  },

  setup() {
    const modal = useModalStore()

    return { modal }
  }
}
</script>
