import axiosInstance from '@/config/axios/index'

export default async function getAllMovies() {
  try {
    const response = await axiosInstance.get('api/all-movies')
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
