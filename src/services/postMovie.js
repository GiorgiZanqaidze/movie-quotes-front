import axiosInstance from '@/config/axios/index'

export default async function likeQuote(data) {
  try {
    const response = await axiosInstance.post('api/movie/store', data)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
