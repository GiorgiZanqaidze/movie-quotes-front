import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import TheNewsfeed from '@/views/TheNewsfeed.vue'
import { isAuthenticated } from '@/router/guards.js'
import { guest } from '@/router/guards.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
      // beforeEnter: [guest]
    },
    {
      path: '/news-feed',
      name: 'newsFeed',
      component: TheNewsfeed
      // beforeEnter: [isAuthenticated]
    },
    {
      path: '/:notFoundPage',
      component: NotFoundPage
    }
  ]
})

export default router
