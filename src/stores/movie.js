import { defineStore } from 'pinia'
import getMovies from '@/services/getMovies.js'

export const useMovieStore = defineStore('movie', {
  state() {
    return {
      data: []
    }
  },
  actions: {
    async getMovies() {
      try {
        const response = await getMovies()
        this.setMovies(response.data.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
    setMovies(movies) {
      this.data = movies
    }
  }
})
