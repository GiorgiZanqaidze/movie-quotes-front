import axiosInstance from '@/config/axios/index'

export default async function updateNotifications() {
  try {
    const response = await axiosInstance.get('/api/notifications/mark-as-read')
    return response
  } catch (error) {
    return error
  }
}
