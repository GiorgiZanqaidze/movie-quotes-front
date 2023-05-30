import { defineStore } from 'pinia'

export const useModalStore = defineStore('user', {
  state() {
    return {
      data: null
    }
  },
  actions: {
    toggleModal(modalName, showModal) {
      this.isVisible = {
        condition: showModal,
        name: modalName
      }
    }
  }
})
