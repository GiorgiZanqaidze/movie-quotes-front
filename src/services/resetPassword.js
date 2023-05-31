import axiosInstance from '@/config/axios/index'

export default async function resetPassword(data, token) {
  try {
    await axiosInstance.patch(`/api/reset-password/${token}`, data)
  } catch (error) {
    console.log(error)
  }
}
