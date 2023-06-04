import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import TheNewsfeed from '@/views/TheNewsfeed.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import LandingHeader from '@/components/LandingHeader.vue'
import UserHeader from '@/components/UserHeader.vue'
import { userStore } from '@/stores/user'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      components: { default: LandingPage, header: LandingHeader },
      meta: { requiresAuth: false }
    },
    {
      path: '/news-feed',
      name: 'newsFeed',
      components: { default: TheNewsfeed, navigation: UserNavigation, header: UserHeader },
      meta: { requiresAuth: true }
    },

    { path: '/:notFound(.*)', component: NotFoundPage }
  ]
})

router.beforeEach((to, _, next) => {
  const store = userStore()
  console.log(store)
  if (to.meta.requiresAuth && !store.isVerified) {
    next({ name: 'home' })
  } else if (to.meta.requiresAuth && !store.isVerified) {
    next()
  }
  next()
})

export default router
