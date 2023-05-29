import { covidApi } from '../config/axios/axiosInstances'

export default async function postCovidData(data) {
  try {
    await covidApi.post('create', data)
  } catch (error) {
    console.log(error)
  }
}
