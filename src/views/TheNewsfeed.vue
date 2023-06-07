<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <newsfeed-movies></newsfeed-movies>
    <TheModal />
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user.js'
import axiosInstance from '@/config/axios/index'
import { onMounted, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RouterView } from 'vue-router'
import TheModal from '@/components/TheModal.vue'
</script>
