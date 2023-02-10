/* eslint-disable react-hooks/exhaustive-deps */
import { Hero } from 'components/heroes'
import { BASE_URL_MOVIEDB_IMAGES } from 'config/constants'
import { useMoviesData } from 'hooks'
import { IMovie } from 'interfaces'
import { useEffect, useState } from 'react'
import { moviesService } from 'services/movies.service'

const Home = () => {
  const [featuredMovie, setFeaturedMovie] = useState<IMovie | null>(null)

  const { setPopular } = useMoviesData()

  useEffect(() => {
    initFeaturedMovie()
    initPopularMovies()
  }, [])

  const initFeaturedMovie = async () => {
    const result: IMovie[] = await moviesService.fetchNowPlaying()
    const firstMovie: IMovie = result[0]
    setFeaturedMovie(firstMovie)
  }

  const initPopularMovies = async () => {
    const result: IMovie[] = await moviesService.fetchPopular()
    //Get only first 4 items and format
    let formattedResults = result.slice(0, 4)
    let year = ''

    formattedResults = formattedResults.map((movie) => {
      if (movie.release_date)
        year = new Date(movie.release_date).getFullYear().toString()
      return {
        title: movie.title,
        backdrop_path: `${BASE_URL_MOVIEDB_IMAGES}/original${movie.backdrop_path}`,
        vote_average: movie.vote_average,
        release_date: year,
        id: movie.id,
      }
    })

    setPopular(formattedResults)
  }

  return (
    <div className="page-home">
      {featuredMovie && (
        <Hero
          title={featuredMovie.title}
          backgroundImage={featuredMovie.backdrop_path}
          original
        />
      )}
    </div>
  )
}

export { Home }
