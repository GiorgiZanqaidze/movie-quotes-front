import axiosInstance from '@/config/axios/index'

export default async function getAllMovies() {
  try {
    const response = await axiosInstance.get('api/all-movies')
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
