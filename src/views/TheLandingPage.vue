<template>
  <main>
    <TheParalax />
    <TheSignUp v-if="modal.isVisible.condition && modal.isVisible.name === 'signUp'" />
    <TheLogin v-if="modal.isVisible.condition && modal.isVisible.name === 'logIn'" />
  </main>
</template>

<script>
import TheSignUp from '../components/TheSignUp.vue'
import TheLogin from '../components/TheLogin.vue'
import TheParalax from '../components/TheParalax.vue'
import { useModalStore } from '@/stores/modal'
export default {
  components: {
    TheSignUp,
    TheLogin,
    TheParalax
  },

  setup() {
    const modal = useModalStore()
    return { modal }
  }
}
</script>
