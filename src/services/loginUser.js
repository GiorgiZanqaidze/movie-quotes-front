import axiosInstance from '@/config/axios/index'

export default async function loginUser(data) {
  try {
    const response = await axiosInstance.post('/api/login', data)
  } catch (error) {
    console.log(error)
  }
}
