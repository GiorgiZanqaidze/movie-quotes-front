import axiosInstance from '@/config/axios/index'

export default async function getQuotes() {
  try {
    const response = await axiosInstance.get('api/quotes')
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
