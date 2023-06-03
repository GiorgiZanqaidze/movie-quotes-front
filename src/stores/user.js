import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state() {
    return {
      data: {}
    }
  },
  actions: {
    setUser(userData) {
      this.data = userData
    }
  }
})
