<template>
  <div class="text-white">{{ user.name }}</div>
</template>

<script>
import getUser from '@/services/getUser.js'
import { userStore } from '@/stores/user.js'
import axiosInstance from '@/config/axios/index'
import { getToken } from '@/helpers/cookie_token/index'

import axios from 'axios'
export default {
  data() {
    return {
      user: {}
    }
  },

  methods: {
    async getUser() {
      axios.defaults.withCredentials = true

      await axios.get('http://localhost:8000/sanctum/csrf-cookie')

      axios
        .get('http://localhost:8000/api/user', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then((response) => {
          console.log(response.data)
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
