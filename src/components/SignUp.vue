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
      v-slot="{ errors, meta }"
    >
      <text-input
        rules="required|min:3|max:15|alpha"
        id="name"
        type="name"
        name="name"
        :label="$t('modals.sign_up.name')"
        :placeholder="$t('modals.sign_up.placeholder_name')"
        :errors="errors"
        :meta="meta"
        requiredIcon="true"
        @change-input="handleInput"
      ></text-input>

      <text-input
        rules="required|email"
        id="email"
        type="email"
        name="email"
        :label="$t('modals.sign_up.email')"
        :placeholder="$t('modals.sign_up.placeholder_email')"
        :errors="errors"
        :meta="meta"
        requiredIcon="true"
        @change-input="handleInput"
      ></text-input>

      <password-input
        rules="required|min:8|max:15|alpha"
        id="password"
        type="password"
        name="password"
        :label="$t('modals.sign_up.password')"
        :placeholder="$t('modals.sign_up.placeholder_password')"
        :errors="errors"
        :meta="meta"
        requiredIcon="true"
        @change-input="handleInput"
      ></password-input>

      <password-input
        rules="required|confirmed:@password"
        id="password_confirmation"
        type="password"
        name="password_confirmation"
        :label="$t('modals.sign_up.confirm_password')"
        :placeholder="$t('modals.sign_up.confirm_password')"
        :errors="errors"
        :meta="meta"
        requiredIcon="true"
        @change-input="handleInput"
      ></password-input>

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
import { useModalStore } from '@/stores/modal'
import axios from '@/config/axios/index.js'
import registerUser from '@/services/registerUser.js'
export default {
  components: {
    Form
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
    async handleRegister() {
      // registerUser(this.formData)

      axios.defaults.withCredentials = true

      await axios.get('http://localhost:8000/sanctum/csrf-cookie')

      axios
        .post('http://localhost:8000/api/register', this.formData, {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-Requested-With': 'XMLHttpRequest'
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error)
        })

      this.modal.toggleModal('checkEmail', true)
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
