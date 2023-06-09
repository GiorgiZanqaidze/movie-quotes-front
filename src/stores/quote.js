import { defineStore } from 'pinia'
import getQuotes from '@/services/getQuotes.js'

export const useQuoteStore = defineStore('quote', {
  state() {
    return {
      data: []
    }
  },
  actions: {
    async getQuotes() {
      try {
        const response = await getQuotes()
        this.setQuotes(response.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
    setQuotes(quotes) {
      this.data = quotes
    }
  }
})
