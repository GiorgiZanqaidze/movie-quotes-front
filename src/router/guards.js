// import { getToken } from '@/helpers/cookie_token/index.js'

export function isAuthenticated() {
  const value = `; ${document.cookie}`
  const parts = value.split(`token=`)
  const token = parts.length === 2 ? parts.pop().split(';').shift() : null

  console.log(value)

  if (!token) {
    return '/'
  }
}

export function guest() {
  const value = `; ${document.cookie}`
  const parts = value.split(`token=`)
  const token = parts.length === 2 ? parts.pop().split(';').shift() : null

  if (token) {
    return '/news-feed'
  }
}
