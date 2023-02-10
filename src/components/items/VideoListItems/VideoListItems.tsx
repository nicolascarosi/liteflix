import { VideoItem, CustomSelect } from 'components'
import { useMoviesData } from 'hooks'
import { IMovie } from 'interfaces'
import { useCallback, useState } from 'react'
import { StyledVideoListItems } from './VideoListItems.styles'

const options = ['Populares', 'Mis películas']

const VideoListItems = () => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  const { getPopular, getMyMovies } = useMoviesData()
  const popularMovies: IMovie[] = getPopular()
  const myMovies: IMovie[] = getMyMovies()

  const handleChangeSelect = useCallback((option: string) => {
    setSelectedOption(option)
  }, [])

  return (
    <StyledVideoListItems>
      <CustomSelect
        label="Ver"
        options={options}
        onChange={handleChangeSelect}
      />
      <div className="items">
        {selectedOption === 'Populares' ? (
          <>
            {popularMovies &&
              popularMovies.map((video, i: number) => (
                <VideoItem key={`video-${video.id}}`} {...video} index={++i} />
              ))}
          </>
        ) : (
          <>
            {myMovies
              ? myMovies.map((video, i: number) => (
                  <VideoItem key={`my-video-${i}}`} {...video} index={++i} />
                ))
              : null}
          </>
        )}
      </div>
    </StyledVideoListItems>
  )
}

export { VideoListItems }
