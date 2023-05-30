import axiosInstance from '../config/axios/index'
import { setToken } from '@/helpers/cookie_token/index.js'

export default async function loginUser(data) {
  try {
    const response = await axiosInstance.post('login', data)
    setToken(response.data, 1000)
  } catch (error) {
    console.log(error)
  }
}
