import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isVisible: {
      condition: false,
      name: null
    }
  }),
  actions: {
    toggleModal(modalName) {
      this.isVisible = {
        condition: !this.isVisible.condition,
        name: modalName
      }
    }
  }
})
