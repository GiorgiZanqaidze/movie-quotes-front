<template>
  <main>
    <TheParalax />
    <TheModal v-if="modal.isVisible.condition" />
  </main>
</template>

<script setup>
import TheModal from '@/components/TheModal.vue'
import { useModalStore } from '@/stores/modal'
import verifyUser from '@/services/verifyUser.js'
import TheParalax from '@/components/TheParalax.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const modal = useModalStore()
const route = useRoute()

onMounted(() => {
  const passwordToken = route.query.reset_password_token
  if (passwordToken) {
    modal.toggleModal('newPassword', true)
  }

  const verifyToken = route.query.email_verify_token

  if (verifyToken) {
    modal.toggleModal('activatedEccount', true)

    verifyUser(verifyToken)
  }
})
</script>
