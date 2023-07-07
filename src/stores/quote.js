import { defineStore } from 'pinia'
import getQuotes from '@/services/getQuotes.js'

export const useQuoteStore = defineStore('quote', {
  state() {
    return {
      data: []
    }
  },
  actions: {
    async getQuotes(query) {
      try {
        const response = await getQuotes(query)
        this.setQuotes(response.data.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
    setQuotes(quotes) {
      this.data = quotes
    },
    modifyQuote(quote) {
      this.data = this.data.map((item) => {
        if (item.id === quote.id) {
          return quote
        }
        return item
      })
    },
    addQuote(quote) {
      this.data = [quote, ...this.data]
    },
    rememberQuoteId(id) {
      this.currentQuoteId = id
    }
  }
})
