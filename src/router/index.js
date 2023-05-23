import { createRouter, createWebHistory } from 'vue-router'
import TheLandingPage from '../views/TheLandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheLandingPage
    }
  ]
})

export default router
