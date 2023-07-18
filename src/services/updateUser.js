import axiosInstance from '@/config/axios/index'

export default async function updateUser(id, data) {
  try {
    const response = await axiosInstance.post(`/api/update/user/${id}`, data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
