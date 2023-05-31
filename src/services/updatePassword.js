import axiosInstance from '@/config/axios/index'

export default async function updataPassword(data) {
  try {
    await axiosInstance.post(`/api/reset-password`, data)
  } catch (error) {
    console.log(error)
  }
}
