import styled from 'styled-components'
import { breakpoints } from 'theme'
import { fontSize } from 'utils'

const StyledLogo = styled.div`
  ${fontSize(34, 300, 34, 4)};
  color: var(--primary);
  position: relative;
  z-index: 100;
  @media (max-width: ${breakpoints.screenLg}) {
    z-index: 1000;
  }
`

export { StyledLogo }
