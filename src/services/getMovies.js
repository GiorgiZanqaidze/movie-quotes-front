import axiosInstance from '@/config/axios/index'

export default async function getMovies(query) {
  try {
    const response = await axiosInstance.get(`api/user-movies?query=${query}`)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
