import axiosInstance from '@/config/axios/index'

export default async function registerUser(data) {
  try {
    await axiosInstance.post('/api/register', data)
  } catch (error) {
    console.log(error)
  }
}
