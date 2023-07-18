import axiosInstance from '@/config/axios/index'

export default async function verifyUserEmail(verifyToken) {
  try {
    const response = await axiosInstance.post(`api/resend/email/verify/${verifyToken}`)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
