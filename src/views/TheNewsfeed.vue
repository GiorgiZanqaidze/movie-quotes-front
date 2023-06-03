<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <newsfeed-movies></newsfeed-movies>
    <write-quote></write-quote>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user.js'
import axiosInstance from '@/config/axios/index'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { RouterView } from 'vue-router'
import getUser from '@/services/getUser'
const userData = userStore()
const router = useRouter()

async function setUser() {
  const user = await getUser()

  if (user.status === 200) {
    userData.setUser(user.data)
  } else {
    router.push({ name: 'home' })
  }
}

onMounted(() => {
  setUser()
})
</script>
