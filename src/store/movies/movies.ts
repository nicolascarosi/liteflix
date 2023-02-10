import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  popularMovies: [],
  myMovies: JSON.parse(localStorage.my_movies || '[]').slice(0, 4),
  loading: true,
}

const movies = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    setPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload
    },
    setMyMovies: (state, actions) => {
      state.myMovies = actions.payload
    },
    setLoading: (state, actions) => {
      state.loading = actions.payload
    },
  },
})

export const moviesActions = movies.actions
export default movies.reducer
