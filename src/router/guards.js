import { userStore } from '@/stores/user'

export default function navigationGuards() {}
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
