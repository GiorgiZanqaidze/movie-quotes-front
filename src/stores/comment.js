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

        console.log(response.data.quote)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
