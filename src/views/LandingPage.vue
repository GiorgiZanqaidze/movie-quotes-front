<template>
  <main>
    <TheParalax />
  </main>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import verifyUser from '@/services/verifyUser.js'
import TheParalax from '@/components/TheParalax.vue'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const modal = useModalStore()
const route = useRoute()

const router = useRouter()

onMounted(async () => {
  const passwordToken = route.query.reset_password_token
  if (passwordToken) {
    modal.toggleModal('newPassword', true)
  }

  const verifyToken = route.query.email_verify_token

  if (verifyToken) {
    modal.toggleModal('activatedEccount', true)

    const response = await verifyUser(verifyToken)

    if (response.response.status >= 400) {
      modal.toggleModal('linkExpired', true)
    }

    console.log(response.response.status)
  }
})
</script>
