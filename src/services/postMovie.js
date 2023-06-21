import axiosInstance from '@/config/axios/index'

export default async function likeQuote(data) {
  try {
    const response = await axiosInstance.post('api/movie/store', data)
    console.log(response)
    return response
  } catch (error) {
    return error
    console.log(error)
  }
}
