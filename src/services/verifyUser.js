import axiosInstance from '@/config/axios/index'

export default async function verifyUser(data) {
  try {
    const response = await axiosInstance.post(`/api/email/verify/${data}`)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
