import axios from '@/config/axios/index.js'

export const getToken = () => {
  const value = `; ${document.cookie}`
  const parts = value.split(`XSRF-TOKEN=`)
  const token = parts.length === 2 ? parts.pop().split(';').shift() : null

  return token
}
