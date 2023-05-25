<template>
  <div>
    <div
      @click="modal.toggleModal('null', false)"
      class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] bg-black/75"
    ></div>
    <the-login v-if="modal.isVisible.name === 'logIn' && modal.isVisible.condition"></the-login>
    <!-- <sign-up v-if="modal.isVisible.name === 'signUp' && modal.isVisible.condition"></sign-up> -->
    <forgot-password
      v-if="modal.isVisible.name === 'forgotPassword' && modal.isVisible.condition"
    ></forgot-password>
    <!-- <check-email
      v-if="modal.isVisible.name === 'signUp' && modal.isVisible.condition"
    ></check-email> -->
    <new-password
      v-if="modal.isVisible.name === 'signUp' && modal.isVisible.condition"
    ></new-password>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modal'
export default {
  setup() {
    const modal = useModalStore()

    return { modal }
  }
}
</script>
