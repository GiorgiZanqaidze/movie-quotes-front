import { defineStore } from 'pinia'
import postLike from '@/services/postLike'
import postDislike from '@/services/postDislike'
import { useQuoteStore } from '@/stores/quote.js'

export const useLikeStore = defineStore('like', {
  state() {
    return {
      data: {}
    }
  },
  actions: {
    async likeQuote(data) {
      try {
        const response = await postLike(data)

        const quotes = useQuoteStore()

        quotes.modifyQuote(response.data.modified_quote)
      } catch (error) {
        console.error(error)
      }
    },

    async dislikeQuote(data) {
      try {
        const response = await postDislike(data)

        const quotes = useQuoteStore()

        quotes.modifyQuote(response.data.modified_quote)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
