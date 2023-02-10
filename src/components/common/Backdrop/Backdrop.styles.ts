import styled from 'styled-components'

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-body);
  z-index: 500;
  transition: opacity var(--backdrop-transition-duration);
`

export { StyledBackdrop }
