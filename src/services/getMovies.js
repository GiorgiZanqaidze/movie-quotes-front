import axiosInstance from '@/config/axios/index'

export default async function getMovies() {
  try {
    const response = await axiosInstance.get('api/movies')
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
