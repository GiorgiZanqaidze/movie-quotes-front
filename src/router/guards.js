import { getToken } from '@/helpers/cookie_token/index.js'

export function isAuthenticated() {
  const token = getToken()

  if (!token) {
    return '/'
  }
}

export function guest() {
  const token = getToken()

  if (token) {
    return '/news-feed'
  }
}
