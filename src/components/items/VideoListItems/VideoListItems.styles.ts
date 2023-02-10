import { StyledCustomSelect } from 'components/common'
import styled from 'styled-components'
import { breakpoints } from 'theme'

const StyledVideoListItems = styled.div`
  ${StyledCustomSelect} {
    transform: translateY(20px);
    opacity: 0;
    animation: fade-in-slide-up 600ms forwards ease-in-out;
    animation-delay: var(--delay-appereance-1);
  }
  .items {
    display: grid;
    gap: 20px;
    margin-top: 25px;
    @media (max-width: ${breakpoints.screenLg}) {
      gap: 24px;
    }
  }
`

export { StyledVideoListItems }
