import { defineStore } from 'pinia'
import postComment from '@/services/postComment.js'
import { useQuoteStore } from '@/stores/quote.js'

export const useCommentStore = defineStore('comment', {
  state() {
    return {
      data: []
    }
  },
  actions: {
    async postComment(data) {
      try {
        const response = await postComment(data)

        const quotes = useQuoteStore()

        quotes.addComment(response.data.quote[0])
        console.log(response.data.quote[0])
      } catch (error) {
        console.error(error)
      }
    }
  }
})
