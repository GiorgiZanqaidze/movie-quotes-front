import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isVisible: {
      condition: false,
      name: null
    }
  }),
  actions: {
    toggleModal(modalName, showModal) {
      this.isVisible = {
        condition: showModal,
        name: modalName
      }
    }
  }
})
