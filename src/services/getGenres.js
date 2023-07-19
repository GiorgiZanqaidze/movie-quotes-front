import axiosInstance from '@/config/axios/index'

export default async function getQuotes() {
  try {
    const response = await axiosInstance.get('/api/genres')
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
