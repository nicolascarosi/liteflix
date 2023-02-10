import axios from 'axios'
import { endpoints } from 'config/endpoints'
import { ImagesData } from 'interfaces'

export const controller = new AbortController()

export const imagesService = {
  upload: async (data: ImagesData, signal: AbortSignal) =>
    await axios
      .post(`${endpoints.UPLOAD}`, data, {
        signal,
      })
      .then((response) => response.data)
      .catch((error) => error.code),
}
