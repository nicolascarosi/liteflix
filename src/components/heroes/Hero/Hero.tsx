import { iconPlayBtn, iconPlus } from 'assets'
import { VideoListItems, Button } from 'components'
import { BASE_URL_MOVIEDB_IMAGES } from 'config/constants'
import { Wrapper } from 'utils'
import { IHero } from './Hero.interface'
import { StyledHero, StyledHeroContainer } from './Hero.styles'

const Hero = ({ title, backgroundImage, original = false }: IHero) => (
  <StyledHero
    backgroundImage={`${BASE_URL_MOVIEDB_IMAGES}/original${backgroundImage}`}
  >
    <Wrapper>
      <StyledHeroContainer>
        <div className="details">
          {original && (
            <p>
              Original de <strong>LiteFlix</strong>
            </p>
          )}
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="actions">
            <Button label="Reproducir" icon={iconPlayBtn} />
            <Button label="Mi lista" icon={iconPlus} variant="outline" />
          </div>
        </div>
        <div className="featured-items">
          <VideoListItems />
        </div>
      </StyledHeroContainer>
    </Wrapper>
  </StyledHero>
)

export { Hero }
