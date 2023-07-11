import { defineStore } from 'pinia'
import getSingleMovie from '@/services/getSingleMovie.js'
import deleteQuote from '@/services/deleteQuote'
import updateQuote from '@/services/updateQuote'
import updateMovie from '@/services/updateMovie'

export const useSingleMovieStore = defineStore('singleMovie', {
  state() {
    return {
      data: [],
      currentQuoteId: null
    }
  },
  actions: {
    async getMovie(id) {
      try {
        const response = await getSingleMovie(id)
        this.setMovie(response.data.data)
        return response.data.data
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },

    setMovie(data) {
      this.data = data
    },

    addMovieQuote(newQuote) {
      this.data.quotes = [newQuote, ...this.data.quotes]
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
    },

    async editMovie(id, data) {
      try {
        const response = await updateMovie(id, data)
        return response
      } catch (error) {
        console.error(error)
      }
    }
  },
  getters: {
    getCurrentQuote: (state) => state.data.quotes.find((item) => item.id === state.currentQuoteId)
  }
})
