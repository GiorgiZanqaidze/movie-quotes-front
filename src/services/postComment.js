import axiosInstance from '@/config/axios/index'

export default async function postComment(data) {
  try {
    const response = await axiosInstance.post('api/comment/store', data)
    return response
  } catch (error) {
    return error
  }
}
