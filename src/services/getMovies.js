import axiosInstance from '@/config/axios/index'

export default async function getMovies(query) {
  try {
    const response = await axiosInstance.get(`api/movies?query=${query}`)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
