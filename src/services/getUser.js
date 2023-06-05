import axiosInstance from '@/config/axios/index'

export default async function getUser() {
  try {
    await axiosInstance.get('/sanctum/csrf-cookie')
    const response = await axiosInstance.get('/api/user')
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
