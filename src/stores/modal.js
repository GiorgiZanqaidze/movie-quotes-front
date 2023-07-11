import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state() {
    return {
      isVisible: {
        condition: JSON.parse(localStorage.getItem('modalCondition')) || false,
        name: localStorage.getItem('modalName') || null
      },
      notifications: false,
      searchModal: false
    }
  },
  actions: {
    toggleModal(modalName, showModal) {
      ;(this.isVisible = {
        condition: showModal,
        name: modalName
      }),
        localStorage.setItem('modalCondition', showModal)
      localStorage.setItem('modalName', modalName)
    },
    toggleNotifications() {
      this.notifications = !this.notifications
    },
    toggleSearchModal() {
      this.searchModal = !this.searchModal
    }
  }
})
