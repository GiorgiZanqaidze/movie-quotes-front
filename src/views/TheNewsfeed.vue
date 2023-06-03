<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <RouterView name="navigation" />
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
const user = userStore()
const router = useRouter()

async function setUser() {
  try {
    const response = await axiosInstance.get('/api/user')
    user.setUser({ ...response })
  } catch (error) {
    console.log(error)
    router.push('/')
  }
}

onMounted(() => {
  setUser()
})
</script>
