import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import TheNewsfeed from '@/views/TheNewsfeed.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import LandingHeader from '@/components/LandingHeader.vue'
import UserHeader from '@/components/UserHeader.vue'
import MoviesList from '@/views/MoviesList.vue'
import { userStore } from '@/stores/user'
import MovieDescription from '@/views/MovieDescription.vue'
import NotPermission from '@/views/NotPermission.vue'
import UserProfile from '@/views/UserProfile.vue'
import { useModalStore } from '@/stores/modal'
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
    {
      path: '/movies-list',
      name: 'moviesList',
      components: { default: MoviesList, navigation: UserNavigation, header: UserHeader },
      meta: { auth: true }
    },
    {
      path: '/movies-list/movie/:id',
      name: 'movieDescription',
      components: { default: MovieDescription, navigation: UserNavigation, header: UserHeader },
      meta: { auth: true }
    },
    {
      path: '/user-profile',
      name: 'userProfile',
      components: { default: UserProfile, navigation: UserNavigation, header: UserHeader },
      meta: { auth: true }
    },
    {
      path: '/not-permited-user',
      name: 'notPermited',
      components: { default: NotPermission },
      meta: { guest: true }
    },
    { path: '/:notFound(.*)', component: NotFoundPage, meta: { auth: true, guest: true } }
  ]
})

router.beforeEach(async (to, from, next) => {
  const user = userStore()
  const modal = useModalStore()
  await user.fetchUserData()

  if (from.name !== undefined) {
    modal.toggleModal('null', false)
  }
  if (to.meta.guest && !user.data) {
    next()
  } else if (to.meta.auth && user.data) {
    next()
  } else if (to.meta.auth && !user.data) {
    next({ name: 'notPermited' })
  } else if (to.meta.guest && user.data) {
    next({ name: 'newsFeed' })
  }
})

export default router
