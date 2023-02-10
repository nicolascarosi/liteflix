import axios from 'axios'
import { endpoints } from 'config/endpoints'

export const moviesService = {
  fetchNowPlaying: async () =>
    await axios
      .get(`${endpoints.NOW_PLAYING}`)
      .then((response) => response.data.results),

  fetchPopular: async () =>
    await axios
      .get(`${endpoints.POPULAR}`)
      .then((response) => response.data.results),
}
