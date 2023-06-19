import { defineStore } from 'pinia'
import getSingleMovie from '@/services/getSingleMovie.js'

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
        this.setMovie(response.data.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
    setMovie(movie) {
      this.data = movie
    },
    rememberQuoteId(id) {
      this.currentQuoteId = id
    }
  },
  getters: {
    getCurrentQuote: (state) => state.data.quotes.find((item) => item.id === state.currentQuoteId)
  }
})
