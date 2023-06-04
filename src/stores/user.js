import { defineStore } from 'pinia'
import axiosInstance from '@/config/axios/index'
import getUser from '@/services/getUser'
export const userStore = defineStore('user', {
  state() {
    return {
      data: {}
    }
  },
  actions: {
    async setUser(userData) {
      this.data = await { ...userData }
    },
    async fetchUserData() {
      try {
        const response = await getUser()
        const userData = response.data
        this.setUserData(userData)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
    setUserData(userData) {
      this.data = userData
    }
  },
  getters: {
    isVerified: (state) => state.data
  }
})
