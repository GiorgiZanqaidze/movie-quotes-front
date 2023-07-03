import { defineStore } from 'pinia'
import postLike from '@/services/postLike'
import postDislike from '@/services/postDislike'

export const useLikeStore = defineStore('like', {
  state() {
    return {
      data: {}
    }
  },
  actions: {
    async likeQuote(data) {
      try {
        await postLike(data)
      } catch (error) {
        console.error(error)
      }
    },

    async dislikeQuote(data) {
      try {
        await postDislike(data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
