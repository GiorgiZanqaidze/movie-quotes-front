import axiosInstance from '@/config/axios/index'

export default async function verifyUser(data) {
  try {
    await axiosInstance.post(`api//email/verify/${data}`)
  } catch (error) {
    console.log(error)
  }
}
