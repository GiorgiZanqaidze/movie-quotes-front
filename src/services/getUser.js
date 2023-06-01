import axiosInstance from '@/config/axios/index'
import { userStore } from '@/stores/user.js'

export default async function getUser() {
  const user = userStore()
  try {
    const response = await axiosInstance.get('/api/user')
    user.getUser({ ...response.data })
  } catch (error) {
    console.log(error)
  }
}
