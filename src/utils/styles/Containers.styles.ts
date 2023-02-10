import styled from 'styled-components'
import { breakpoints } from 'theme'

const Wrapper = styled.div`
  width: min(100% - 200px);
  margin-inline: auto;
  position: relative;
  @media (max-width: ${breakpoints.screenLg}) {
    width: min(100% - 48px);
  }
`

export { Wrapper }
