import axiosInstance from '@/config/axios/index'

export default async function googleAuth() {
  try {
    const response = await axiosInstance.get('api/google-login')
    window.location.href = response.data.url
  } catch (error) {
    console.log(error)
  }
}
