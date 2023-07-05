import axiosInstance from '@/config/axios/index'

export default async function updataPassword(data) {
  try {
    const response = await axiosInstance.post(`/api/reset-password`, data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
