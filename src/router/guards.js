import { userStore } from '@/stores/user'

export function isAuthenticated() {
  const user = userStore()

  console.log(user.data)
  // if (!token) {
  //   return '/'
  // }
  return true
}

export function guest() {
  if (token) {
    return '/news-feed'
  }
}
