import axiosInstance from '@/config/axios/index'

export default async function updateMovie(id, data) {
  try {
    const response = await axiosInstance.post(`api/movie/update/${id}`, data)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
