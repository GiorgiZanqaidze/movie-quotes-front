import axios from '@/config/axios/index.js'

export const getToken = () => {
  const value = `; ${document.cookie}`
  const parts = value.split(`token=`)
  const token = parts.length === 2 ? parts.pop().split(';').shift() : null

  return token
}

export const setToken = (token, expires_in) => {
  let expires = new Date()
  expires.setTime(expires.getTime() + expires_in * 1000)
  document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/`

  axios.defaults.headers['Authorization'] = `Bearer ${token}`
}
