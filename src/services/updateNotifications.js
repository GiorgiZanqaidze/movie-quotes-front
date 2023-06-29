import axiosInstance from '@/config/axios/index'

export default async function updateNotifications() {
  try {
    const response = await axiosInstance.get('/api/notifications/mark-as-read')
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
