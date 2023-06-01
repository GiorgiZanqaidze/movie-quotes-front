import axiosInstance from '@/config/axios/index'

export default async function verifyUser(data) {
  axiosInstance.defaults.withCredentials = true

  await axiosInstance.get('/sanctum/csrf-cookie')

  await axiosInstance
    .post(`/api/email/verify/${data}`)
    .then((response) => {
      console.log(response.data.msg)
    })
    .catch((error) => {
      console.log(error)
    })
}
