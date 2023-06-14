import axiosInstance from '@/config/axios/index'

export default async function likeQuote(data) {
  try {
    const response = await axiosInstance.post('/api/like/quote', data)
    return response
  } catch (error) {
    return error
  }
}
