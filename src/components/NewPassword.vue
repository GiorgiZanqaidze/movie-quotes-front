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
    >
      <the-input
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
      ></the-input>
      <the-input
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
      ></the-input>
      <button class="w-full bg-darkRed py-1 rounded my-1 text-sm sm:text-md">
        {{ $t('modals.new_password.button') }}
      </button>
      <p @click="modal.toggleModal('logIn', true)" class="text-center cursor-pointer text-sm">
        <img src="@/assets/icons/left_arrow.svg" alt="arrow" class="inline-block mr-1" />{{
          $t('modals.forgot_password.back_to_login')
        }}
      </p>
    </Form>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import { useModalStore } from '@/stores/modal'
import resetPassword from '@/services/resetPassword'
export default {
  components: {
    Form
  },

  data() {
    return {
      formData: {
        password: '',
        password_confirmation: ''
      },
      resetPasswordToken: ''
    }
  },

  created() {
    this.resetPasswordToken = this.$route.query.reset_password_token

    console.log(this.resetPasswordToken)
  },

  methods: {
    handleSubmit() {
      resetPassword(this.formData, this.resetPasswordToken)
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
