import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state() {
    return {
      data: {}
    }
  },
  actions: {
    getUser(userData) {
      this.data = userData
    }
  }
})
