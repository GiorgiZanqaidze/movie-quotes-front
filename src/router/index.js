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
      meta: { guest: true }
    },
    {
      path: '/news-feed',
      name: 'newsFeed',
      components: { default: TheNewsfeed, navigation: UserNavigation, header: UserHeader },
      meta: { auth: true }
    },

    { path: '/:notFound(.*)', component: NotFoundPage }
  ]
})

router.beforeEach(async (to, from, next) => {
  const store = userStore()

  await store.fetchUserData()

  if (to.meta.guest && !store.data) {
    next()
  } else if (to.meta.auth && store.data) {
    next()
  } else if (to.meta.auth && !store.data) {
    next({ name: 'home' })
  } else if (to.meta.guest && store.data) {
    next({ name: 'newsFeed' })
  }
})

export default router
