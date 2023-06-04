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

// router.beforeEach(async (to, _, next) => {
//   const store = await userStore()
//   console.log(store.data)
//   if (to.meta.requiresAuth && !store.isVerified) {
//     next({ name: 'home' })
//   } else if (!to.meta.requiresAuth && store.isVerified) {
//     next('/news-feed')
//   }
//   next()
// })

// router.beforeEach(async (to, from, next) => {
//   const store = userStore()
//   const userStore = pinia.useStore('user')
//   console.log(userStore)
//   if (to.meta.requiresAuth && !store.isVerified) {
//     next({ name: 'home' })
//   } else if (!to.meta.requiresAuth && store.isVerified) {
//     next('/news-feed')
//   }
//   next()
// })

export default router
