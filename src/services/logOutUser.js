import axiosInstance from '@/config/axios/index'

export default async function logOutUser() {
  try {
    const response = await axiosInstance.post('/api/logout')
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
