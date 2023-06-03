<template>
  <div class="text-white bg-mediumDark min-h-screen">
    <newsfeed-movies></newsfeed-movies>
    <write-quote></write-quote>
  </div>
</template>

<script>
// import getUser from '@/services/getUser.js'
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
      // axiosInstance.defaults.withCredentials = true

      // await axiosInstance.get('/sanctum/csrf-cookie')

      axiosInstance
        .get('/api/user')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },

  created() {
    this.getUser()
  }
}
</script>
