import axiosInstance from '@/config/axios/index'

export default async function registerUser(data) {
  try {
    await axiosInstance.get('/sanctum/csrf-cookie')
    const response = await axiosInstance.post('/api/register', data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
