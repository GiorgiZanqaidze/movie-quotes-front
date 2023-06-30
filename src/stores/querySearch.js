import { defineStore } from 'pinia'
export const useQuerySearchStore = defineStore('query', {
  state() {
    return {
      searchQuery: '',
      moviesSearchQuery: '',
      type: ''
    }
  },
  actions: {
    setSearchQuery(text) {
      this.setType(text)
      this.toSearchText(text)
    },

    setType(text) {
      const symbol = text.split('')[0]
      if (symbol === '@') {
        this.type = 'movie'
      } else if (symbol === '#') {
        this.type = 'quote'
      } else {
        this.type = ''
      }
    },

    toSearchText(text) {
      const toArray = text.split('')
      toArray.shift()
      const searchText = toArray.join('')
      this.searchQuery = searchText
    },

    setMovieQuery(text) {
      this.moviesSearchQuery = text
    }
  }
})
