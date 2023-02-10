import { StyledButton } from 'components'
import { StyledLogo } from 'layout/Logo'
import styled from 'styled-components'
import { breakpoints } from 'theme'
import { Wrapper } from 'utils'

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  ${Wrapper} {
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.screenLg}) {
      justify-content: center;
    }
    > ${StyledLogo}, > ${StyledButton} {
      transform: translateY(20px);
      opacity: 0;
      animation: fade-in-slide-up 600ms forwards ease-in-out;
      animation-delay: var(--delay-appereance-2);
    }
    > ${StyledButton} {
      position: relative;
      z-index: 20;
      margin-left: 24px;
      @media (max-width: ${breakpoints.screenLg}) {
        display: none;
      }
    }
  }
`

export { StyledHeader }
