import { defineStore } from 'pinia'
import postComment from '@/services/postComment.js'

export const useCommentStore = defineStore('comment', {
  state() {
    return {
      data: []
    }
  },
  actions: {
    async postComment(data) {
      try {
        await postComment(data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
