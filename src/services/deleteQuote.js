import axiosInstance from '@/config/axios/index'

export default async function deleteQuote(id) {
  try {
    const response = await axiosInstance.delete(`api/quote/destroy/${id}`)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
