import axiosInstance from '@/config/axios/index'

axios.defaults.withCredentials = true

await axios.get('http://localhost:8000/sanctum/csrf-cookie')

export default async function registerUser(data) {
  try {
    await axiosInstance.post('/api/register', data)
  } catch (error) {
    console.log(error)
  }
}
