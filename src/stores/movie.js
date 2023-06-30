import { defineStore } from 'pinia'
import getMovies from '@/services/getMovies.js'
import getAllMovies from '@/services/getAllMovies.js'
export const useMovieStore = defineStore('movie', {
  state() {
    return {
      data: [],
      allMovieData: []
    }
  },
  actions: {
    async getMovies(query) {
      try {
        const response = await getMovies(query)
        console.log(response)
        this.setMovies(response.data.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },

    async getAll() {
      try {
        const response = await getAllMovies()
        console.log(response)
        this.allMovieData = response.data.data
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },

    updateMovies(data) {
      this.data.push(data)
    },

    setMovies(movies) {
      this.data = movies
    }
  }
})
