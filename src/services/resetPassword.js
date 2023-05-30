import axiosInstance from '../config/axios/index'

export default async function resetPassword(data) {
  console.log(data)
  try {
    await axiosInstance.post('reset-password', data)
  } catch (error) {
    console.log(error)
  }
}
