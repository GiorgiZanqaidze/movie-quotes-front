import axiosInstance from '@/config/axios/index'

export default async function getUser() {
  try {
    const response = await axiosInstance.get('/api/user')
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
