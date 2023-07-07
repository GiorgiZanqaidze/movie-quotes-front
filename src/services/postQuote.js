import axiosInstance from '@/config/axios/index'

export default async function likeQuote(data) {
  try {
    const response = await axiosInstance.post('api/quote/store', data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
