<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[400px] sm:h-[402px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium py-4 px-2"
  >
    <header class="flex flex-col items-center mb-4">
      <h1 class="text-white sm:mt-8 sm:text-3xl mb-2">საჰასბბფჰფ</h1>
      <span class="text-mediumGray text-sm my-4 text-center max-w-[500px]">asfafs</span>
    </header>
    <button
      class="w-[300px] bg-darkRed mx-auto block rounded text-white py-1 text-sm md-text-sm text-center"
      @click="resendEmail"
    >
      დწდწდწ
    </button>
    <p v-if="description">ფწფწქფწ</p>
  </div>
</template>

<script setup>
import axiosInstance from '@/config/axios/index'
import { useRoute } from 'vue-router'

const route = useRoute()

const verifyToken = route.query.email_verify_token

async function resendEmail() {
  try {
    const response = await axiosInstance.post(`api/resend/email/verify/${verifyToken}`)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
</script>
