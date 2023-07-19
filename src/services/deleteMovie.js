import axiosInstance from '@/config/axios/index'

export default async function deleteMovie(id) {
  try {
    const response = await axiosInstance.delete(`api/movie/destroy/${id}`)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
