<template>
  <div class="text-white">{{ user.name }}</div>
</template>

<script>
import getUser from '@/services/getUser.js'
import { userStore } from '@/stores/user.js'
import axiosInstance from '@/config/axios/index'
export default {
  data() {
    return {
      user: {}
    }
  },

  methods: {
    async getUser() {
      try {
        const response = await axiosInstance.get('/user')
        this.user = { ...response.data }
      } catch (error) {
        console.log(error)
      }
    }
  },

  created() {
    this.getUser()
  }
}
</script>
