<template>
  <button
    @click="logOut"
    class="text-white border text-sm sm:text-lg sm:py-[3px] px-2 sm:px-3 py-1 rounded bg-transparent"
  >
    Log Out
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import logOutUser from '@/services/logOutUser.js'
const route = useRouter()

async function logOut() {
  const result = await logOutUser()

  if (result.status === 200) {
    route.push({ name: 'home' })
  }
}
</script>
