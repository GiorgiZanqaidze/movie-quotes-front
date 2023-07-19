import axiosInstance from '@/config/axios/index'

export default async function updateEmail(token, data) {
  try {
    const response = await axiosInstance.post(`/api/update-email/${token}`, data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
