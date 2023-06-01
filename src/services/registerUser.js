import axiosInstance from '@/config/axios/index'

// axiosInstance.defaults.withCredentials = true

// await axiosInstance.get('/sanctum/csrf-cookie')

export default async function registerUser(data) {
  try {
    await axiosInstance.post('/api/register', data)
  } catch (error) {
    console.log(error)
  }
}
