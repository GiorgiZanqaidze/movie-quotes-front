import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import TheNewsfeed from '@/views/TheNewsfeed.vue'
import { isAuthenticated } from '@/router/guards.js'
import { guest } from '@/router/guards.js'
import UserNavigation from '@/components/UserNavigation.vue'
import LandingHeader from '@/components/LandingHeader.vue'
import UserHeader from '@/components/UserHeader.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      components: { default: LandingPage, header: LandingHeader }
      // beforeEnter: [guest]
    },
    {
      path: '/news-feed',
      name: 'newsFeed',
      components: { default: TheNewsfeed, navigation: UserNavigation, header: UserHeader }
      // beforeEnter: [isAuthenticated]
    },

    { path: '/:notFound(.*)', component: NotFoundPage }
  ]
})

export default router
