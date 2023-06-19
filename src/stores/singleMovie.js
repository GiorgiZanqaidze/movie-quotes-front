import { defineStore } from 'pinia'
import getSingleMovie from '@/services/getSingleMovie.js'
import deleteQuote from '@/services/deleteQuote'

export const useSingleMovieStore = defineStore('singleMovie', {
  state() {
    return {
      data: '',
      currentQuoteId: null
    }
  },
  actions: {
    async getMovie(id) {
      try {
        const response = await getSingleMovie(id)
        this.data = response.data.data
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },

    rememberQuoteId(id) {
      this.currentQuoteId = id
    },
    async deleteMovieQuote(id) {
      const response = await deleteQuote(id)
      if (response.status === 200) {
        const filteredQuotes = this.data.quotes.filter((quote) => quote.id !== id)
        this.data.quotes = filteredQuotes
      }
    }
  },
  getters: {
    getCurrentQuote: (state) => state.data.quotes.find((item) => item.id === state.currentQuoteId)
  }
})