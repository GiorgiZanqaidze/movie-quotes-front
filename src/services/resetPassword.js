import axiosInstance from '@/config/axios/index'

export default async function resetPassword(data, token) {
  try {
    const response = await axiosInstance.patch(`/api/reset-password/${token}`, data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
