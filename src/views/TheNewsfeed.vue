<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <newsfeed-movies></newsfeed-movies>
    <write-quote></write-quote>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user.js'
import axiosInstance from '@/config/axios/index'
import { onMounted, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RouterView } from 'vue-router'
import getUser from '@/services/getUser'

const user = userStore()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  user.fetchUserData()
  const userData = user.data
})
</script>
