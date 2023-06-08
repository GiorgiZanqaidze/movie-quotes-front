import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state() {
    return {
      isVisible: {
        condition: false,
        name: null
      },
      notifications: false
    }
  },
  actions: {
    toggleModal(modalName, showModal) {
      this.isVisible = {
        condition: showModal,
        name: modalName
      }
    },
    toggleNotifications() {
      this.notifications = !this.notifications
    }
  }
})
