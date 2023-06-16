import { defineStore } from 'pinia'
import getSingleMovie from '@/services/getSingleMovie.js'

export const useSingleMovieStore = defineStore('singleMovie', {
  state() {
    return {
      data: ''
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
    }
  }
})
