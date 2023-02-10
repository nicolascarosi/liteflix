import { moviesActions } from 'store/movies/movies'
import { IMovie } from 'interfaces'
import { useAppDispatch, useAppSelector } from 'store/hooks'

const useMoviesData = () => {
  const dispatch = useAppDispatch()
  const { popularMovies, myMovies } = useAppSelector((state) => state.movies)

  const getPopular = () => popularMovies
  const getMyMovies = () => myMovies

  const setPopular = (movies: IMovie[]) =>
    dispatch(moviesActions.setPopularMovies(movies))

  const setMyMovies = (movies: IMovie[]) => {
    dispatch(moviesActions.setMyMovies(movies))
    localStorage.setItem('my_movies', JSON.stringify(movies))
  }

  const addMovie = async (movie: IMovie) => {
    const movies: IMovie[] = [...myMovies]
    if (movies.length >= 4) {
      movies.pop()
    }
    movies.unshift(movie)
    setMyMovies(movies)
  }

  return {
    getPopular,
    getMyMovies,
    setPopular,
    setMyMovies,
    addMovie,
  }
}

export { useMoviesData }
