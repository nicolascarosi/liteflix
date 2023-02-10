import styled from 'styled-components'
import { ISize } from 'interfaces'
import { fontSize, Icon } from 'utils'
import { breakpoints } from 'theme'
import { StyledButton } from '../Button'

const widths = {
  normal: '730px',
  large: '1250px',
}

const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 800;
`

const ModalContent = styled.div<{ size: ISize }>`
  background-color: var(--black);
  max-width: ${({ size = 'normal' }) => widths[size]};
  width: 100%;
  min-height: 440px;
  position: relative;
  z-index: 800;
  @media (max-width: ${breakpoints.screenLg}) {
    height: 100%;
    max-width: unset;
  }
`

const ModalHeader = styled.div`
  padding: 48px 64px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${breakpoints.screenLg}) {
    padding: 144px 24px 0;
  }
  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 24px;
    right: 24px;
    opacity: 1;
    transition: opacity 400ms;
    &:hover {
      opacity: 0.7;
    }
  }
  h3 {
    ${fontSize(20, 400, 20, 4)};
    color: var(--primary);
    text-align: center;
    width: 100%;
  }
`

const ModalBody = styled.div`
  padding: 48px 64px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${breakpoints.screenLg}) {
    padding: 72px 24px;
  }
`

const ModalFooter = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: absolute;
  bottom: 48px;
  ${StyledButton} {
    animation-delay: 0;
    span,
    ${Icon} {
      animation-delay: 0;
    }
  }
  @media (max-width: ${breakpoints.screenLg}) {
    flex-direction: column;
  }
`

export { ModalContent, StyledModal, ModalHeader, ModalBody, ModalFooter }
