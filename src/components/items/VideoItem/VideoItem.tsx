import { iconPlay, iconStar } from 'assets'
import { Icon } from 'utils'
import { IVideoItem } from './VideoItem.interface'
import { StyledVideoItem } from './VideoItem.styles'

const VideoItem = ({
  title,
  backdrop_path,
  vote_average,
  release_date,
  index,
}: IVideoItem) => {
  const delayMultiplicator = ++index

  return (
    <StyledVideoItem backdrop_path={backdrop_path} index={delayMultiplicator}>
      <div className="body">
        <h2>{title}</h2>
      </div>
      <div className="overlay">
        <div className="overlay__title">
          <Icon icon={iconPlay} width={24} height={24} /> <span>{title}</span>
        </div>
        {vote_average && release_date ? (
          <div className="movie-details">
            <div className="movie-details__vote-average">
              <Icon icon={iconStar} /> <span>{vote_average}</span>
            </div>
            <div className="movie-details__release-year">
              <span>{release_date}</span>
            </div>
          </div>
        ) : null}
      </div>
    </StyledVideoItem>
  )
}

export { VideoItem }
