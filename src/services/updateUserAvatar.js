import axiosInstance from '@/config/axios/index'

export default async function updateUserAvatar(id, data) {
  try {
    const response = await axiosInstance.post(`/api/update/avatar/${id}`, data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
