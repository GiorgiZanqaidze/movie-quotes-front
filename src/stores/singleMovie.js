import { defineStore } from 'pinia'
import getSingleMovie from '@/services/getSingleMovie.js'
import deleteQuote from '@/services/deleteQuote'
import updateQuote from '@/services/updateQuote'

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
    },
    async editMovieQuote(id, data) {
      try {
        const response = await updateQuote(id, data)
        const quotes = this.data.quotes.map((item) => (item.id === id ? response.data.data : item))
        this.data.quotes = quotes
        console.log(quotes)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  },
  getters: {
    getCurrentQuote: (state) => state.data.quotes.find((item) => item.id === state.currentQuoteId)
  }
})
