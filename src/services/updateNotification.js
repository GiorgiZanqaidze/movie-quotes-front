import axiosInstance from '@/config/axios/index'

export default async function updateNotifications(id) {
  try {
    const response = await axiosInstance.post(`/api/notification/mark-as-read/${id}`)
    return response
  } catch (error) {
    return error
  }
}
