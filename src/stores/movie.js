import { defineStore } from 'pinia'
import getMovies from '@/services/getMovies.js'
import getAllMovies from '@/services/getAllMovies.js'
export const useMovieStore = defineStore('movie', {
  state() {
    return {
      data: [],
      allMovieData: [],
      filteredMovies: []
    }
  },
  actions: {
    async getMovies(query) {
      try {
        const response = await getMovies(query)
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
      this.filteredMovies.push(data)
    },

    setMovies(movies) {
      this.data = movies
    },

    filterMovies(searchTerm) {
      if (!searchTerm) {
        this.filteredMovies = this.data
      }
      const searchTermLowerCase = searchTerm.toLowerCase()
      const filtered = this.data.filter((movie) => {
        const titleEn = movie.title.en.toLowerCase()
        const titleKa = movie.title.ka.toLowerCase()
        return titleEn.includes(searchTermLowerCase) || titleKa.includes(searchTermLowerCase)
      })

      this.filteredMovies = [...filtered]
    }
  }
})
