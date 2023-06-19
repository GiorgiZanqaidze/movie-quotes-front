import axiosInstance from '@/config/axios/index'

export default async function getMovies(id) {
  try {
    const response = await axiosInstance.get(`api/movie/${id}`)
    return response
  } catch (error) {
    return error
  }
}
