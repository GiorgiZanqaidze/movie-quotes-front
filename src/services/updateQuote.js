import axiosInstance from '@/config/axios/index'

export default async function updateQuote(id, data) {
  try {
    const response = await axiosInstance.post(`api/quote/update/${id}`, data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
