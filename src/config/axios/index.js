import axios from 'axios'
import { getToken } from '@/helpers/cookie_token/index.js'

const value = `; ${document.cookie}`
const parts = value.split(`token=`)
const token = parts.length === 2 ? parts.pop().split(';').shift() : null
axios.defaults.withCredentials = true
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest'
    // Authorization: 'Bearer ' + token
  }
})

export default axiosInstance
